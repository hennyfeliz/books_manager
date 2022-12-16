using System;
using System.Collections.Generic;

namespace Books_Manager_WebApi.Models
{
    public partial class Book
    {
        public int Id { get; set; }
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

        public virtual Autor Autor { get; set; }
        public virtual Genero Genero { get; set; }
    }
}
