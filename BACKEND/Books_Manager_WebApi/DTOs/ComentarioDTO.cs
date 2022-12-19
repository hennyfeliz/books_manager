using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Books_Manager_WebApi.DTOs
{
    public class ComentarioDTO
    {
        public int Id { get; set; }
        public int UsuarioId { get; set; }
        public string Contenido { get; set; }
        public DateOnly Fecha { get; set; }
        public int BookId { get; set; }
    }
}