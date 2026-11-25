var Gato = /** @class */ (function () {
    function Gato(nome, cor, idade) {
        this.nome = nome;
        this.cor = cor;
        this.idade = idade;
    }

    Gato.prototype.miar = function () {
        console.log("".concat(this.nome, " est\u00E1 miando muito: Miauuu!"));
    };

    Gato.prototype.arranhar = function () {
        console.log("".concat(this.nome, " est\u00E1 arranhando o sof\u00E1. Pare com isso!"));
    };

    return Gato;
}());

// Criando os dois objetos
var gato1 = new Gato("Levi", "Laranja", 4); // ambos são meus gatos hihi
var gato2 = new Gato("Cacau", "Preto", 2);

// Exibindo os nomes dos gatos
console.log("Nome do gato 1: ", gato1.nome);
console.log("Nome do gato 2: ", gato2.nome);

// Executando os métodos
gato1.miar();
gato2.arranhar();
