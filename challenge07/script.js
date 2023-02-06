const painelSolar = (n,m) => {
    if(n < 1 || m < 1){
        console.log("Digite medidas válidas")
    }else{
        console.log(`Serão necessários ${(n+1)*(m+1)} leds`)
    }
}

painelSolar(6,9)