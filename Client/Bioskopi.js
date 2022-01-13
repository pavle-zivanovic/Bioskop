
export class Bioskopi{

    constructor(listaBioskopa, listaSala, listaFilmova, listaProjekcija){
        this.listaBioskopa = listaBioskopa;
        this.listaSala = listaSala;
        this.listaFilmova = listaFilmova;
        this.listaProjekcija = listaProjekcija;
        this.kontejner = null;
        this.minikont1 = null;
        this.minikont2 = null;
        this.minikont3 = null;
    }
    
CrtajBioskop(host){

    this.kontejner = document.createElement("div");
    this.kontejner.className = "GlavniKontejner";
    host.appendChild(this.kontejner);
    let minikont1 = document.createElement("div");
    minikont1.className="Forma";
    minikont1.id = "Forma1";
    this.kontejner.appendChild(minikont1);
    let minikont2 = document.createElement("div");
    minikont2.className="Forma";
    minikont2.id = "Forma2";
    this.kontejner.appendChild(minikont2);
    let minikont3 = document.createElement("div");
    minikont3.className="Forma";
    minikont3.id = "Forma3";
    this.kontejner.appendChild(minikont3);

    this.minikont1 = minikont1;
    this.minikont2 = minikont2;
    this.minikont3 = minikont3;
    this.crtajMinikont1();
    this.crtajMinikont2();
    this.crtajMinikont3();
}

crtajMinikont1(){
    let redBioskop = this.crtajRed(this.minikont1, "redBioskop");
    this.crtajLabelu(redBioskop, "Bioskop", "labelBioskop");
    let seBioskop = this.crtajSelect(redBioskop, "selectBioskop");
    this.listaBioskopa.forEach(b =>{
        this.crtajOption(seBioskop, b);
    })
    let dugmeIzaberiBioskop = this.crtajDugme(redBioskop, "Izaberi", "dugmeIzaberiBioskop");
   
    let redFilm = this.crtajRed(this.minikont1, "redFilm");
    let redProjekcija = this.crtajRed(this.minikont1, "redProjekcija");
    redProjekcija.id = "redProjekcija";
    let redSale = this.crtajRed(this.minikont1, "redSale");
    redSale.id = "redSale";
    dugmeIzaberiBioskop.onclick=(ev)=>this.IzaberiBioskop();
}

crtajMinikont2(){
    this.crtajRed(this.minikont2, "redRezervisiteSedista");
    this.crtajRed(this.minikont2, "redIme");
    this.crtajRed(this.minikont2, "redPrezime");
    this.crtajRed(this.minikont2, "redEmail");
    this.crtajRed(this.minikont2, "redUpisi");
    this.crtajRed(this.minikont2, "redIzmeni");
    this.crtajRed(this.minikont2, "redObrisi");
}

crtajMinikont3(){
    this.crtajRed(this.minikont3, "redPrikaziProjekcije")
}

crtajRed(host, className){
    let red = document.createElement("div");
    red.className = className;
    host.appendChild(red);
    return red;
}

crtajLabelu(host, naziv, className){
    let labela = document.createElement("label");
    labela.innerHTML = naziv + ":";
    labela.className = className;
    host.appendChild(labela);
    return labela;
}

crtajSelect(host, className){
    let se = document.createElement("select");
    se.className = className;
    host.appendChild(se);
    return se;
}

crtajOption(host, objekat){
    let op = document.createElement("option");
    op.innerHTML = objekat.naziv;
    op.value = objekat.id;
    host.appendChild(op);
}

crtajDugme(host, naziv, classname){
    let dugme = document.createElement("button");
    dugme.innerHTML = naziv;
    dugme.className = classname;
    host.appendChild(dugme);
    return dugme;
}

ObrisiSadrzajRedova(className){
    let red = this.minikont1.querySelector(className)
    if(red.querySelector("label")!=null && red.querySelector("select")!=null && red.querySelector("button")!=null){
        let labela = red.querySelector("label");
        let se = red.querySelector("select");
        let dugme = red.querySelector("button"); 
        let roditelj = labela.parentNode;
        roditelj.removeChild(labela);
        roditelj.removeChild(se);
        roditelj.removeChild(dugme);
        }
}

ObrisiSalu(){
    if(this.minikont1.querySelector(".redSale")!=null){
        let sala = this.minikont1.querySelector(".redSale");
        let roditelj = sala.parentNode;
        roditelj.removeChild(sala);
    }
    let red = this.crtajRed(this.minikont1, "redSale");
}

IzaberiBioskop(){
    this.ObrisiSadrzajRedova(".redFilm");
    this.ObrisiSadrzajRedova(".redProjekcija");
    this.ObrisiSalu();
    this.ObrisiDugme(this.minikont2, ".redRezervisiteSedista",".dugmeRezervisiteSedista");
    this.ObrisiInput();
    this.ObrisiDugme(this.minikont2, ".redUpisi",".dugmeUpisi");
    this.ObrisiDugme(this.minikont2, ".redIzmeni",".dugmeIzmeni");
    this.ObrisiDugme(this.minikont2, ".redObrisi",".dugmeObrisi");
    this.ObrisiDugme(this.minikont3, ".redPrikaziProjekcije",".dugmePrikaziProjekcije");
    this.ObrisiTabelu();
    let redFilm = this.minikont1.querySelector(".redFilm");
    this.crtajLabelu(redFilm, "Film", "labelFilm");
    let seFilm = this.crtajSelect(redFilm, "selectFilm");
    let dugmeIzaberiFilm = this.crtajDugme(redFilm, "Izaberi", "dugmeIzaberiFilm");
   
    dugmeIzaberiFilm.onclick=(ev)=>this.IzaberiFilm();

    this.listaFilmova.forEach(film =>{
        this.crtajOption(seFilm, film);
    })
    }

IzaberiFilm(){
    this.ObrisiSadrzajRedova(".redProjekcija");
    this.ObrisiSalu();
    this.ObrisiDugme(this.minikont2, ".redRezervisiteSedista",".dugmeRezervisiteSedista");
    this.ObrisiInput();
    this.ObrisiDugme(this.minikont2, ".redUpisi",".dugmeUpisi");
    this.ObrisiDugme(this.minikont2, ".redIzmeni",".dugmeIzmeni");
    this.ObrisiDugme(this.minikont2, ".redObrisi",".dugmeObrisi");
    this.ObrisiDugme(this.minikont3, ".redPrikaziProjekcije",".dugmePrikaziProjekcije");
    this.ObrisiTabelu();
    let redProjekcija = this.minikont1.querySelector(".redProjekcija");
    this.crtajLabelu(redProjekcija, "Projekcija", "labelProjekcija");
    let seProjekcija = this.crtajSelect(redProjekcija, "selectProjekcija");
    let dugmeIzaberiProjekciju = this.crtajDugme(redProjekcija, "Izaberi", "dugmeIzaberiProjekciju");
    
    let redBioskop = this.minikont1.querySelector(".redBioskop");
    let redFilm = this.minikont1.querySelector(".redFilm");
    let optionEl1 = redBioskop.querySelector("select");
    var bioskopID = optionEl1.options[optionEl1.selectedIndex].value;
    let optionEl2 = redFilm.querySelector("select");
    var filmID = optionEl2.options[optionEl2.selectedIndex].value;

    let sale = this.listaSala.filter(s=> s.bioskopid == bioskopID);
    sale.forEach(s =>{
        s.projekcije.forEach(p =>{
            if(p.filmid == filmID){
                let op = document.createElement("option");
                op.innerHTML = p.datum;
                op.value = p.id;
                seProjekcija.appendChild(op);
            }
        })
    })
    dugmeIzaberiProjekciju.onclick=(ev)=>this.IzaberiProjekciju();
}

IzaberiProjekciju(){
    this.ObrisiSalu();
    this.ObrisiDugme(this.minikont2, ".redRezervisiteSedista",".dugmeRezervisiteSedista");
    this.ObrisiInput();
    this.ObrisiDugme(this.minikont2, ".redUpisi",".dugmeUpisi");
    this.ObrisiDugme(this.minikont2, ".redIzmeni",".dugmeIzmeni");
    this.ObrisiDugme(this.minikont2, ".redObrisi",".dugmeObrisi");
    this.ObrisiDugme(this.minikont3, ".redPrikaziProjekcije",".dugmePrikaziProjekcije");
    this.ObrisiTabelu();
    let redProjekcija = this.minikont1.querySelector(".redProjekcija");
    let optionEl = redProjekcija.querySelector("select");
    var projekcijaID = optionEl.options[optionEl.selectedIndex].value;
    var salaID;
    this.listaProjekcija.forEach(p =>
        {
            if(p.id == projekcijaID){
                salaID = p.salaid;
            }
        })

    let redSala = this.minikont1.querySelector(".redSale");
    this.listaSala.forEach(s =>{
        s.projekcije.forEach(p =>{
            if(p.id == projekcijaID){
                s.CrtajSalu(redSala, projekcijaID);
            }
        })
    })

    let redRezervisiteSedista = this.minikont2.querySelector(".redRezervisiteSedista");
    let dugmeRezervisiteSedista = this.crtajDugme(redRezervisiteSedista, "Rezervišite sedišta", "dugmeRezervisiteSedista");
    redRezervisiteSedista.appendChild(dugmeRezervisiteSedista);
    dugmeRezervisiteSedista.onclick=(ev)=>this.RezervisiSedista();

    let redPrikaziProjekcije = this.minikont3.querySelector(".redPrikaziProjekcije");
    let dugmePrikaziProjekcije = this.crtajDugme(redPrikaziProjekcije, "Prikaži projekcije", "dugmePrikaziProjekcije");
    redPrikaziProjekcije.appendChild(dugmePrikaziProjekcije);
    dugmePrikaziProjekcije.onclick=(ev)=>this.PrikaziProjekcije(salaID);
}

ObrisiDugme(host, redclassname, dugmeclassname){
    let red = host.querySelector(redclassname);
        if(red.querySelector(dugmeclassname)!=null){
            let dugme = red.querySelector(dugmeclassname);
            let roditelj = dugme.parentNode;
            roditelj.removeChild(dugme);
        }
}

CrtajInput(host, className){
    let input = document.createElement("input");
    input.className = className;
    host.appendChild(input);
}

ObrisiInput(){
    let redIme = this.minikont2.querySelector(".redIme");
    let redPrezime = this.minikont2.querySelector(".redPrezime");
    let redEmail = this.minikont2.querySelector(".redEmail");
         if(redIme.querySelector("input")!=null && redPrezime.querySelector("input")!=null && redEmail.querySelector("input")!=null){
            let inputIme = redIme.querySelector("input");
            let inputPrezime = redPrezime.querySelector("input");
            let inputEmail = redEmail.querySelector("input");
            let labelIme = redIme.querySelector("label");
            let labelPrezime = redPrezime.querySelector("label");
            let labelEmail = redEmail.querySelector("label");
            let roditeljIme = inputIme.parentNode;
            let roditeljPrezime = inputPrezime.parentNode;
            let roditeljEmail = inputEmail.parentNode;
            roditeljIme.removeChild(inputIme);
            roditeljPrezime.removeChild(inputPrezime);
            roditeljEmail.removeChild(inputEmail);
            roditeljIme.removeChild(labelIme);
            roditeljPrezime.removeChild(labelPrezime);
            roditeljEmail.removeChild(labelEmail);
         }
}

RezervisiSedista(){
    this.ObrisiInput();
    this.ObrisiDugme(this.minikont2, ".redUpisi",".dugmeUpisi");
    this.ObrisiDugme(this.minikont2, ".redIzmeni",".dugmeIzmeni");
    this.ObrisiDugme(this.minikont2, ".redObrisi",".dugmeObrisi");
    let redIme = this.minikont2.querySelector(".redIme");
    let labela = this.crtajLabelu(redIme, "Ime", "labelIme");
    let input = this.CrtajInput(redIme, "inputIme");
    let redPrezime = this.minikont2.querySelector(".redPrezime");
    labela = this.crtajLabelu(redPrezime, "Prezime", "labelPrezime");
    input = this.CrtajInput(redPrezime, "inputPrezime");
    let redEmail = this.minikont2.querySelector(".redEmail");
    labela = this.crtajLabelu(redEmail, "Email", "labelEmail");
    input = this.CrtajInput(redEmail, "inputEmail");

    let redUpisi = this.minikont2.querySelector(".redUpisi");
    let dugmeUpisi = this.crtajDugme(redUpisi, "Upiši", "dugmeUpisi");
    dugmeUpisi.onclick=(ev)=>this.UpisiRezervaciju();
}

UpisiRezervaciju(){
    this.ObrisiDugme(this.minikont2, ".redIzmeni",".dugmeIzmeni");
    this.ObrisiDugme(this.minikont2, ".redObrisi",".dugmeObrisi");
    let inputs = this.minikont2.querySelectorAll("input");
    let ime = inputs[0].value;
    let prezime = inputs[1].value;
    let email = inputs[2].value;
    var status = true;
    if(ime.length === 0 || /\d/.test(ime) || ime.length>50){
        alert("Ime nije validno!");
        status = false;
    }
    if(prezime.length === 0 || /\d/.test(prezime) || prezime.length>50){
        alert("Prezime nije validno!");
        status = false;
    }
    if(email.length === 0 || !/^[a-zA-Z0-9+_.-]+@[a-z]+[.]+[c]+[o]+[m]$/.test(email)){
        alert("Email nije validan!");
        status = false;
    }
    let brredaisedista = [];
    let sedista = [];
    sedista = this.minikont1.querySelectorAll("#dugmeCrnoSalaID");
    if(sedista.length == 0){
        alert("Morate odabrati bar jedno sediste!");
        status = false;
    }
    if(sedista.length > 6){
        alert("Maksimalno mozete izabrati 6 sedista!");
        status = false;
    }
    sedista.forEach(s =>{
        brredaisedista.push(s.value);
    })
    sedista.forEach(s =>{
        brredaisedista.push(s.innerHTML);
    })
    let optionEl1 = this.minikont1.querySelector(".selectProjekcija");
    var projekcijaID = optionEl1.options[optionEl1.selectedIndex].value;
    var musterijaID;
    var rezervacijaID;
    var cena

    if(status === true){
    fetch("https://localhost:5001/Musterija/DodatiMusteriju/"+ime+"/"+prezime+"/"+email,
    {
        method:"POST"
    }).then(must=>{
            must.json().then(m=>{
                musterijaID = m;

                fetch("https://localhost:5001/Rezervacija/DodatiRezervaciju/"+projekcijaID+"/"+musterijaID,
                {
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(brredaisedista)
                }).then(r=>{
                           r.json().then(rez=>{
                                rezervacijaID = rez.id;
                                cena = rez.cena;

                                alert("Cena Vase rezervacije je: "+cena);
                                let redProjekcija = this.minikont1.querySelector(".redProjekcija");
                                let optionEl = redProjekcija.querySelector("select");
                                var projekcijaID = optionEl.options[optionEl.selectedIndex].value;
                                var salaID;
                                this.listaProjekcija.forEach(p =>
                                    {
                                        if(p.id == projekcijaID){
                                            salaID = p.salaid;
                                        }
                                    })
                                this.ObrisiSalu();
                                let redSala = this.minikont1.querySelector(".redSale");
                                this.listaSala.forEach(s =>{
                                    if(s.id == salaID){
                                        s.CrtajSalu(redSala, projekcijaID);
                                    }
                                })
                                let redIzmeni = this.minikont2.querySelector(".redIzmeni");
                                let dugmeIzmeni = this.crtajDugme(redIzmeni, "Izmeni", "dugmeIzmeni");
                                dugmeIzmeni.onclick=(ev)=>this.IzmeniRezervaciju(rezervacijaID, salaID, projekcijaID, sedista);
                                let redObrisi = this.minikont2.querySelector(".redObrisi");
                                let dugmeObrisi = this.crtajDugme(redObrisi, "Obriši", "dugmeObrisi");
                                dugmeObrisi.onclick=(ev)=>this.ObrisiRezervaciju(rezervacijaID, salaID, projekcijaID);
                           })
                .catch(p => {
                    console.log(p);
                    alert ("Greška prilikom rezervisanja.");
                });
            })   
        })
        .catch(p => {
            console.log(p);
            alert ("Greška prilikom rezervisanja.");
        });
        alert("Uspesno ste izvrsili rezervaciju :)");
    })
}
}

ObrisiRezervaciju(rezervacijaID, salaID, projekcijaID){
    fetch("https://localhost:5001/Rezervacija/ObrisatiRezervaciju/"+rezervacijaID,
    {
        method:"DELETE"
    }).then(r =>{
            this.ObrisiDugme(this.minikont2, ".redIzmeni",".dugmeIzmeni");
            this.ObrisiDugme(this.minikont2, ".redObrisi",".dugmeObrisi");
            this.ObrisiSalu();
            let redSala = this.minikont1.querySelector(".redSale");
            this.listaSala.forEach(s =>{
            if(s.id == salaID){
                s.CrtajSalu(redSala, projekcijaID);
                }
            })
    })
}

IzmeniRezervaciju(rezervacijaID, salaID, projekcijaID, sedista){
    let brredaisedista = [];
    let sedistanew = [];
    var status = true;
    sedistanew = this.minikont1.querySelectorAll("#dugmeCrnoSalaID");
    if(sedistanew.length != sedista.length){
        alert("Morate odabrati isti broj sedista!");
        status = false;
    }
    if(status == true){
        sedistanew.forEach(s =>{
            brredaisedista.push(s.value);
        })
        sedistanew.forEach(s =>{
            brredaisedista.push(s.innerHTML);
        })
    
        fetch("https://localhost:5001/Rezervacija/IzmenitiRezervaciju/"+rezervacijaID,
        {
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(brredaisedista)
        }).then(r =>{
                this.ObrisiSalu();
                let redSala = this.minikont1.querySelector(".redSale");
                this.listaSala.forEach(s =>{
                if(s.id == salaID){
                    s.CrtajSalu(redSala, projekcijaID);
                    }
                })
        })
    }
}

ObrisiTabelu(){
        if(this.minikont3.querySelector(".redTabela")!=null){
            let tabela = this.minikont3.querySelector(".redTabela");
            let roditelj = tabela.parentNode;
            roditelj.removeChild(tabela);
        }
    }

crtajTabelu(host, datum, naziv, godina, zanr, duzinatrajanja, reziser, glavneuloge){
        var tr = document.createElement("tr");
        host.appendChild(tr);

        var el = document.createElement("td");
        el.innerHTML=datum;
        tr.appendChild(el);
        var el = document.createElement("td");
        el.innerHTML=naziv;
        tr.appendChild(el);
        el = document.createElement("td");
        el.innerHTML=godina;
        tr.appendChild(el);
        el = document.createElement("td");
        el.innerHTML=zanr;
        tr.appendChild(el);
        el = document.createElement("td");
        el.innerHTML=duzinatrajanja;
        tr.appendChild(el);
        el = document.createElement("td");
        el.innerHTML=reziser;
        tr.appendChild(el);
        el = document.createElement("td");
        el.innerHTML=glavneuloge;
        tr.appendChild(el);   
    }

PrikaziProjekcije(salaID){
    this.ObrisiTabelu();
    let red = this.crtajRed(this.minikont3, "redTabela");
    let redNazviSala = this.crtajRed(red, "redNazivSala");
    this.listaSala.forEach(s =>{
        if(s.id == salaID){
            let labelaNazivSala = this.crtajLabelu(redNazviSala, s.naziv, "labelaNazivSala");
            labelaNazivSala.innerHTML = s.naziv;
        }
    })
   
    var tabela = document.createElement("table");
    tabela.className="tabela";
    red.appendChild(tabela);

    var tabelahead= document.createElement("thead");
    tabela.appendChild(tabelahead);

    var tr = document.createElement("tr");
    tabelahead.appendChild(tr);

    var tabelaBody = document.createElement("tbody");
    tabelaBody.className="TabelaPodaci";
    tabela.appendChild(tabelaBody);
    
    let th;
    var zag=["Datum", "Naziv filma", "Godina", "Žanr", "Dužina trajanja", "Režiser", "Glavne uloge"];
    zag.forEach(el=>{
        th = document.createElement("th");
        th.innerHTML=el;
        tr.appendChild(th);
    })

    fetch("https://localhost:5001/Projekcija/PreuzetiProjekcijeZaSalu/"+salaID,
    {
        method:"GET"
    }).then(p =>{
        p.json().then(data1 =>{
            data1.forEach(data =>{
                this.crtajTabelu(tabelaBody, data.datum, data.naziv, data.godina, data.zanr, data.duzinaTrajanja, data.reziser, data.glavneUloge);
            })
        })
    })
}
}