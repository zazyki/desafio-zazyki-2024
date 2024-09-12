class BiomasZoo {

    constructor(nome, tipo, tamanho, animais){
        this.nome = nome
        this.tipo = tipo
        this.tamanho = tamanho
        this.animais = animais
        this.espaco = tamanho
        this.mespecies = 0
    }
    //determina o espaço disponível de acordo com os animais presentes no recinto
    setEspaco(animais){
        this.animais.forEach(animal => {
            this.espaco -= animais.get(animal)["tamanho"]
        });
    }
    //retorna 1 caso haja algum animal carnívoro no recinto e 0 caso não haja
    temCarnvr(animais){
        let t = 1
        this.animais.forEach(animal => {
            t = t*animais.get(animal)["carnvr"]
        })
        return t
    }      
}

export {BiomasZoo as BiomasZoo};