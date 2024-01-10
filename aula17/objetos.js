let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 152,
    emagrecer(p=0){
        console.log('Emagreceu!')
        this.peso += p
    }
}
amigo.emagrecer(-65)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)