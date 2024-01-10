/*var hora = 22
console.log(`Agora são ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora > 12 && hora <= 18) {
    console.log('Boa tarde!')
} else if (hora > 19) {
    console.log('Boa noite!')
}*/

var horasistema = new Date()
var hora = horasistema.getHours()
console.log(`Agora são ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora > 12 && hora <= 18) {
    console.log('Boa tarde!')
} else if (hora > 19) {
    console.log('Boa noite!')
}