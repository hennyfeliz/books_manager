using System;
using System.Collections.Generic;

namespace Books_Manager_WebApi.Models
{
    public partial class Genero
    {
        public int Id { get; set; }
        public string Nombre { get; set; }

        public virtual ICollection<Autor> Autor { get; set; }
        public virtual ICollection<Book> Book { get; set; }
    }
}
