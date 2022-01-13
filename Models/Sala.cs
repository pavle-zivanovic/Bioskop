using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Models
{
    public class Sala
    {
        [Key]
        public int ID { get; set; }

        [RegularExpression(@"\w+")]
        [Required]
        [MaxLength(50)]
        public string Naziv { get; set; }

        [Range(6, 13)]
        public int BrojRedova{ get; set; }
        
        [Range(8, 12)]
        public int BrojSedista{ get; set; }

        public Bioskop Bioskop {get; set ;}

        public List<Projekcija> Projekcije { get; set; }
    }
}