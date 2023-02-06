const numeros = (number,numberHidden,numberToCut) => {

    let brokeNumberOne = number.split("")

    for(let x = 0; x < brokeNumberOne.length; x++){
        for(let y = 0; y < numberToCut.length;y++){
            if(brokeNumberOne[x] == numberToCut[y]){
                brokeNumberOne.splice(x,1)
                x--
            }
        }
    }

    if(brokeNumberOne.join("") == numberHidden){
        console.log(true)
    }else{
        console.log(false)
    }
}
numeros("12345","125",["3","4"])