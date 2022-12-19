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
    [Route("api/autores")]
    public class AutorController : ControllerBase
    {
        private readonly BooksContext context;
        private readonly IMapper mapper;
        public AutorController(BooksContext context, IMapper mapper)
        {
            this.mapper = mapper;
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<AutorDTO>>> GetAutores()
        {
            var autores = await context.Autores.ToListAsync();
            return mapper.Map<List<AutorDTO>>(autores);
        }

        [HttpGet("{nombre}")]
        public async Task<ActionResult<List<AutorDTO>>> GetAutorName (string nombre)
        {
            var autores = await context.Autores.Where(autorBD => autorBD.Nombre.Contains(nombre)).ToListAsync();
            return mapper.Map<List<AutorDTO>>(autores);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<AutorDTO>> GetAutorId(int id)
        {
            var exists = await context.Autores.AnyAsync(autorBD => autorBD.Id == id);
            if(!exists)
            {
                return NotFound();
            }

            var autor = context.Autores.FirstOrDefault(autorBD => autorBD.Id == id);
            return mapper.Map<AutorDTO>(autor);
        }

        [HttpPost]
        public async Task<ActionResult> PostAutores(AutorCreateDTO autorDto)
        {
            var autor = mapper.Map<Autor>(autorDto);

            context.Add(autor);
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> PutAutores(Autor autor)
        {
            var existe = await context.Autores.AnyAsync(x => x.Id == autor.Id);
            if(!existe)
            {
                return NotFound();
            }

            context.Update(autor);
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> DeleteAutores(int id)
        {
            var exists = await context.Autores.AnyAsync(x => x.Id == id);
            if(!exists)
            {
                return NotFound();
            }

            context.Remove(new Autor() {Id = id});
            await context.SaveChangesAsync();
            return Ok();
        }
    }
}