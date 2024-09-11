class BiomasZoo {
    constructor(nome, tipo, tamanho, animais){
        this.nome = nome
        this.tipo = tipo
        this.tamanho = tamanho
        this.animais = animais
        this.espaco = tamanho
        this.mespecies = 0
    }

    setEspaco(animais){
        for (let i = 0; i < this.animais.length; i++) {
            this.espaco -= animais.get(this.animais[i])[1]
        }
    }

    temCarnvr(animais){
        let t = 1

        for (let i = 0; i < this.animais.length; i++){
            
            t = t*animais.get(this.animais[i])[2]
        }
        return t
    }
        
    
}

export {BiomasZoo as BiomasZoo};