using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Books_Manager_WebApi.DTOs;
using Books_Manager_WebApi.Models;

namespace Books_Manager_WebApi.Utilitis
{
    public class AutoMapper : Profile
    {
        public AutoMapper()
        {
            CreateMap<Autor, AutorDto>();
            CreateMap<AutorCreateDTO, Autor>();
        }
    }
}