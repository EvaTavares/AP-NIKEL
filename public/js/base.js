const nome = "Eva Tavares";
let nome2 = "";
let pessoadefault = {
    nome:"Eva Tavares",
    idade: "29",
    trabalho: "DEV"
}

let nomes = ["Eva Tavares", "Alinne simões", "Cuore", "Preta"];
let pessoas = [{
    nome:"Eva Tavares",
    idade: "29",
    trabalho: "DEV"
},

{
    nome:"Alinne",
    idade: "37",
    trabalho: "ux"
}];


function alterarNome () {
    nome2 = "Evelynne Tamara";
    console.log("Valor alterado:")
    console.log(nome2);
}

function recebeEalteraNome (novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:")
    console.log(nome2);
}

function ImprimirPessoa(pessoa) {
    console.log("nome");
    console.log(pessoa.nome);
    
    console.log("idade");
    console.log(pessoa.idade);
    
    console.log("trabalho");
    console.log(pessoa.trabalho);  
}

function AdicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function ImprimirPessoas () {
    pessoas.forEach((item)=> {
        console.log ("nome:");
        console.log (item.nome);

        console.log("idade:");
        console.log(item.idade);
    
        console.log("trabalho:");
        console.log(item.trabalho);
        
    })
}



AdicionarPessoa({
        nome:"cuore",
        idade: "10",
        trabalho: "gato"
});

ImprimirPessoas();


//ImprimirPessoa(pessoadefault);

//ImprimirPessoa({
  //  nome:"Alinne Simões",
   // idade: "37",
   // trabalho: "DEV"   
//});

//recebeEalteraNome("Emmanuel José");
//recebeEalteraNome("Husman");


//alterarNome();