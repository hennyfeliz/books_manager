using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Books_Manager_WebApi.DTOs;
using Books_Manager_WebApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Books_Manager_WebApi.Controllers
{
    [ApiController]
    [Route("api/generos")]
    public class GeneroController : ControllerBase
    {
        private readonly BooksContext context;
        private readonly IMapper mapper;
        public GeneroController(BooksContext context, IMapper mapper)
        {
            this.mapper = mapper;
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<GeneroDTO>>> GeneroGet()
        {
            var generos = await context.Generos.ToListAsync();
            return mapper.Map<List<GeneroDTO>>(generos);
        }

        [HttpGet("{nombre}")]
        public async Task<ActionResult<List<GeneroDTO>>> GetGeneroName(string nombre)
        {
            var generos = await context.Generos
                .Where(generoBD => generoBD.Nombre.Contains(nombre)).ToListAsync();

            return mapper.Map<List<GeneroDTO>>(generos);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<GeneroDTO>> GetGeneroId(int id)
        {
            var genero = await context.Generos.FirstOrDefaultAsync(generoBD => generoBD.Id == id);
            return mapper.Map<GeneroDTO>(genero);
        }


        [HttpPost]
        public async Task<ActionResult> generoPost(GeneroCreateDTO generoDTO)
        {
            var genero = mapper.Map<Genero>(generoDTO);

            context.Add(genero);
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> generoPut(Genero genero)
        {
            var exists = await context.Generos.AnyAsync();
            if (!exists)
            {
                return BadRequest();
            }

            context.Update(genero);
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> generoDetelete(int id)
        {
            var exists = await context.Generos.AnyAsync();
            if (!exists)
            {
                return BadRequest();
            }

            context.Remove(new Genero() {Id = id});
            await context.SaveChangesAsync();
            return Ok();
        }
    }
}