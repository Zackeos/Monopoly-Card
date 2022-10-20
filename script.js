const placelist = [
  {
    "name": "STRANDVEJAN",
    "country": "DENMARK",
    "colour": "#a04320",
    "empty": 20,
    "1-rent": 100,
    "2-rent": 300,
    "3-rent": 900,
    "4-rent": 1200,
    "hotel-rent": 2500,
    "house-cost": 500,
    "hotel-cost": 500,
    "mortgage": 300,
    "cost": 600
  },
  {
    "name": "SLOTSGADE",
    "country": "DENMARK",
    "colour": "#a04320",
    "empty": 40,
    "1-rent": 200,
    "2-rent": 600,
    "3-rent": 1800,
    "4-rent": 3800,
    "hotel-rent": 4500,
    "house-cost": 500,
    "hotel-cost": 500,
    "mortgage": 300,
    "cost": 600
  },
  {
    "name": "GRANDE PLACE",
    "country": "BELGIUM",
    "colour": "#0095b6",
    "empty": 80,
    "1-rent": 400,
    "2-rent": 1000,
    "3-rent": 3000,
    "4-rent": 4500,
    "hotel-rent": 6000,
    "house-cost": 500,
    "hotel-cost": 500,
    "mortgage": 600,
    "cost": 1200
  },
  {
    "name": "LANGE POTEN",
    "country": "NETHERLANDS",
    "colour": "#e70186",
    "empty": 100,
    "1-rent": 500,
    "2-rent": 1500,
    "3-rent": 4500,
    "4-rent": 6250,
    "hotel-rent": 7500,
    "house-cost": 1000,
    "hotel-cost": 1000,
    "mortgage": 700,
    "cost": 1400
  },
  {
    "name": "COOLSINGEL",
    "country": "NETHERLANDS",
    "colour": "#e70186",
    "empty": 100,
    "1-rent": 500,
    "2-rent": 1500,
    "3-rent": 4500,
    "4-rent": 6250,
    "hotel-rent": 7500,
    "house-cost": 1000,
    "hotel-cost": 1000,
    "mortgage": 700,
    "cost": 1400
  },
  {
    "name": "KALVERSTRAAT",
    "country": "NETHERLANDS",
    "colour": "#e70186",
    "empty": 120,
    "1-rent": 600,
    "2-rent": 1800,
    "3-rent": 5000,
    "4-rent": 7000,
    "hotel-rent": 9000,
    "house-cost": 1000,
    "hotel-cost": 1000,
    "mortgage": 800,
    "cost": 1600
  },
  {
    "name": "LAS RAMBLAS",
    "country": "SPAIN",
    "colour": "#f88d04",
    "empty": 160,
    "1-rent": 800,
    "2-rent": 2300,
    "3-rent": 6000,
    "4-rent": 8000,
    "hotel-rent": 10000,
    "house-cost": 1000,
    "hotel-cost": 1000,
    "mortgage": 1000,
    "cost": 2000
  },
  {
    "name": "PARK LANE",
    "country": "UNITED KINGDOM",
    "colour": "#f40502",
    "empty": 200,
    "1-rent": 1000,
    "2-rent": 3000,
    "3-rent": 7500,
    "4-rent": 9250,
    "hotel-rent": 11000,
    "house-cost": 1500,
    "hotel-cost": 1500,
    "mortgage": 1200,
    "cost": 2400
  },
  {
    "name": "VIA MONTENAPOLEONE",
    "country": "ITALY",
    "colour": "#fdd505",
    "empty": 240,
    "1-rent": 1200,
    "2-rent": 3600,
    "3-rent": 8500,
    "4-rent": 10250,
    "hotel-rent": 12000,
    "house-cost": 1500,
    "hotel-cost": 1500,
    "mortgage": 1400,
    "cost": 2800
  },
  {
    "name": "RUE DE LA PAIX",
    "country": "FRANCE",
    "colour": "#009837",
    "empty": 280,
    "1-rent": 1500,
    "2-rent": 4500,
    "3-rent": 10000,
    "4-rent": 12000,
    "hotel-rent": 14000,
    "house-cost": 2000,
    "hotel-cost": 2000,
    "mortgage": 1600,
    "cost": 3200
  },
  {
    "name": "KÖNIGSALEE",
    "country": "GERMANY",
    "colour": "#046fbb",
    "empty": 350,
    "1-rent": 1750,
    "2-rent": 5000,
    "3-rent": 11000,
    "4-rent": 13000,
    "hotel-rent": 15000,
    "house-cost": 2000,
    "hotel-cost": 2000,
    "mortgage": 1750,
    "cost": 3500
  },
  {
    "name": "KURFÜRSTENDAMM",
    "country": "GERMANY",
    "colour": "#046fbb",
    "empty": 500,
    "1-rent": 2000,
    "2-rent": 6000,
    "3-rent": 14000,
    "4-rent": 17000,
    "hotel-rent": 20000,
    "house-cost": 2000,
    "hotel-cost": 2000,
    "mortgage": 2000,
    "cost": 4000
  },
];
  

var app = new Vue({
  el: "#app",
  data() {
    return {
      places: placelist
    }
  },
  methods: {
    numberformat: function(number){
      return number.toLocaleString("en-US")
    },
    getColour: function(index){
      return{
        background: placelist[index]["colour"]
      }
    }
    
  }
})