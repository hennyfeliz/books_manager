using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Books_Manager_WebApi.DTOs
{
    public class AutorDTO
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public DateOnly FechaNacimiento { get; set; }
        public int GeneroId { get; set; }
    }
}