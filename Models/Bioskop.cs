using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class Bioskop
    {
        [Key]
        public int ID { get; set; }

        [RegularExpression(@"\w+")]
        [Required]
        [MaxLength(50)]
        public string Naziv { get; set; }

        public List<Sala> Sale { get; set; }
    }
}