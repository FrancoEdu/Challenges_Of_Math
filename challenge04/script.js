let texto = "A verdade é que a dor em si é importante, a educação do aluno será seguida, mas acontece neste momento que algum grande trabalho e dor"
let termo = ["a", "em", "i", "el"]
let k=2;

const analiseDeTermos = (texto, termo, k) =>{
    let novoVetor = []
    let quantidadeLetras = 0;

    let dividirTextoEmVetores = texto.split(" ");

    for(let x = 0; x < dividirTextoEmVetores.length; x++){
        for(let y = 0; y < termo.length; y++){
            if(dividirTextoEmVetores[x].indexOf(termo[y]) !== -1){
                quantidadeLetras++
            }
        }
    }
}

analiseDeTermos(texto,termo,k)