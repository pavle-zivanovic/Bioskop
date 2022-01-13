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
    public class RezervacijaController : ControllerBase
    {
        public BioskopContext Bioskop { get; set; }

        public RezervacijaController(BioskopContext context)
        {
            Bioskop = context;
        }

        [Route("PreuzetiRezervacijeSedista/{projekcijaID}")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiRezervacije(int projekcijaID)
        {
             if(projekcijaID <= 0)
            {
                return BadRequest("Nevalidan id projekcije!");
            }
            try
            {
                var rezervacije = await Bioskop.Projekcije.Where(p => p.ID == projekcijaID)
                .Include(p => p.Rezervacije)
                .ThenInclude(r => r.RezervisanaSedista)
                .ToListAsync();

                var rez = rezervacije.Select(p =>
                p.Rezervacije.Select(r =>
                r.RezervisanaSedista.Select(rs =>
                new
                {
                    BrojSedista = rs.BrojSedista
                }
                ))).ToList();
                return Ok(rez);
            }
            catch(Exception e)
            {
                return BadRequest("Doslo je do greske:" + e.Message);
            }
        }

        [Route("DodatiRezervaciju/{IDProjekcije}/{IDMusterije}")]
        [HttpPost]
        public async Task<ActionResult> DodajRezervaciju(int IDProjekcije, int IDMusterije, [FromBody] int[] BrRedovaISedista)
        {
            if(IDProjekcije <= 0)
            {
                return BadRequest("Nevalidan ID Projekcije!");
            }

            if(IDMusterije <= 0)
            {
                return BadRequest("Nevalidan ID Musterije!");
            }

            try
            {
                var projekcija = await Bioskop.Projekcije.FindAsync(IDProjekcije);
                var musterija = await Bioskop.Musterije.FindAsync(IDMusterije);
                int cena = (BrRedovaISedista.Length/2)*300;

                Rezervacija r = new Rezervacija
                {
                    Cena = cena.ToString()+"RSD",
                    Projekcija = projekcija,
                    Musterija = musterija
                };
                Bioskop.Rezervacije.Add(r);
               
                int j=BrRedovaISedista.Length/2;
                for(int i=0; i<BrRedovaISedista.Length/2; i++)
                {
                    RezervacijaSedista rs = new RezervacijaSedista
                    {
                        Rezervacija = r,
                        BrojReda = BrRedovaISedista[i],
                        BrojSedista = BrRedovaISedista[j]
                    };
                    Bioskop.RezervacijeSedista.Add(rs);
                    j++;
                }
                await Bioskop.SaveChangesAsync();
                var r1 = new 
                {
                    ID = r.ID,
                    Cena = r.Cena
                };
                return Ok(r1);
            }
            catch(Exception e)
            {
                return BadRequest("Doslo je do greske:" + e.Message);
            }
        }

        [Route("IzmenitiRezervaciju/{IDRezervacije}")]
        [HttpPut]
        public async Task<ActionResult> IzmeniRezervaciju(int IDRezervacije, [FromBody] int[] BrRedovaISedista)
        {
            if(IDRezervacije <= 0)
            {
                return BadRequest("Nevalidan ID!");
            }

            try
            {
                var rezervacija = await Bioskop.Rezervacije.FindAsync(IDRezervacije);
                int i=0;
                int j=BrRedovaISedista.Length/2;
                foreach(var rs in Bioskop.RezervacijeSedista.Where(p => p.Rezervacija.ID == IDRezervacije))
                {
                    rs.BrojReda = BrRedovaISedista[i];
                    rs.BrojSedista = BrRedovaISedista[j];
                    Bioskop.RezervacijeSedista.Update(rs);
                    i++;
                    j++;
                }

                await Bioskop.SaveChangesAsync();
                return Ok("Rezervacija je uspesno izmenjena");
            }
            catch(Exception e)
            {
                return BadRequest("Doslo je do greske:" + e.Message);
            }
        }

        [Route("ObrisatiRezervaciju/{IDRezervacije}")]
        [HttpDelete]
        public async Task<ActionResult> ObrisiRezervaciju(int IDRezervacije)
        {
            if(IDRezervacije <= 0)
            {
                return BadRequest("Nevalidan ID!");
            }

            try
            {
                var rezervacija = await Bioskop.Rezervacije.FindAsync(IDRezervacije);
                foreach(var rs in Bioskop.RezervacijeSedista.Where(p => p.Rezervacija.ID == IDRezervacije))
                {
                    Bioskop.RezervacijeSedista.Remove(rs);
                }

                Bioskop.Rezervacije.Remove(rezervacija);
                await Bioskop.SaveChangesAsync();
                return Ok("Rezervacija je uspesno izbrisana");
            }
            catch (Exception e)
            {
                return BadRequest("Doslo je do greske:" + e.Message);
            }
        }
    }
}