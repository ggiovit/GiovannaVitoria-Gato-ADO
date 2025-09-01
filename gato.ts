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
    console.log(`${this.nome} está miando muito: Miauuu!`);
  }

  arranhar() {
    console.log(`${this.nome} está arranhando o sofá. Pare com isso!`);
  }
}

//criando os dois objetos 

const gato1 = new gato("Levi", "Laranja", 4); //ambos são meu gatos hihi
const gato2 = new gato("Cacau", "Preto", 2)

console.log("Nome do gato 1: ", gato1.nome); 
console.log("Nome do gato 2: ", gato2.nome);

gato1.miar();
gato2.arranhar();