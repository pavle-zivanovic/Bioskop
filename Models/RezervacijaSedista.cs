using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Models
{
    public class RezervacijaSedista
    {
        [Key]
        public int ID { get; set; }

        [Range(1,13)]
        public int BrojReda{ get; set; }
        
        [Range(1,156)]
        public int BrojSedista{ get; set; }

        [JsonIgnore]
        public Rezervacija Rezervacija { get; set; }
    }
}