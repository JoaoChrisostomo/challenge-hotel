class Hotel {
  constructor(nomeHotel, classificacaoHotel, taxaDiaUtil, finalDeSemana) {
    this.nomeHotel = nomeHotel;
    this.classificacaoHotel = classificacaoHotel;
    this.taxasDiaDeSemama = {
      normais: taxaDiaUtil[0],
      fidelidade: taxaDiaUtil[1],
    };
    this.taxasFinalDeSemana = {
      normais: finalDeSemana[0],
      fidelidade: finalDeSemana[1],
    };
    this.total_a_pagar = 0;
  }

  get hotelVencedor() {
    return `O hotel, ${this.nomeHotel} é o hotel mais barato`;
  }

  get reservar() {
    let reservado = `O Hotel ${this.nomeHotel}, foi reservado a um preço de R$ ${this.total_a_pagar},00`;
    return reservado;
  }

  totalAPagar(cliente, diasDeSemana, finalDeSemana) {
    var tipoCliente = cliente == "Regular" ? "normais" : "fidelidade";

    this.total_a_pagar = this.taxasDiaDeSemama[tipoCliente] * diasDeSemana;
    this.total_a_pagar += this.taxasFinalDeSemana[tipoCliente] * finalDeSemana;

    return this.total_a_pagar;
  }
}

//"Regular" -  "Reward"

function hotelMaisBarato(cliente, ...data) {
  var diasDeSemana = data.filter((dia) => dia < 6).length;
  var finalDeSemana = data.filter((dia) => dia > 5).length;

  var hotelaria = [
    new Hotel("Lakewood", 3, [110, 80], [80, 90]),
    new Hotel("Bridgewood", 4, [160, 110], [60, 50]),
    new Hotel("Ridgewood", 5, [220, 100], [150, 40]),
  ];

  hotelaria.forEach((hotel) => {
    hotel.totalAPagar(cliente, diasDeSemana, finalDeSemana);
  });

  hotelaria.sort(function (a, b) {
    if (a.total_a_pagar < b.total_a_pagar) {
      return -1;
    } else {
      return true;
    }
  });

  // console.log(hotelaria);

  console.log(hotelaria[0].hotelVencedor);
  console.log(hotelaria[0].reservar);
}
console.log("Entrada 03: ");
hotelMaisBarato("Reward", 4, 5, 7);
module.exports = hotelMaisBarato;

//entrada 01 "Regular",1,2,3
//entrada 02 "Regular",5,6,7
//entrada 03 "Reward",4,5,7
