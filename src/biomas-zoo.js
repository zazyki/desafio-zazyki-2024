class BiomasZoo {
    constructor(tipo, tamanho, animais){
        this.tipo = tipo
        this.tamanho = tamanho
        this.animais = animais
        this.espaco = tamanho
    }

    getTipo(){
        return this.tipo
    }

    getAnimais(){
        return this.animais
    }

    setEspaco(animais){
        for (let i = 0; i < this.animais.length; i++) {
            this.espaco -= animais.get(this.animais[i])[1]
        }
    }

    getEspaco(){
        return this.espaco
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