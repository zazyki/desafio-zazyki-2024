
import { animais as ANIMAIS, recintos as RECINTOS, lista_animais as LISTA_ANIMAIS } from "./info-zoo.js";

class RecintosZoo {

    constructor(erro, recintosViaveis){
        this.erro = erro
        this.recintosViaveis = recintosViaveis
    }
    
    filtraBioma(biomas, i){
        //if(biomas.includes(recintos[i].getTipo())){             
        if(biomas.includes(RECINTOS[i].tipo)){  
            return 1
        }
        return 0        
    }

    filtraTamanho(animal, tamanho_req, i){
        if(RECINTOS[i].animais.length > 0 && !RECINTOS[i].animais.includes(animal)){
            RECINTOS[i].mespecies = 1
        }
        if(RECINTOS[i].espaco>=tamanho_req+RECINTOS[i].mespecies){
            return 1
        }
        return 0
    }

    filtraCarnvr(animal, i){
        if(RECINTOS[i].temCarnvr(ANIMAIS)==ANIMAIS.get(animal)[2] || RECINTOS[i].animais.length==0){
            return 1
        }
        return 0
    }

    filtraPart(animal, quant, i){

        if(animal=="MACACO" && RECINTOS[i].animais.length==0 && quant==1){
            return 0
        }

        const a = [...RECINTOS[i].animais]
        a.push(animal)
        const b = a.filter((an) => an!="HIPOPOTAMO")

        if(RECINTOS[i].tipo!="savana e rio" && a.length!=b.length && b.length!=0){
            return 0
        }
        return 1
    }

    analisaRecintos(animal, quantidade) {
        animal=animal.toUpperCase()
        var erro = false
        var recintos_top = []

        if(!LISTA_ANIMAIS.includes(animal)){
            return new RecintosZoo("Animal inválido", false)
        }
        if(!Number.isInteger(2)){
            return new RecintosZoo("Quantidade inválida", false)
        }else if(quantidade<1){
            return new RecintosZoo("Quantidade inválida", false)
        }  
 
        var tamanho_req = quantidade*ANIMAIS.get(animal)[1]
        const recintos_req = ANIMAIS.get(animal)[0]

        for (let i = 0; i < RECINTOS.length; i++) {//foreach
            this.erro = "Não há recinto viável"

            if(this.filtraBioma(recintos_req, i)
            && this.filtraTamanho(animal, tamanho_req, i)
            && this.filtraCarnvr(animal, i)
            && this.filtraPart(animal, quantidade, i)){
                recintos_top.push(`${RECINTOS[i].nome} (espaço livre: ${RECINTOS[i].espaco -tamanho_req -RECINTOS[i].mespecies} total: ${RECINTOS[i].tamanho})`)
            }
            RECINTOS[i].mespecies = 0
        }

        if(recintos_top.length==0){
            recintos_top = false
            erro = "Não há recinto viável"
        }
        
        return new RecintosZoo(erro, recintos_top)
    }
}

export { RecintosZoo as RecintosZoo };

var rec = new RecintosZoo().analisaRecintos("macaco", 1)
console.log(rec.erro)
console.log(rec.recintosViaveis)
