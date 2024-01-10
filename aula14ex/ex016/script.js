function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

      
    if (ini.value == '' || fim.value == '' || passo.value == '') {
        window.alert('Dilma, insira um número')
        
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //Contagem regressiva
            for(let c = i; c >= f; c-= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
            
    }
    res.innerHTML += `${c} \u{1F603}`
}
