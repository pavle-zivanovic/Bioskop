using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class Rezervacija
    {
        [Key]
        public int ID { get; set; }

        [MinLength(6)]
        [MaxLength(8)]
        public string Cena{ get; set; }

        public Projekcija Projekcija { get; set; }

        public Musterija Musterija { get; set; }

        public List<RezervacijaSedista> RezervisanaSedista { get; set; }
    }
}