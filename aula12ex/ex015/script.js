function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >0 && idade <=10){
                //criança
                img.setAttribute('src' , 'menino.png')
            } else if (idade < 22) {
                //Jovem
                img.setAttribute('src' , 'jovem.png')
            } else if (idade < 65) {
                // adulto
                img.setAttribute('src' , 'adulto.png')
            } else if (idade >= 66){
                //Matusalém
                img.setAttribute('src' , 'velho.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >0 && idade <=10){
                //criança
                img.setAttribute('src' , 'menina.png')
            } else if (idade <= 22) {
                //Jovem
                img.setAttribute('src' , 'jova.png')
            } else if (idade <= 65) {
                // adulto
                img.setAttribute('src' , 'adulta.png')
            } else if (idade >= 66){
                //Matusalém
                img.setAttribute('src' , 'velha.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }     
    
} 