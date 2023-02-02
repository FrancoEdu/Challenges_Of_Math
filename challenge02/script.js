function vendaBarataECara(lista){
    let menorValor = 0
    let maiorValor = 0
    
    lista.forEach(item => {
        item.forEach(valor => {
            if(valor > maiorValor){
                maiorValor = valor
            } 

            if (valor < menorValor || menorValor == 0){
                menorValor = valor
            }
        })
    })
    return Array.of(menorValor, maiorValor)
}
console.log(vendaBarataECara([[500], [500,362,1040],[5]]))