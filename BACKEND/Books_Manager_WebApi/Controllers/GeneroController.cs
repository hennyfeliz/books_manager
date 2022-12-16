using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Books_Manager_WebApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Books_Manager_WebApi.Controllers
{
    [ApiController]
    [Route("api/genero")]
    public class GeneroController : ControllerBase
    {
        private readonly BooksContext context;
        public GeneroController(BooksContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Genero>>> GeneroGet()
        {
            return await context.Generos.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult> generoPost(Genero genero)
        {
            var exists = await context.Generos.AnyAsync(x => x.Id == genero.Id);
            if (!exists)
            {
                return BadRequest();
            }

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