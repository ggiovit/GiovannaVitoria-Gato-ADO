class Gato {
    nome: string;
    cor: string;
    idade: number;

    constructor(nome: string, cor: string, idade: number) {
        this.nome = nome;
        this.cor = cor;
        this.idade = idade;
    }

    miar(): void {
        console.log(`${this.nome} está miando muito: Miauuu!`);
    }

    arranhar(): void {
        console.log(`${this.nome} está arranhando o sofá. Pare com isso!`);
    }
}

// Criando os dois objetos
const gato1 = new Gato("Levi", "Laranja", 4); // ambos são meus gatos hihi
const gato2 = new Gato("Cacau", "Preto", 2);

// Exibindo os nomes dos gatos
console.log("Nome do gato 1: ", gato1.nome);
console.log("Nome do gato 2: ", gato2.nome);

// Executando os métodos
gato1.miar();
gato2.arranhar();
