using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Books_Manager_WebApi.DTOs
{
    public class AutorCreateDTO
    {
        
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public DateOnly FechaNacimiento { get; set; }
        public int GeneroId { get; set; }
    }
}