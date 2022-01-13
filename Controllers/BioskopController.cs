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
    public class BioskopController : ControllerBase
    {
        public BioskopContext Bioskop { get; set; }

        public BioskopController(BioskopContext context)
        {
            Bioskop = context;
        }

        [Route("PreuzetiBioskope")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiBioskope()
        {
            try
            {
                var bioskopi = await Bioskop.Bioskopi
                .Select(b =>
                new
                {
                    ID = b.ID,
                    Naziv = b.Naziv
                }).ToListAsync();
                return Ok(bioskopi);
            }
            catch(Exception e)
            {
                return BadRequest("Doslo je do greske:" + e.Message);
            }
        }

        [Route("PreuzetiSale")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiSale()
        {
             try
            {
                var sale1 = await Bioskop.Sale
                .Include(s => s.Bioskop)
                .ToListAsync();

                var sale2 = sale1
                .Select(s =>
                new
                {
                    ID = s.ID,
                    Naziv = s.Naziv,
                    BrojRedova = s.BrojRedova,
                    BrojSedista = s.BrojSedista,
                    BioskopID = s.Bioskop.ID
                }).ToList();
                return Ok(sale2);
            }
            catch(Exception e)
            {
                return BadRequest("Doslo je do greske:" + e.Message);
            }
        }  
    }
}