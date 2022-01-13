using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class Musterija
    {
        [Key]
        public int ID { get; set; }

        [RegularExpression(@"\w+")]
        [MaxLength(50)]
        public string Ime{ get; set; }

        [RegularExpression(@"\w+")]
        [MaxLength(50)]
        public string Prezime{ get; set; }

        //[RegularExpression(@"^[a-zA-Z0-9+_.-]+@[a-z]+[.]+[c]+[o]+[m]$")]
        public string Email{ get; set; }

        public List<Rezervacija> Rezervacije { get; set; }
    }
}