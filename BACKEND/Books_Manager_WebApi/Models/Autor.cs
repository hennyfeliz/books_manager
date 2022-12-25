using System;
using System.Collections.Generic;

namespace Books_Manager_WebApi.Models
{
    public partial class Autor
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public DateOnly FechaNacimiento { get; set; }
        public int GeneroId { get; set; }

        public virtual Genero Genero { get; set; }
        public virtual ICollection<Book> Book { get; set; }
    }
}
