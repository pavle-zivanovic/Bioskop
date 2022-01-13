using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using Models;

namespace WEBP.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MusterijaController : ControllerBase
    {
        public BioskopContext Bioskop { get; set; }

        public MusterijaController(BioskopContext context)
        {
            Bioskop = context;
        }

        [Route("DodatiMusteriju/{ime}/{prezime}/{email}")]
        [HttpPost]
        public async Task<ActionResult> DodajMusteriju(string ime, string prezime, string email)
        {
            var m = Bioskop.Musterije.Where(m => m.Email == email).FirstOrDefault();
            
            if(m == null)
            {
            if(string.IsNullOrWhiteSpace(ime) || ime.Length > 50 || ime.Any(Char.IsDigit))
            {
                return BadRequest("Ime je prazno ili sadrzi cifru ili je duze od 50!");
            }

            if(string.IsNullOrWhiteSpace(prezime) || prezime.Length > 50 || prezime.Any(Char.IsDigit))
            {
                return BadRequest("Prezime je prazno ili sadrzi cifru ili je duze od 50!");
            }

            string pattern = @"^[a-zA-Z0-9+_.-]+@[a-z]+[.]+[c]+[o]+[m]$";
            bool IsEmail = Regex.IsMatch(email, pattern);
            if(string.IsNullOrWhiteSpace(email) || IsEmail == false)
            {
                return BadRequest("Email je prazan ili ima neodgovarajuci format!");
            }
            
             try
            {
                Musterija musterija = new Musterija
                {
                    Ime = ime,
                    Prezime = prezime,
                    Email = email
                };
                Bioskop.Musterije.Add(musterija);
                await Bioskop.SaveChangesAsync();
                return Ok(musterija.ID);
            }
            catch (Exception e)
            {
                return BadRequest("Doslo je do greske:" + e.Message);
            }
            }
            else
            {
                return Ok(m.ID);
            }
        }    
    }
}