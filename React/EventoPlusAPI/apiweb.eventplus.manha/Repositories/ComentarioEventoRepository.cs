using apiweb.eventplus.manha.Contexts;
using apiweb.eventplus.manha.Domains;
using Microsoft.AspNetCore.Http.HttpResults;

namespace apiweb.eventplus.manha.Repositories
{
    public class ComentarioEventoRepository
    {
        EventContext _eventContext = new EventContext();
        public List<ComentarioEvento> Listar()
        {
            return _eventContext.ComentarioEvento.ToList();
        }

        public List<ComentarioEvento> ListarSomenteExibe(Guid id)
        {
            return (_eventContext.ComentarioEvento.Select(z => new ComentarioEvento
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
            }).Where(z => z.Exibe == true && z.IdEvento == id).ToList());
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

        public List<ComentarioEvento> BuscarPorEvento(Guid id)
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
            }).Where(z => z.IdEvento == id).ToList();
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
