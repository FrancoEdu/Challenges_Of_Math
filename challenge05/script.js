let assinante = [true, false, false, false, true, false,true,true, false, false, false]
let minutos_assistidos = [6144, 2742, 330, 30, 1500, 4032, 24036, 3288, 2076, 24540, 4716]
let horasVet = []
let totalHorasAssistidas = 0;
let porcentagem;
let porcentagemVet = [];

minutos_assistidos.forEach(minutos => {
    let horas_assistidas = Math.ceil(minutos/60)
    horasVet.push(horas_assistidas)
});
console.log(horasVet)
for(let x = 0; x < assinante.length; x++){
    if(assinante[x] == true){
        horasVet[x] = horasVet[x] * 2
        totalHorasAssistidas = totalHorasAssistidas + horasVet[x]
    }else{
        totalHorasAssistidas = totalHorasAssistidas + horasVet[x]
    }
}

for(let x = 0; x<horasVet.length;x++){
    porcentagem = Math.ceil(((horasVet[x] * 100)/totalHorasAssistidas))
    porcentagemVet.push(porcentagem)
}

console.log(porcentagemVet)