// let nome = prompt("Digite seu nome");
// let datadenascimento = Number(prompt("Digite seu ano de nascimento"));
// let ano = 2019;

// idade =  ano - datadenascimento;

// console.log("Ola,eu chamo "+ nome +", tenho " + idade + " anos e estou estudando jasvascript");



let nomedoaluno  = prompt("digite seu nome");
let matricula = Number (prompt("digite seu numero de matricula"));
let nota_1 = Number (prompt("digite sua nota 1"));
let nota_2 = Number (prompt("digite sua nota 2"));

media = (nota_1 + nota_2)/2;

if (media > 0 && media <=10)  {
    alert("O aluno " + nomedoaluno + " matricula " + " obteve a media final " + media );
}

else if ( media ===0){
    alert("a media nao pode ser 0")
}

else {
    alert(`à media nao pode ser maior que 10`)
}
