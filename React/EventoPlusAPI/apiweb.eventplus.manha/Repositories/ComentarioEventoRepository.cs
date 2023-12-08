using apiweb.eventplus.manha.Contexts;
using apiweb.eventplus.manha.Domains;

namespace apiweb.eventplus.manha.Repositories
{
    public class ComentarioEventoRepository
    {
        EventContext _eventContext = new EventContext();
        public List<ComentarioEvento> Listar()
        {
            return _eventContext.ComentarioEvento.ToList();
        }

        
        public ComentarioEvento BuscarPorIdUsuario(Guid id, Guid idEvento)
        {
            return _eventContext.ComentarioEvento.Select(z => new ComentarioEvento
            {
                IdComentarioEvento = z.IdComentarioEvento,
                Descricao = z.Descricao,
                Exibe = z.Exibe,
                IdUsuario = z.IdUsuario,
                IdEvento = z.IdEvento,

                Usuario = new Usuario
                {
                    Nome = z.Usuario.Nome
                },

                Evento = new Evento
                {
                    NomeEvento = z.Evento.NomeEvento
                }
            }).FirstOrDefault(z => z.IdUsuario == id && z.IdEvento == idEvento)!;
        }

        public void Cadastrar(ComentarioEvento novoComentario)
        {
            if (novoComentario != null)
            {
            _eventContext.ComentarioEvento.Add(novoComentario);
            _eventContext.SaveChanges();
            }
        }

        public void Deletar(Guid id)
        {
            ComentarioEvento comentarioDeletado =  _eventContext.ComentarioEvento.FirstOrDefault(z => z.IdComentarioEvento == id)!;

            _eventContext.ComentarioEvento.Remove(comentarioDeletado);

            _eventContext.SaveChanges();
        }
    }
}
