window.onload = function () {

    ///proba

    let selection=document.querySelector('select');
  
       
      
     
     

  //ispis menija

        function ispisMenija() {
        var meni = ["Naše kafe", "Priprema kafe", "O lokalu"];
        let ul = document.getElementById('meni_ul')
        meni.forEach((item) => {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.setAttribute("href", "#");
            li.appendChild(a);
            li.classList.add("nav-item");
            ul.appendChild(li);
            a.classList.add("nav-link" );
            a.innerHTML = item;
            a.id = item;
            a.addEventListener('click',function(e){
                e.preventDefault();
                switch (e.target.id) {
                    case "Naše kafe":
                        a.setAttribute("href", item);
                        let destination = document.getElementById('portfolio');
                        destination.scrollIntoView()
                        
                      break;
                    case "Priprema kafe":
                        a.setAttribute("href",item);
                        let about = document.getElementById('about');
                        about.scrollIntoView()
                      break;
                    case "O lokalu":
                        a.setAttribute("href",item);
                        let team = document.getElementById('team');
                        team.scrollIntoView()
                      break;
                  
                  }
                


            })
        })
    };


//ispis galerije 

    function ispisSlika() {
        var nizSlika = [
            {
                key: "",
                slika: {
                    alt: "greece",
                    src: "assets/img/portfolio/kafa1.jpg"
                },
                content: ""
            },
            {
                key: "",
                slika: {
                    alt: "bora-bora",
                    src: "assets/img/portfolio/kafa2.jpg"
                },
                content: ""

            },
            {
                key: "",
                slika: {
                    alt: "egypt",
                    src: "assets/img/portfolio/kafa3.png"
                },
                content: ""

            },
            {
                key: "",
                slika: {
                    alt: "moscow",
                    src: "assets/img/portfolio/kafa4.png"
                },
                content: ""

            },
            {
                key: "",
                slika: {
                    alt: "rome",
                    src: "assets/img/portfolio/kafa5.jpg"
                },
                content: ""

            },
            {
                key: "",
                slika: {
                    alt: "new-york",
                    src: "assets/img/portfolio/kafa6.jpg"
                },
                content: ""

            }
        ];

        var ispis = "";
        for (var obj of nizSlika) {
            ispis += `
                    <div class="col-lg-4 col-sm-6 mb-4">
                                <div class="portfolio-item">
                                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                                        <div class="portfolio-hover">
                                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                        </div>
                                        <img class="img-fluid" src="${obj.slika.src}" alt="${obj.slika.alt}"  />
                                    </a>
                                    <div class="portfolio-caption">
                                        <div class="portfolio-caption-heading" >${obj.key}</div>
                                        <div class="portfolio-caption-subheading text-muted">${obj.content}</div>
                                    </div>
                                </div>
                            </div>
                   
                    `
        }
        document.getElementById("slikaDiv").innerHTML = ispis;
    }

//ispis ponude 

    function ispisPonude() {
        var nizPonude = [
            {
                naslov: "Branje kafe",
                opis: "Kafa se proizvodi od biljke kafe. U pitanju je tropska biljka koja raste na 600-800m nadmorske visine. Biljka je najčešće visine od 3m. Postoji mnogo vrste kafe, ali dve najpoznatije su Arabica i Robusta. Kafu koju mi koristimo je Arabica, i ona čini 70% svetske proizvodnje. Miris kod ove kafe je naglašen, a ukus je balans između slatkastog i kiselkastog.",
                slika: {
                    src: "assets/img/about/coffee1.jpg",
                    alt: "branje kafe"
                }
            },
            {
                naslov: "Priprema zrna",
                opis: "Prvo je sušenje kafe, i može biti mokro ili suvo. Kada se izvrši sušenje, prelazi se na prženje kafe. Prženje je neophodno da bi se oslobila aroma kafe. Posebno je bitna temperatura na kojoj se prže, s obzirom na to da veće temperature daju tamniju boju, a niže svetlija zrna. Treća faza je hlađene kafe, i najbolje je da kafa bude brzo ohlađena pomoću vode ili vazduha. ",
                slika: {
                    src: "assets/img/about/coffee2.jpg",
                    alt: "priprema zrna"
                }
            },
            {
                naslov: "Kofein kao sastojak kafe",
                opis: "Poznat je kao sastojak biljaka koji pomaže njihovu odbranu od štetočina. Prilikom zagrevanja, kofein se pretvara u jedan od vitamina B grupe, Naicin. Sastavljan je od belih kristala gorkog ukusa. Osnovni proces dobijanja čistog kofeina je dekofenizacija kafe. Kofein je i zapravo i jedan od razloga zašto pijemo kafu - razbudi nas, oraspolož i čini nas energičnijim.",
                slika: {
                    src: "assets/img/about/coffee3.jpg",
                    alt: "just-married"
                }
            },
            {
                naslov: "Pakovanje kafe i priprema Vašeg omiljenog napitka",
                opis: "Pržena kafa, bila mlevana ili u zrnu je vrlo osetljiva. Kako bi sačuvala pun ukus i aromu, mora biti zaštićena od vazduha, mirisa, toplote, svetlosti i vlage. Iz tog razloga, najčešće se pakuje u hermetički zatvorene kese. Kafa bi trebalo da se čuva na suvom i hladnom mestu. A ako nemate aparat kod kuće kako biste spremili Vašu omiljenu kafu, uvek možete posetiti naš lokal, gde će te dobiti svežu kafu.",
                slika: {
                    src: "assets/img/about/coffee4.jpg",
                    alt: "students"
                }
            }
        ];

        var ispis = "";
        for (var pon of nizPonude) {
            ispis += `
            <li>
            <div class="timeline-image"><img class="rounded-circle img-fluid" src="${pon.slika.src}" alt="${pon.slika.alt}" /></div>
            <div class="timeline-panel">
                <div class="timeline-heading">
                    <h4>${pon.naslov}</h4>
                
                </div>
                <div class="timeline-body"><p class="text-muted">${pon.opis}</p></div>
            </div>
        </li>
            `


            document.getElementById("timeline").innerHTML = ispis;

        }
        $("#timeline li:odd").addClass("timeline-inverted");

    }


//lokal

    function ispisAutor() {
        var autor = [{

            
                slika:{
                    src:"assets/img/team/brasileiro.png",
                    alt:"kafeterija",
                    id:"brasileiro"
                },

            punoIme: {
                ime: "Kafeterija",
                prezime: "Brasileiro",
                id: "ime"
            },
            opis: "Kafeterija Brasileiro nastala je 2017 godine iz čiste ljubavi prema kafi. Unijom strasti, volje i želje za kvalitetom opredelili smo se za 100% Arabicu i mešanjem različitih zrna kreirali i svoj blend. Uvek se trudimo da gostima priuštimo najkvalitetniju šoljicu kafe za bilo koje doba dana. Od procesa pečenja pa sve do pripreme i posluživanja svakim danom donosimo ono najbolje od kafe za Vaš sto. U našoj ponudi možete naći i slatke napitke sa kafom, ceđene sokove raznih vrsta kao i par koktela koji su prilagođeni baš za naš kafeterijski fazon. Svakom ljubitelju ili pak početniku što se tiče ispijanja kafe želimo dobrodošlicu. Ako Vam se neka kafa posebno svidi, možemo je samleti za određenu vrstu aparata, te deo našeg i Vašeg užitka možete poneti u svoj dom.",
          
           
        }];

        var ispis = "";
        for (var au of autor) {
            ispis += `
            <div class="col-lg-12">
                <div class="team-member">
                 <img class="mx-auto rounded-circle" src="${au.slika.src}" alt="${au.slika.alt}" id=${au.slika.id} />
                 <h4> <a href="#" id="proba"> ${au.punoIme.ime} ${au.punoIme.prezime} </a></h4>
                <p id="toggle" class="text-muted"> ${au.opis} </p>
                  
                </div>
                </div>
    `
        }


        document.getElementById("tim").innerHTML = ispis;

    };






//futer


function ispisFuter() {
    var footer = [{

        content:"Vojvode Živojina Mišića 6, Pančevo",
        social: {
            rss: {
                class: "fas fa-rss",
                href: "rss.xml"
            },
            sitemap: {
                class: "fas fa-sitemap",
                href: "sitemap.xml"
            },
            instagram: {
                class: "fab fa-instagram",
                href: "https://www.instagram.com/adri_v7/"
            },
            content2:"Vojvode"
        }
       
    }];

    var ispis = "";
    for (var fu of footer) {
        ispis += `
        <div class="col-lg-4 text-lg-left">${fu.content}</div>
                    <div class="col-lg-4 my-3 my-lg-0">
                        <a class="btn btn-dark btn-social mx-2" href="${fu.social.rss.href}"><i class="${fu.social.rss.class}"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="${fu.social.sitemap.href}"><i class="${fu.social.sitemap.class}"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="${fu.social.instagram.href}"><i class="${fu.social.instagram.class}"></i></a>
                    </div>
        
                  
        
`
    }


    document.getElementById("futer").innerHTML = ispis;

};
    //ispis funkcija

    ispisMenija();
    ispisSlika();
    ispisPonude();
    ispisAutor();
    ispisFuter();
    

    // JQuery kod za toggle opisa
    document.getElementById("proba").addEventListener("click", function (e) {
        e.preventDefault();
        // alert("cao!");
        let klasa = $("#toggle");
        klasa.toggle(function() {
            $(this).animate( {'display':'block'}, 2000, 'linear')
          }, function() {
            $(this).animate( {'display':'none'}, 2000, 'linear');
          });

    });






}

