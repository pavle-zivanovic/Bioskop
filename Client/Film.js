export class Film{

    constructor(id, naziv, godina, zanr, reziser, glavneuloge, duzinatrajanja){
        this.id = id;
        this.naziv = naziv;
        this.godina = godina;
        this.zanr = zanr;
        this.reziser = reziser;
        this.glavneuloge = glavneuloge;
        this.duzinatrajanja = duzinatrajanja;
        this.projekcije = [];
    }

    DodajProjekciju(projekcija){
        if(this.id === projekcija.filmid){
            this.projekcije.push(projekcija);
        }
    }
}