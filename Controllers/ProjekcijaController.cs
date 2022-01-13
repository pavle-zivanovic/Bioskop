using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using Models;

namespace WEBP.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProjekcijaController : ControllerBase
    {
        public BioskopContext Bioskop { get; set; }

        public ProjekcijaController(BioskopContext context)
        {
            Bioskop = context;
        }

        [Route("PreuzetiFilmove")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiFlimove()
        {
            try
            {
                var filmovi = await Bioskop.Filmovi
                .Select(f =>
                new 
                {
                    ID = f.ID,
                    Naziv = f.Naziv,
                    Godina = f.Godina,
                    Zanr = f.Zanr,
                    Reziser = f.Reziser,
                    GlavneUloge = f.GlavneUloge,
                    DuzinaTrajanja = f.DuzinaTrajanja
                }).ToListAsync();
                return Ok(filmovi);
            }
            catch(Exception e)
            {
                return BadRequest("Doslo je do greske:" + e.Message);
            }
        }

        [Route("PreuzetiSveProjekcije")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiSveProjekcije()
        {
             try
            {
                var projekcije = await Bioskop.Projekcije
                .Include(p => p.Sala)
                .Include(p => p.Film)
                .ToListAsync();

                var proj = projekcije
                .Select(p =>
                new 
                {
                    ID = p.ID,
                    Datum = p.Datum,
                    SalaID = p.Sala.ID,
                    FilmID = p.Film.ID
                }).ToList();
                return Ok(proj);
            }
            catch(Exception e)
            {
                return BadRequest("Doslo je do greske:" + e.Message);
            }
        }

        [Route("PreuzetiProjekcijeZaSalu/{salaID}")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiProjekcijePoDatumu(int salaID)
        {
            try
            {
                var projekcije = await Bioskop.Projekcije
                .Where(p => p.Sala.ID == salaID)
                .Include(p => p.Sala)
                .Include(p => p.Film)
                .ToListAsync();

                var proj = projekcije.Select(p =>
                new
                {
                    Datum = p.Datum,
                    Naziv = p.Film.Naziv,
                    Godina = p.Film.Godina,
                    Zanr = p.Film.Zanr,
                    DuzinaTrajanja = p.Film.DuzinaTrajanja,
                    Reziser = p.Film.Reziser,
                    GlavneUloge = p.Film.GlavneUloge
                }).ToList();
                return Ok(proj);
            }
            catch(Exception e)
            {
                return BadRequest("Doslo je do greske:" + e.Message);
            }
        }
    }
}