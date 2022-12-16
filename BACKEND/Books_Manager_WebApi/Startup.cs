using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Books_Manager_WebApi.Models;
using Microsoft.EntityFrameworkCore;

namespace Books_Manager_WebApi
{
    public class Startup
    {
        private readonly IConfiguration configuration;
        public Startup(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            var version = new MySqlServerVersion(new Version(8,0,31));
            services.AddDbContext<BooksContext>(db => 
            {
                db.UseMySql(configuration["ConnectionStrings:Books"], version);
            });

            services.AddControllers().AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
            });

            services.AddDateOnlyTimeOnlyStringConverters();
            services.AddAutoMapper(typeof(Startup));

            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen(x => 
            {
                x.UseDateOnlyTimeOnlyStringConverters();
            });
        }

        public void Configure(IApplicationBuilder app, IHostEnvironment env)
        {

            // Configure the HTTP request pipeline.
            if (env.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoint =>
            {
                endpoint.MapControllers();
            });
        }
    }
}