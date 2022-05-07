export class Hotel {
    nomeHotel;
    clasificacaoHotel;
    taxasSemanalParaClientesNormais;
    taxasSemanalParaClientesFidelizados;
    taxasFimDeSemanaParaAmbos;

    constructor(nomeHotel, clasificacaoHotel) {
        this.nomeHotel = nomeHotel;
        this.clasificacaoHotel = clasificacaoHotel;
        this.taxasSemanalParaClientesNormais = [];
        this.taxasSemanalParaClientesFidelizados = [];
        this.taxasFimDeSemanaParaAmbos = [];
    }
}
