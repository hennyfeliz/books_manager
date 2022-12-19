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
    [Route("api/books/{BookId:int}/comentarios")]
    public class ComentarioController : ControllerBase
    {
        private readonly BooksContext context;
        private readonly IMapper mapper;
        public ComentarioController(BooksContext context, IMapper mapper)
        {
            this.mapper = mapper;
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<ComentarioDTO>>> GetComentarios(int BookId)
        {
            var exists = await context.Books.AnyAsync(BookBD => BookBD.Id == BookId);
            if (!exists)
            {
                return NotFound();
            }

            var comentarios = await context.Comentarios
                .Where(ComentarioBD => ComentarioBD.BookId == BookId).ToListAsync();

            return mapper.Map<List<ComentarioDTO>>(comentarios);
        }

        [HttpPost]
        public async Task<ActionResult> PostCometario(int BookId, ComentarioCreateDTO comentarioDTO)
        {
            var exists = await context.Books.AnyAsync(BookBD => BookBD.Id == BookId);
            if (!exists)
            {
                return NotFound();
            }

            var comentario = mapper.Map<Comentario>(comentarioDTO);
            comentario.BookId = BookId;

            context.Add(comentario);
            await context.SaveChangesAsync();
            return Ok();
        }
    }
}