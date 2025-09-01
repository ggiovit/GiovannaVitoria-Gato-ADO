var gato = /** @class */ (function () {
    function gato(nome, cor, idade) {
        this.nome = nome;
        this.cor = cor;
        this.idade = idade;
    }
    gato.prototype.miar = function () {
        console.log("".concat(this.nome, " est\u00E1 miando muito: Miauuu!"));
    };
    gato.prototype.arranhar = function () {
        console.log("".concat(this.nome, " est\u00E1 arranhando o sof\u00E1. Pare com isso!"));
    };
    return gato;
}());

//criando os dois objetos 
var gato1 = new gato("Levi", "Laranja", 4); //ambos são meu gatos hihi
var gato2 = new gato("Cacau", "Preto", 2);
console.log("Nome do gato 1: ", gato1.nome);
console.log("Nome do gato 2: ", gato2.nome);
gato1.miar();
gato2.arranhar();
