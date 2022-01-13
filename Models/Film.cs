using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Models
{
    public class Film
    {
        [Key]
        public int ID { get; set; }

        [RegularExpression(@"\w+")]
        [Required]
        [MaxLength(50)]
        public string Naziv { get; set; }

        [Range(2020, 2021)]
        public int Godina{ get; set; }

        [RegularExpression(@"\w+")]
        [MaxLength(20)]
        public string Zanr{ get; set; }

        [RegularExpression(@"\w+")]
        [MaxLength(60)]
        public string Reziser{ get; set; }

        [RegularExpression(@"\w+")]
        [MaxLength(100)]
        public string GlavneUloge{ get; set; }

        [MinLength(5)]
        [MaxLength(6)]
        public string DuzinaTrajanja{ get; set; }

        public List<Projekcija> Projekcije { get; set; }
    }
}