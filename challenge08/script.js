const chooseCompany = (TF1,VRQ1,TF2,VRQ2) =>{
    let valorFixoX = parseFloat(TF1)
    let valorFixoY = parseFloat(TF2)
    let tarifaPorKmX = parseFloat(VRQ1)
    let tarifaPorKmY = parseFloat(VRQ2)

    let km = Math.abs((valorFixoX - valorFixoY) / (tarifaPorKmX - tarifaPorKmY))

    console.log(`Empresa 1 quando a distância < ${km}, ` + 
                `Tanto faz quando a distância = ${km}, Empresa 2 quando a distância > ${km}`)
}

chooseCompany("2.6","1.0","8.0","0.5")