
import { ANIMAIS, RECINTOS, LISTA_ANIMAIS } from "./info-zoo.js";

class RecintosZoo {

    constructor(erro, recintosViaveis){
        this.erro = erro
        this.recintosViaveis = recintosViaveis
    }

    //filtra os recintos de acordo com os biomas aceitos pelo animal recebido
    filtraBioma(biomas, i){           
        if(biomas.includes(RECINTOS[i].tipo)){  
            return 1
        }
        return 0        
    }

    //filtra os recintos de acordo com o tamanho necessário para o animal e quantidade informados
    filtraTamanho(animal, tamanho_req, i){
        if(RECINTOS[i].animais.length > 0 && !RECINTOS[i].animais.includes(animal)){
            RECINTOS[i].mespecies = 1
        }
        if(RECINTOS[i].espaco>=tamanho_req+RECINTOS[i].mespecies){
            return 1
        }
        return 0
    }

    //testa se um recinto e seus animais se adequam à dieta do animal informado
    filtraCarnvr(animal, i){
        if(RECINTOS[i].temCarnvr(ANIMAIS)==ANIMAIS.get(animal)["carnvr"] || RECINTOS[i].animais.length==0){
            const a = [...RECINTOS[i].animais]
            a.push(animal)
            const allEqual = arr => arr.every( v => v === arr[0] )
            if(ANIMAIS.get(animal)["carnvr"] && !allEqual(a)){
                return 0
            }
            return 1
        }
        return 0
    }

    //testa se um recinto se adequa às particularidades dos macacos e hipopótamos
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
        
        //retorna os erros de entrada
        if(!LISTA_ANIMAIS.includes(animal)){
            return new RecintosZoo("Animal inválido", false)
        }
        if(!Number.isInteger(2)){
            return new RecintosZoo("Quantidade inválida", false)
        }else if(quantidade<1){
            return new RecintosZoo("Quantidade inválida", false)
        }  
        
        let erro = false
        let recintos_top = []
        const tamanho_req = quantidade*ANIMAIS.get(animal)["tamanho"]
        const recintos_req = ANIMAIS.get(animal)["biomas"]

        //caso passe em todos os testes simultaneamente, o recinto de índice i e suas informações são adicionados à array de respostas
        for (let i = 0; i < RECINTOS.length; i++) {

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


