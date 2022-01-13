using Microsoft.EntityFrameworkCore;

namespace Models
{
    public class BioskopContext : DbContext
    {
        public DbSet<Bioskop> Bioskopi {get; set; }

        public DbSet<Sala> Sale {get; set; }

        public DbSet<Film> Filmovi {get; set; }
        
        public DbSet<Rezervacija> Rezervacije {get; set; }

        public DbSet<RezervacijaSedista> RezervacijeSedista {get; set; }

        public DbSet<Projekcija> Projekcije {get; set; }

        public DbSet<Musterija> Musterije {get; set; }

        public BioskopContext(DbContextOptions options) : base(options)
        {

        }
    }
}