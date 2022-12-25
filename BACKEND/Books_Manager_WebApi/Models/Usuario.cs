using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Books_Manager_WebApi.Models
{
    public class Usuario
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Contrasena { get; set; }
        public DateOnly FechaCreacion { get; set; }
        public byte[] ProfileIcon { get; set; }
        public string ProfileIconPath { get; set; }
        public ICollection<Comentario> Comentario { get; set; }
        
    }
}