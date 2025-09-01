class gato {
    nome: string;
    cor: string;
    idade: number;

    constructor(nome: string, cor: string, idade: number) {
        this.nome = nome;
        this.cor = cor;
        this.idade = idade;
    }

      miar() {
    console.log(`${this.nome} está miando: Miau!`);
  }

  arranhar() {
    console.log(`${this.nome} está arranhando.`);
  }
}

//criando os dois objetos 

const gato1 = new gato("Levi", "Laranja", 4);
const gato2 = new gato("Cacau", "Preto", 2)

console.log("Nome do gato 1: ", gato1.nome);
console.log("Nome do gato 2: ", gato2.nome);

gato1.miar();
gato2.arranhar();