using Microsoft.Azure.CognitiveServices.ContentModerator;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

//PARA OS TOKENS------------------------------------------------------

//N�o esquecer de adicionar os 2 nuggets seguintes
//System.IdentityModel.Tokens.Jwt
//Microsoft.AspNetCore.Authentication.JwtBearer


//Adiciona servi�o de Jwt Bearer (forma de autentica��o)
builder.Services.AddAuthentication(options =>
{
    options.DefaultChallengeScheme = "JwtBearer";
    options.DefaultAuthenticateScheme = "JwtBearer";
})

.AddJwtBearer("JwtBearer", options =>
{
    options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
    {
        //Valida quem est� solicitando
        ValidateIssuer = true,

        //Valida quem est� recebendo
        ValidateAudience = true,

        //Define se o tempo de expira��o ser� validado
        ValidateLifetime = true,

        IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("projetoevent-chave-autenticacao-webapi-dev")),

        //Valida o tempo de expira��o do token
        ClockSkew = TimeSpan.FromMinutes(5),

        //Nome do issuer (de onde est� vindo)
        ValidIssuer = "apiweb.eventplus.manha",

        //Nome do audience (para onde est� indo)
        ValidAudience = "apiweb.eventplus.manha"

    };
});


//Adicione o servi�o Swagger � cole��o de servi�os
builder.Services.AddSwaggerGen(options =>
{
    //Adiciona informa��es sobre a API no Swagger
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Version = "v1",
        Title = "API Event +",
        Description = "API para consolida��o dos conhecimentos no entity framework",

        TermsOfService = new Uri("https://help.habbo.com.br/hc/pt-br/articles/360011504000-Termos-e-Condi%C3%A7%C3%B5es"),
        Contact = new OpenApiContact
        {
            Name = "Senai Inform�tica - Turma Manh� Andr�",
            Url = new Uri("https://github.com/BrizidoAndre/2Semestre1Sprint/tree/main/API")
        }
    });

    //Adicionar dentro de AddSwaggerGen
    options.ResolveConflictingActions(apiDescriptions => apiDescriptions.First());


    //BLOCO DE C�DIGO PARA APARECER UM INPUT DE AUTENTICA��O NO SWAGGER
    //NESSE INPUT N�S DEVEMOS SEMPRE COLOCAR UM "Bearer" ANTES DE COLOCAR UM TOKEN

    //Usando a autentica�ao no Swagger
    options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme()
    {
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = "Value: Bearer TokenJWT ",
    });
    options.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            new string[] {}
        }
    });

    // FIM DO BLOCO DE C�DIGO PARA AUTENTICA��O DO SWAGGER



});

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "MyPolicy",
    policy =>
    {
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    }
    );
});




//Config do Servico Content Moderator Azure
builder.Services.AddSingleton(provider => new ContentModeratorClient(
    //Chave fornecida pela Azure
    new ApiKeyServiceClientCredentials("840716977ccf4aa88b34b88c3781fc40")) //o valor entre parenteses � a credencial individual de cada um.
{
    //EndPoint Disponivel Pelo Azure
    Endpoint = "https://eventplusmoderator-andre.cognitiveservices.azure.com/"
});



var app = builder.Build();

//Alterar dados do Swagger para a seguinte configura��o
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseSwagger(options =>
{
    options.SerializeAsV2 = true;
});

app.UseSwaggerUI();

//Para atender � interface do usu�rio do Swagger na raiz do aplicativo
app.UseSwaggerUI(options =>
{
    options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
    options.RoutePrefix = string.Empty;
});

// ESSE BLOCO DE C�DIGO ERA USADO PARA ACESSAR A API LOCALMENTE

////Come�a a configura��o do Swagger
//if (app.Environment.IsDevelopment())
//{
//    app.UseSwagger();
//    app.UseSwaggerUI();
//}

//app.UseSwaggerUI(options =>
//{
//    options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
//    options.RoutePrefix = string.Empty;
//});



app.UseCors("MyPolicy");

app.UseRouting();

//Finaliza a configura��o Swagger
app.MapControllers();



//Adiciona autentica��o
app.UseAuthentication();

//Adiciona autoriza��o
app.UseAuthorization();

app.UseHttpsRedirection();

app.Run();
