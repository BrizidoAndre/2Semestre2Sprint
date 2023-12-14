using apiweb.eventplus.manha.Domains;
using apiweb.eventplus.manha.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.CognitiveServices.ContentModerator;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace apiweb.eventplus.manha.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class ComentarioEventoController : Controller
    {
        ComentarioEventoRepository comentario = new ComentarioEventoRepository();

        private readonly ContentModeratorClient _contentModeratorClient;

        public ComentarioEventoController(ContentModeratorClient contentModeratorClient)
        {
            _contentModeratorClient = contentModeratorClient;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(comentario.Listar());

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        [HttpGet("BuscarPorIdUsuario")]
        public IActionResult GetByIdUser(Guid idAluno, Guid idEvento)
        {
            try
            {
                return Ok(comentario.BuscarPorIdUsuario(idAluno, idEvento));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("BuscarPorEvento/{id}")]
        public IActionResult GetByEvent(Guid id)
        {
            try
            {
                return Ok(comentario.BuscarPorEvento(id));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public IActionResult Post(ComentarioEvento novoComentario)
        {
            try
            {
                comentario.Cadastrar(novoComentario);

                return StatusCode(201, novoComentario);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            try
            {
                comentario.Deletar(id);
                return StatusCode(204);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("ListarSomenteExibe")]
        public IActionResult GetExibe()
        {
            try
            {
                return Ok(comentario.ListarSomenteExibe());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost("ComentarioIA")]
        public async Task<IActionResult> PostIA(ComentarioEvento _comentarioEvento)
        {
            try
            {
                if (_comentarioEvento.Descricao.IsNullOrEmpty())
                {
                    return BadRequest("O comentário está vazio");
                }

                using var stream = new MemoryStream(Encoding.UTF8.GetBytes(_comentarioEvento.Descricao));

                var moderationResult = await _contentModeratorClient.TextModeration.ScreenTextAsync("text/plain", stream, "por", false, false, null, true);

                if (moderationResult.Terms != null)
                {
                    _comentarioEvento.Exibe = false;

                    comentario.Cadastrar(_comentarioEvento);
                }
                else
                {
                    _comentarioEvento.Exibe = false;

                    comentario.Cadastrar(_comentarioEvento);
                }

                return StatusCode(201,_comentarioEvento);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
