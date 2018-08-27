//import { House } from './house.js';

class Fetchy {

    constructor(path) {

        this.path = path;
        this.get();

    }

    get() {

        fetch((this.path), {

            method: 'GET',
            credentials: 'same-origin',
            cache: 'force-cache'

        }).then((resp) => { return resp.json() })

            .then((data) => {

                //====================   Display vue   =========================

                let display = `<h2>Game of Thrones, les maisons, les personnages</h2>`;

                for (let l = 0; l < data.length; l++) {

                    display += `<article><ul>`
                    display +=
                        `<li class="Name">${data[l].nom}<div onclick="Accordeon(this);"><span>+</span></div></li>
                         <li class="no" style="display:none">`

                    for (let k = 0; k < data[l].gens.length; k++) {

                        display += `<ul class="detail">`
                        if (data[l].wikiSuffix) {
                            display += `<li><img src="${data[l].gens[k].image}"></li>`
                            display += `<li class="wiki">${data[l].wikiSuffix}</li>`
                            display += `<li class="nom">${data[l].gens[k].nom}</li>`
                            display += `<li class="desc">${data[l].gens[k].description}</li>`
                            display += `</ul>`
                        } else {
                            display += `<li><img src="${data[l].gens[k].image}"></li>`
                            display += `<li>${data[l].gens[k].nom}</li>`
                            display += `<li>${data[l].gens[k].description}</li>`
                           
                            display += `</ul>`
                        }

                    }

                    display += `</li></article></ul>`

                    document.querySelector('div').innerHTML = display;

                }

            })

            .catch((error) => { console.log('something is wrong !!') });

    }

}

//================  instanciation de la class Fetchy  ===========================

const doIt = new Fetchy('./got.json');

