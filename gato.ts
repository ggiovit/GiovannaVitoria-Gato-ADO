class Gato {
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

// Criando os dois objetos 
gato1 = new Gato("Levi", "Laranja", 4); // ambos são meus gatos hihi
gato2 = new Gato("Cacau", "Preto", 2);

console.log("Nome do gato 1: ", gato1.nome); 
console.log("Nome do gato 2: ", gato2.nome);

gato1.miar();
gato2.arranhar();
