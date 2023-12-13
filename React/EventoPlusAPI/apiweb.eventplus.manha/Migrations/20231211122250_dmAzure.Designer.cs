﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using apiweb.eventplus.manha.Contexts;

#nullable disable

namespace apiweb.eventplus.manha.Migrations
{
    [DbContext(typeof(EventContext))]
    [Migration("20231211122250_dmAzure")]
    partial class dmAzure
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.11")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("apiweb.eventplus.manha.Domains.ComentarioEvento", b =>
                {
                    b.Property<Guid>("IdComentarioEvento")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Descricao")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<bool>("Exibe")
                        .HasColumnType("BIT");

                    b.Property<Guid>("IdEvento")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("IdUsuario")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("IdComentarioEvento");

                    b.HasIndex("IdEvento");

                    b.HasIndex("IdUsuario");

                    b.ToTable("ComentarioEvento");
                });

            modelBuilder.Entity("apiweb.eventplus.manha.Domains.Evento", b =>
                {
                    b.Property<Guid>("IdEvento")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("DataEvento")
                        .HasColumnType("DATE");

                    b.Property<string>("Descricao")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<Guid>("IdInstituicao")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("IdTipoEvento")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("NomeEvento")
                        .IsRequired()
                        .HasColumnType("VARCHAR(100)");

                    b.HasKey("IdEvento");

                    b.HasIndex("IdInstituicao");

                    b.HasIndex("IdTipoEvento");

                    b.ToTable("Evento");
                });

            modelBuilder.Entity("apiweb.eventplus.manha.Domains.Instituicao", b =>
                {
                    b.Property<Guid>("IdInstituicao")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("CNPJ")
                        .IsRequired()
                        .HasMaxLength(14)
                        .HasColumnType("CHAR(14)");

                    b.Property<string>("Endereco")
                        .IsRequired()
                        .HasColumnType("VARCHAR(150)");

                    b.Property<string>("NomeFantasia")
                        .IsRequired()
                        .HasColumnType("VARCHAR(150)");

                    b.HasKey("IdInstituicao");

                    b.HasIndex("CNPJ")
                        .IsUnique();

                    b.ToTable("Instituicao");
                });

            modelBuilder.Entity("apiweb.eventplus.manha.Domains.PresencaEvento", b =>
                {
                    b.Property<Guid>("IdPresencaEvento")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("IdEvento")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("IdUsuario")
                        .HasColumnType("uniqueidentifier");

                    b.Property<bool>("Situacao")
                        .HasColumnType("BIT");

                    b.HasKey("IdPresencaEvento");

                    b.HasIndex("IdEvento");

                    b.HasIndex("IdUsuario");

                    b.ToTable("PresencaEvento");
                });

            modelBuilder.Entity("apiweb.eventplus.manha.Domains.TipoEvento", b =>
                {
                    b.Property<Guid>("IdTipoEvento")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Titulo")
                        .IsRequired()
                        .HasColumnType("VARCHAR(100)");

                    b.HasKey("IdTipoEvento");

                    b.ToTable("TipoEvento");
                });

            modelBuilder.Entity("apiweb.eventplus.manha.Domains.TipoUsuario", b =>
                {
                    b.Property<Guid>("IdTipoUsuario")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Titulo")
                        .IsRequired()
                        .HasColumnType("VARCHAR(100)");

                    b.HasKey("IdTipoUsuario");

                    b.ToTable("TipoUsuario");
                });

            modelBuilder.Entity("apiweb.eventplus.manha.Domains.Usuario", b =>
                {
                    b.Property<Guid>("IdUsuario")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("VARCHAR(100)");

                    b.Property<Guid>("IdTipoUsuario")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("VARCHAR(100)");

                    b.Property<string>("Senha")
                        .IsRequired()
                        .HasMaxLength(60)
                        .HasColumnType("CHAR(60)");

                    b.HasKey("IdUsuario");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.HasIndex("IdTipoUsuario");

                    b.ToTable("Usuario");
                });

            modelBuilder.Entity("apiweb.eventplus.manha.Domains.ComentarioEvento", b =>
                {
                    b.HasOne("apiweb.eventplus.manha.Domains.Evento", "Evento")
                        .WithMany()
                        .HasForeignKey("IdEvento")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("apiweb.eventplus.manha.Domains.Usuario", "Usuario")
                        .WithMany()
                        .HasForeignKey("IdUsuario")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Evento");

                    b.Navigation("Usuario");
                });

            modelBuilder.Entity("apiweb.eventplus.manha.Domains.Evento", b =>
                {
                    b.HasOne("apiweb.eventplus.manha.Domains.Instituicao", "Instituicao")
                        .WithMany()
                        .HasForeignKey("IdInstituicao")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("apiweb.eventplus.manha.Domains.TipoEvento", "TipoEvento")
                        .WithMany()
                        .HasForeignKey("IdTipoEvento")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Instituicao");

                    b.Navigation("TipoEvento");
                });

            modelBuilder.Entity("apiweb.eventplus.manha.Domains.PresencaEvento", b =>
                {
                    b.HasOne("apiweb.eventplus.manha.Domains.Evento", "Evento")
                        .WithMany()
                        .HasForeignKey("IdEvento")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("apiweb.eventplus.manha.Domains.Usuario", "Usuario")
                        .WithMany()
                        .HasForeignKey("IdUsuario")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Evento");

                    b.Navigation("Usuario");
                });

            modelBuilder.Entity("apiweb.eventplus.manha.Domains.Usuario", b =>
                {
                    b.HasOne("apiweb.eventplus.manha.Domains.TipoUsuario", "TipoUsuario")
                        .WithMany()
                        .HasForeignKey("IdTipoUsuario")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("TipoUsuario");
                });
#pragma warning restore 612, 618
        }
    }
}
