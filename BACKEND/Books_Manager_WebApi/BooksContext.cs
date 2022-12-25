using System;
using System.Collections.Generic;
using Books_Manager_WebApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Books_Manager_WebApi
{
    public partial class BooksContext : DbContext
    {

        public BooksContext(DbContextOptions<BooksContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Autor> Autores { get; set; }
        public virtual DbSet<Book> Books { get; set; }
        public virtual DbSet<Genero> Generos { get; set; }
        public virtual DbSet<Comentario> Comentarios { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_0900_ai_ci")
                .HasCharSet("utf8mb4");

            modelBuilder.Entity<Autor>(entity =>
            {
                entity.ToTable("autor");

                entity.HasIndex(e => e.GeneroId, "genero");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Apellido)
                    .HasMaxLength(20)
                    .HasColumnName("apellido");

                entity.Property(e => e.FechaNacimiento).HasColumnName("fecha_nacimiento");

                entity.Property(e => e.GeneroId).HasColumnName("genero");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(20)
                    .HasColumnName("nombre");

                entity.HasOne(d => d.Genero)
                    .WithMany(p => p.Autor)
                    .HasForeignKey(d => d.GeneroId)
                    .HasConstraintName("autor_ibfk_1");
            });

            modelBuilder.Entity<Book>(entity =>
            {
                entity.ToTable("book");

                entity.HasIndex(e => e.AutorId, "autor");

                entity.HasIndex(e => e.GeneroId, "genero");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.AutorId).HasColumnName("autor");

                entity.Property(e => e.CantidadPaginas).HasColumnName("cantidad_paginas");

                entity.Property(e => e.CantidadRestantes).HasColumnName("cantidad_restantes");

                entity.Property(e => e.Descripcion)
                    .HasColumnType("text")
                    .HasColumnName("descripcion");

                entity.Property(e => e.FechaLanzamiento).HasColumnName("fecha_lanzamiento");

                entity.Property(e => e.GeneroId).HasColumnName("genero");

                entity.Property(e => e.Imagen)
                    .HasColumnType("blob")
                    .HasColumnName("imagen");

                entity.Property(e => e.PathImagen)
                    .HasMaxLength(40)
                    .HasColumnName("path_imagen");

                entity.Property(e => e.Precio).HasColumnName("precio");

                entity.Property(e => e.Titulo)
                    .HasMaxLength(100)
                    .HasColumnName("titulo");

                entity.HasOne(d => d.Autor)
                    .WithMany(p => p.Book)
                    .HasForeignKey(d => d.AutorId)
                    .HasConstraintName("book_ibfk_1");

                entity.HasOne(d => d.Genero)
                    .WithMany(p => p.Book)
                    .HasForeignKey(d => d.GeneroId)
                    .HasConstraintName("book_ibfk_2");
            });

            modelBuilder.Entity<Genero>(entity =>
            {
                entity.ToTable("genero");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(20)
                    .HasColumnName("nombre");
            });

            modelBuilder.Entity<Comentario>(entity =>
            {
                entity.ToTable("comentario");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Contenido).HasColumnName("contenido");

                entity.Property(e => e.UsuarioId).HasColumnName("usuario");

                entity.Property(e => e.Fecha).HasColumnName("fecha");

                entity.Property(e => e.BookId).HasColumnName("book");

                entity.HasOne(e => e.Usuario)
                    .WithMany(e => e.Comentario)
                    .HasForeignKey(e => e.UsuarioId)
                    .HasConstraintName("FK_UsuarioId");

                entity.HasOne(e => e.Book)
                    .WithMany(e => e.Comentario)
                    .HasForeignKey(e => e.BookId)
                    .HasConstraintName("FK_BookId");   
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
