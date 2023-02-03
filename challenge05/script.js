let assinante = [true, false, false, false, true, false,true,true, false, false, false]
let minutos_assistidos = [6144, 2742, 330, 30, 1500, 4032, 24036, 3288, 2076, 24540, 4716]
let horasVet = []

minutos_assistidos.forEach(minutos => {
    let horas_assistidas = Math.ceil(minutos/60)
    horasVet.push(horas_assistidas)
});

for()