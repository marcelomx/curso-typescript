// string
let nome = "João";
console.log(nome);
// numbers
let idade: number = 27;
idade = 27.5;
console.log(idade);
// boolean
let possuiHobbies: boolean = false;
// possuiHobbies = 1;
console.log(possuiHobbies);

// tipos explicitos
let minhaIdade: number;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = "27";
// console.log(typeof minhaIdade);

// array
let hobbies: any[] = ["cozinhar", "praticar esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
console.log(typeof hobbies);

// tuplas
let endereco: [string, number] = ["Av. Principal", 99];
console.log(endereco);
endereco = ["Nova avenida", 1000];
console.log(endereco);

// enums
