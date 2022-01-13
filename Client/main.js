import { Bioskop } from "./Bioskop.js";
import { Sala } from "./Sala.js";
import { Film } from "./Film.js";
import { Projekcija } from "./Projekcija.js";
import { Bioskopi } from "./Bioskopi.js";

var listaBioskopa = [];
var listaSala = [];
var listaFilmova = [];
var listaProjekcija = [];

fetch("https://localhost:5001/Bioskop/PreuzetiBioskope")
.then(b=>{
    b.json().then(bioskopi=>{
        bioskopi.forEach(bioskop => {
            var b = new Bioskop(bioskop.id, bioskop.naziv);
            listaBioskopa.push(b);
        });

        fetch("https://localhost:5001/Bioskop/PreuzetiSale")
        .then(s=>{
            s.json().then(sale=>{
                sale.forEach(sala => {
                var s = new Sala(sala.id, sala.naziv, sala.brojRedova, sala.brojSedista, sala.bioskopID);
                listaSala.push(s);
            });

            fetch("https://localhost:5001/Projekcija/PreuzetiFilmove")
            .then(f=>{
                f.json().then(filmovi=>{
                    filmovi.forEach(film => {
                        var f = new Film(film.id, film.naziv, film.godina, film.zanr, film.reziser, film.glavneUloge, film.duzinaTrajanja);
                        listaFilmova.push(f);
                    });

                    fetch("https://localhost:5001/Projekcija/PreuzetiSveProjekcije")
                    .then(p=>{
                        p.json().then(projekcije=>{
                            projekcije.forEach(projekcija => {
                                var p = new Projekcija(projekcija.id, projekcija.datum, projekcija.salaID, projekcija.filmID);
                                listaProjekcija.push(p);
                            })

                            listaSala.forEach(s =>{
                                listaBioskopa.forEach(b =>{
                                    b.DodajSalu(s);
                                })
                            })
                            
                            listaProjekcija.forEach(p =>{
                                listaSala.forEach(s =>{
                                    s.DodajProjekciju(p);
                                })
                            })
                            
                            listaProjekcija.forEach(p =>{
                                listaFilmova.forEach(f =>{
                                    f.DodajProjekciju(p);

                                })
                            })
                            const bioskopi = new Bioskopi(listaBioskopa, listaSala, listaFilmova, listaProjekcija);
                            bioskopi.CrtajBioskop(document.body);
                        })
                    })
                })
            })
        })
    })
    })
})
