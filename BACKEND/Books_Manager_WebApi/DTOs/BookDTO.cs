using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Books_Manager_WebApi.DTOs
{
    public class BookDTO
    {
        public string Titulo { get; set; }
        public string Descripcion { get; set; }
        public DateOnly FechaLanzamiento { get; set; }
        public int? CantidadPaginas { get; set; }
        public int? CantidadRestantes { get; set; }
        public int? AutorId { get; set; }
        public int? GeneroId { get; set; }
        public double? Precio { get; set; }
        public byte[] Imagen { get; set; }
        public string PathImagen { get; set; }
    }
}