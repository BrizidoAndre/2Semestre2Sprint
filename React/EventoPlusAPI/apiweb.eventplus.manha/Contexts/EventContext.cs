using apiweb.eventplus.manha.Domains;
using Microsoft.EntityFrameworkCore;

namespace apiweb.eventplus.manha.Contexts
{
    public class EventContext : DbContext
    {
        public DbSet<TipoUsuario> TipoUsuario { get; set; }
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<TipoEvento> TipoEvento { get; set; }
        public DbSet<Evento> Evento { get; set; }
        public DbSet<ComentarioEvento> ComentarioEvento { get; set; }
        public DbSet<Instituicao> Instituicao { get; set; }
        public DbSet<PresencaEvento> PresencaEvento { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //string de conexão local SSMS
            //optionsBuilder.UseSqlServer("Server=NOTE07-S15; Database= Event+_manha;User Id = sa; Pwd = Senai@134; TrustServerCertificate=true;");

            //String de conexão nuvem Azure
            optionsBuilder.UseSqlServer("Server=tcp:eventmanhaandre-server.database.windows.net,1433;Initial Catalog=eventmanhadatabaseandre;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30; User Id = eventmanhaandre-server; Pwd = Senai@134");
            base.OnConfiguring(optionsBuilder);
        }

    }
}
