export class Sala{

    constructor(id, naziv, brredova, brsedista, bioskopid){
        this.id = id;
        this.naziv = naziv;
        this.brredova = brredova;
        this.brsedista = brsedista;
        this.bioskopid = bioskopid;
        this.projekcije = [];
        this.kontejner = null;
    }

    DodajProjekciju(projekcija){
        if(this.id === projekcija.salaid){
            this.projekcije.push(projekcija);
        }
    }

    CrtajSalu(host, projekcijaID){
        let rezervisanaSedista = [];
        fetch("https://localhost:5001/Rezervacija/PreuzetiRezervacijeSedista/"+projekcijaID,
        {
            method:"GET"
        }).then(p=>{
                p.json().then(data1=>{
                    data1.forEach(data2=>{
                        data2.forEach(data3=>{
                            data3.forEach(data4=>{
                                    rezervisanaSedista.push(data4.brojSedista);
                                })
                        })
                    })

                this.kontejner = document.createElement("div");
                this.kontejner.className = "sala";
                host.appendChild(this.kontejner);
                let red = document.createElement("div");
                red.className = "redPlatno";
                red.innerHTML = "Platno";
                this.kontejner.appendChild(red);
        
                let brojsedista = 1;
                let brojreda = 1;
                for(let i=0; i<this.brredova; i++){
                    red = document.createElement("div");
                    red.className = "redSala";
                    this.kontejner.appendChild(red);
        
                    let labela = document.createElement("label");
                    labela.className = "labelazabrojreda"
                    labela.innerHTML = brojreda;
                    red.appendChild(labela);
                    for(let j=0; j<this.brsedista; j++){
                        let dugme = document.createElement("button");
                        dugme.className = "dugmeSala";
                        dugme.value = brojreda;
                        dugme.innerHTML = brojsedista;
                        dugme.onclick=(ev)=>this.ObojiSedistaKlik(dugme);
                        dugme.ondblclick=(ev)=>this.ObojiSedistaDupliKlik(dugme);
                        if(rezervisanaSedista.length != 0){
                            for(let i=0; i<rezervisanaSedista.length; i++){
                                if(dugme.innerHTML == rezervisanaSedista[i]){
                                    dugme.style.backgroundColor = "red";
                                    dugme.onclick=(ev)=>this.RezervisanoSediste();
                                }
                            }
                        }
                        red.appendChild(dugme);
                        brojsedista++;
                    }
                    brojreda++;
                }
                red = document.createElement("div");
                red.className = "redSalaPrazno";
                this.kontejner.appendChild(red);
                red = document.createElement("div");
                red.className = "redSala";
                this.kontejner.appendChild(red);
                let dugme = [];
                let labela = [];
                for(let i=0; i<3; i++){
                    dugme[i] = document.createElement("button");
                    dugme[i].className = "dugmeSala";
                    dugme[i].disabled = true;
                    labela[i] = document.createElement("label");
                    labela[i].className = "labelaZaTriDugmica";
                    red.appendChild(dugme[i]);
                    red.appendChild(labela[i]);
                }
                dugme[0].style.backgroundColor = "whitesmoke";
                labela[0].innerHTML = "Slobodno";
                dugme[1].style.backgroundColor = "red";
                labela[1].innerHTML = "Zauzeto";
                dugme[2].style.backgroundColor = "black";
                labela[2].innerHTML = "Odabrano";
            })
        })
    }

    ObojiSedistaKlik(dugme){
        dugme.style.backgroundColor = "black";
        dugme.style.color = "white";
        dugme.id = "dugmeCrnoSalaID";
    }

    ObojiSedistaDupliKlik(dugme){
        dugme.style.backgroundColor = "whitesmoke";
        dugme.style.color = "black";
        dugme.id = "dugmeBeloSalaID";
    }

    RezervisanoSediste(){
        alert("Ovo sediste je rezervisano!");
    }
}