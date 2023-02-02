let combustivel_L = 2
let consumoMedioKM_L = 8
let distMax = consumoMedioKM_L * combustivel_L
let postosDeGasolina = [2,15,22,10.2]

let maior;
for(let y=0; y<=postosDeGasolina.length;y++){
    for(let x=0; x<=postosDeGasolina.length;x++){
       if(postosDeGasolina[x] > postosDeGasolina[x+1]){
            maior = postosDeGasolina[x];
            postosDeGasolina[x] = postosDeGasolina[x+1];
            postosDeGasolina[x+1] = maior;
       }
    }
}

for(let index = 0; index <= postosDeGasolina.length; index++){
    if(postosDeGasolina[index] >= distMax){
        console.log(`O posto mais próximo da sua distância máxima a ser percorrida é à ${postosDeGasolina[index - 1]}km`);
    }
}
console.log("----------------------- Exercício 02 -------------------------")