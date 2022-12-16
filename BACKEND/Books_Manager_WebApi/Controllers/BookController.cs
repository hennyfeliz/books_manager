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
    [Route("api/book")]
    public class BookController : ControllerBase
    {
        private readonly BooksContext context;
        public BookController(BooksContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Book>>> BookGet()
        {
            return await context.Books.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult> BookPost(Book book)
        {
            var exists = await context.Books.AnyAsync(x => x.Id == book.Id);
            if (!exists)
            {
                return BadRequest();
            }

            context.Add(book);
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpPut]
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