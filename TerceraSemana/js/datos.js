let carros = [
   {
     "marca": "Mazda RX4",
     "mpg": 21,
     "cyl": 6,
     "disp": 160,
     "hp": 110,
     "drat": 3.9,
     "wt": 2.62,
     "qsec": 16.46,
     "vs": 0,
     "am": 1,
     "gear": 4,
     "carb": 4
   },
   {
     "marca": "Mazda RX4 Wag",
     "mpg": 21,
     "cyl": 6,
     "disp": 160,
     "hp": 110,
     "drat": 3.9,
     "wt": 2.875,
     "qsec": 17.02,
     "vs": 0,
     "am": 1,
     "gear": 4,
     "carb": 4
   },
   {
     "marca": "Datsun 710",
     "mpg": 22.8,
     "cyl": 4,
     "disp": 108,
     "hp": 93,
     "drat": 3.85,
     "wt": 2.32,
     "qsec": 18.61,
     "vs": 1,
     "am": 1,
     "gear": 4,
     "carb": 1
   },
   {
     "marca": "Hornet 4 Drive",
     "mpg": 21.4,
     "cyl": 6,
     "disp": 258,
     "hp": 110,
     "drat": 3.08,
     "wt": 3.215,
     "qsec": 19.44,
     "vs": 1,
     "am": 0,
     "gear": 3,
     "carb": 1
   },
   {
     "marca": "Hornet Sportabout",
     "mpg": 18.7,
     "cyl": 8,
     "disp": 360,
     "hp": 175,
     "drat": 3.15,
     "wt": 3.44,
     "qsec": 17.02,
     "vs": 0,
     "am": 0,
     "gear": 3,
     "carb": 2
   },
   {
     "marca": "Valiant",
     "mpg": 18.1,
     "cyl": 6,
     "disp": 225,
     "hp": 105,
     "drat": 2.76,
     "wt": 3.46,
     "qsec": 20.22,
     "vs": 1,
     "am": 0,
     "gear": 3,
     "carb": 1
   },
   {
     "marca": "Duster 360",
     "mpg": 14.3,
     "cyl": 8,
     "disp": 360,
     "hp": 245,
     "drat": 3.21,
     "wt": 3.57,
     "qsec": 15.84,
     "vs": 0,
     "am": 0,
     "gear": 3,
     "carb": 4
   },
   {
     "marca": "Merc 240D",
     "mpg": 24.4,
     "cyl": 4,
     "disp": 146.7,
     "hp": 62,
     "drat": 3.69,
     "wt": 3.19,
     "qsec": 20,
     "vs": 1,
     "am": 0,
     "gear": 4,
     "carb": 2
   },
   {
     "marca": "Merc 230",
     "mpg": 22.8,
     "cyl": 4,
     "disp": 140.8,
     "hp": 95,
     "drat": 3.92,
     "wt": 3.15,
     "qsec": 22.9,
     "vs": 1,
     "am": 0,
     "gear": 4,
     "carb": 2
   },
   {
     "marca": "Merc 280",
     "mpg": 19.2,
     "cyl": 6,
     "disp": 167.6,
     "hp": 123,
     "drat": 3.92,
     "wt": 3.44,
     "qsec": 18.3,
     "vs": 1,
     "am": 0,
     "gear": 4,
     "carb": 4
   },
   {
     "marca": "Merc 280C",
     "mpg": 17.8,
     "cyl": 6,
     "disp": 167.6,
     "hp": 123,
     "drat": 3.92,
     "wt": 3.44,
     "qsec": 18.9,
     "vs": 1,
     "am": 0,
     "gear": 4,
     "carb": 4
   },
   {
     "marca": "Merc 450SE",
     "mpg": 16.4,
     "cyl": 8,
     "disp": 275.8,
     "hp": 180,
     "drat": 3.07,
     "wt": 4.07,
     "qsec": 17.4,
     "vs": 0,
     "am": 0,
     "gear": 3,
     "carb": 3
   },
   {
     "marca": "Merc 450SL",
     "mpg": 17.3,
     "cyl": 8,
     "disp": 275.8,
     "hp": 180,
     "drat": 3.07,
     "wt": 3.73,
     "qsec": 17.6,
     "vs": 0,
     "am": 0,
     "gear": 3,
     "carb": 3
   },
   {
     "marca": "Merc 450SLC",
     "mpg": 15.2,
     "cyl": 8,
     "disp": 275.8,
     "hp": 180,
     "drat": 3.07,
     "wt": 3.78,
     "qsec": 18,
     "vs": 0,
     "am": 0,
     "gear": 3,
     "carb": 3
   },
   {
     "marca": "Cadillac Fleetwood",
     "mpg": 10.4,
     "cyl": 8,
     "disp": 472,
     "hp": 205,
     "drat": 2.93,
     "wt": 5.25,
     "qsec": 17.98,
     "vs": 0,
     "am": 0,
     "gear": 3,
     "carb": 4
   },
   {
     "marca": "Lincoln Continental",
     "mpg": 10.4,
     "cyl": 8,
     "disp": 460,
     "hp": 215,
     "drat": 3,
     "wt": 5.424,
     "qsec": 17.82,
     "vs": 0,
     "am": 0,
     "gear": 3,
     "carb": 4
   },
   {
     "marca": "Chrysler Imperial",
     "mpg": 14.7,
     "cyl": 8,
     "disp": 440,
     "hp": 230,
     "drat": 3.23,
     "wt": 5.345,
     "qsec": 17.42,
     "vs": 0,
     "am": 0,
     "gear": 3,
     "carb": 4
   },
   {
     "marca": "Fiat 128",
     "mpg": 32.4,
     "cyl": 4,
     "disp": 78.7,
     "hp": 66,
     "drat": 4.08,
     "wt": 2.2,
     "qsec": 19.47,
     "vs": 1,
     "am": 1,
     "gear": 4,
     "carb": 1
   },
   {
     "marca": "Honda Civic",
     "mpg": 30.4,
     "cyl": 4,
     "disp": 75.7,
     "hp": 52,
     "drat": 4.93,
     "wt": 1.615,
     "qsec": 18.52,
     "vs": 1,
     "am": 1,
     "gear": 4,
     "carb": 2
   },
   {
     "marca": "Toyota Corolla",
     "mpg": 33.9,
     "cyl": 4,
     "disp": 71.1,
     "hp": 65,
     "drat": 4.22,
     "wt": 1.835,
     "qsec": 19.9,
     "vs": 1,
     "am": 1,
     "gear": 4,
     "carb": 1
   },
   {
     "marca": "Toyota Corona",
     "mpg": 21.5,
     "cyl": 4,
     "disp": 120.1,
     "hp": 97,
     "drat": 3.7,
     "wt": 2.465,
     "qsec": 20.01,
     "vs": 1,
     "am": 0,
     "gear": 3,
     "carb": 1
   },
   {
     "marca": "Dodge Challenger",
     "mpg": 15.5,
     "cyl": 8,
     "disp": 318,
     "hp": 150,
     "drat": 2.76,
     "wt": 3.52,
     "qsec": 16.87,
     "vs": 0,
     "am": 0,
     "gear": 3,
     "carb": 2
   },
   {
     "marca": "AMC Javelin",
     "mpg": 15.2,
     "cyl": 8,
     "disp": 304,
     "hp": 150,
     "drat": 3.15,
     "wt": 3.435,
     "qsec": 17.3,
     "vs": 0,
     "am": 0,
     "gear": 3,
     "carb": 2
   },
   {
     "marca": "Camaro Z28",
     "mpg": 13.3,
     "cyl": 8,
     "disp": 350,
     "hp": 245,
     "drat": 3.73,
     "wt": 3.84,
     "qsec": 15.41,
     "vs": 0,
     "am": 0,
     "gear": 3,
     "carb": 4
   },
   {
     "marca": "Pontiac Firebird",
     "mpg": 19.2,
     "cyl": 8,
     "disp": 400,
     "hp": 175,
     "drat": 3.08,
     "wt": 3.845,
     "qsec": 17.05,
     "vs": 0,
     "am": 0,
     "gear": 3,
     "carb": 2
   },
   {
     "marca": "Fiat X1-9",
     "mpg": 27.3,
     "cyl": 4,
     "disp": 79,
     "hp": 66,
     "drat": 4.08,
     "wt": 1.935,
     "qsec": 18.9,
     "vs": 1,
     "am": 1,
     "gear": 4,
     "carb": 1
   },
   {
     "marca": "Porsche 914-2",
     "mpg": 26,
     "cyl": 4,
     "disp": 120.3,
     "hp": 91,
     "drat": 4.43,
     "wt": 2.14,
     "qsec": 16.7,
     "vs": 0,
     "am": 1,
     "gear": 5,
     "carb": 2
   },
   {
     "marca": "Lotus Europa",
     "mpg": 30.4,
     "cyl": 4,
     "disp": 95.1,
     "hp": 113,
     "drat": 3.77,
     "wt": 1.513,
     "qsec": 16.9,
     "vs": 1,
     "am": 1,
     "gear": 5,
     "carb": 2
   },
   {
     "marca": "Ford Pantera L",
     "mpg": 15.8,
     "cyl": 8,
     "disp": 351,
     "hp": 264,
     "drat": 4.22,
     "wt": 3.17,
     "qsec": 14.5,
     "vs": 0,
     "am": 1,
     "gear": 5,
     "carb": 4
   },
   {
     "marca": "Ferrari Dino",
     "mpg": 19.7,
     "cyl": 6,
     "disp": 145,
     "hp": 175,
     "drat": 3.62,
     "wt": 2.77,
     "qsec": 15.5,
     "vs": 0,
     "am": 1,
     "gear": 5,
     "carb": 6
   },
   {
     "marca": "Maserati Bora",
     "mpg": 15,
     "cyl": 8,
     "disp": 301,
     "hp": 335,
     "drat": 3.54,
     "wt": 3.57,
     "qsec": 14.6,
     "vs": 0,
     "am": 1,
     "gear": 5,
     "carb": 8
   },
   {
     "marca": "Volvo 142E",
     "mpg": 21.4,
     "cyl": 4,
     "disp": 121,
     "hp": 109,
     "drat": 4.11,
     "wt": 2.78,
     "qsec": 18.6,
     "vs": 1,
     "am": 1,
     "gear": 4,
     "carb": 2
   }
 ]

//  for(let carro of carros){
//   console.log(carro.mpg);
// }


const tablaDeCarros = document.querySelector("#tablacarros tbody");


carros.forEach(carro => {
  let fila = document.createElement('tr');


  fila.innerHTML = `
    <td>${carro.marca}</td>
    <td>${carro.mpg}</td>
    <td>${carro.cyl}</td>
    <td>${carro.disp}</td>
    <td>${carro.hp}</td>
    <td>${carro.drat}</td>
    <td>${carro.wt}</td>
    <td>${carro.qsec}</td>
    <td>${carro.vs}</td>
    <td>${carro.am}</td>
    <td>${carro.gear}</td>
    <td>${carro.gear}</td>
  
  `;
  tablaDeCarros.appendChild(fila);
})

