using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using System;

namespace Models
{
    public class Projekcija
    {
        [Key]
        public int ID { get; set; }
       
        [Required]
        public DateTime Datum{ get; set; }

        public Sala Sala { get; set; }

        public List<Rezervacija> Rezervacije { get; set; }

        public Film Film { get; set; }
    }
}