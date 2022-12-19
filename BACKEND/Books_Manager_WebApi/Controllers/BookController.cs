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
    [Route("api/books")]
    public class BookController : ControllerBase
    {
        private readonly BooksContext context;
        private readonly IMapper mapper;
        public BookController(BooksContext context, IMapper mapper)
        {
            this.mapper = mapper;
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Book>>> GetBook()
        {
            return await context.Books.ToListAsync();
        }
        
        
        [HttpGet("{id:int}")]
        public async Task<ActionResult<BookDTO>> GetBookId(int id)
        {
            var book = await context.Books.FirstOrDefaultAsync(bookBD => bookBD.Id == id);

            if(book == null)
            {
                return NotFound();
            }

            return mapper.Map<BookDTO>(book);
        }

        [HttpGet("{titulo}")]
        public async Task<ActionResult<List<BookDTO>>> GetBookTitle(string titulo)
        {
            var books = await context.Books.Where(bookBD => bookBD.Titulo.Contains(titulo)).ToListAsync();
            return mapper.Map<List<BookDTO>>(books);
        }

        [HttpPost]
        public async Task<ActionResult> BookPost(BookCreateDTO bookDTO)
        {
            var book = mapper.Map<Book>(bookDTO);

            context.Add(book);
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpPut] // arreglar porfa xd, agregar ID por parametro
        public async Task<ActionResult> bookPut(Book book)
        {
            var exists = await context.Books.AnyAsync(x => x.Id == book.Id);
            if (!exists)
            {
                return BadRequest();
            }

            context.Update(book);
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> bookDelete(int id)
        {
            var exists = await context.Books.AnyAsync(x => x.Id == id);
            if (!exists)
            {
                return BadRequest();
            }

            context.Remove(new Book() {Id = id});
            await context.SaveChangesAsync();
            return Ok();
        }
    }
}