
import { animais, recintos } from "./info-zoo.js";

class RecintosZoo {
    constructor(){

    }
    
    filtraBioma(biomas, i){
        if(biomas.includes(recintos[i].getTipo())){             
            return 1
        }
        return 0        
    }

    filtraTamanho(animal, tamanho_req, i){
        if(recintos[i].getAnimais().length > 0 && !recintos[i].getAnimais().includes(animal)){
            tamanho_req++
        }
        if(recintos[i].getEspaco()>=tamanho_req){
            return 1
        }
        return 0
    }

    filtraCarnvr(animal, i){
        if(recintos[i].temCarnvr(animais)==animais.get(animal)[2] || recintos[i].getAnimais().length==0){
            return 1
        }
        return 0
    }

    filtraPart(animal, quant, i){

        if(animal=="MACACO" && recintos[i].getAnimais().length==0 && quant==1){
            return 0
        }

        const a = [...recintos[i].getAnimais()]
        a.push(animal)
        const b = a.filter((an) => an!="HIPOPOTAMO")

        if(recintos[i].getTipo()!="savana e rio" && a.length!=b.length && b.length!=0){
            return 0
        }
        return 1
    }

    analisaRecintos(animal, quantidade) {
        var teste = [0,0,0,0,0]

        var biomas_filt = []
        var tamanho_filt = []
        var carnvr_filt = []
        var part_filt = []
        var total_filt = []
       
        const tamanho_req = quantidade*animais.get(animal)[1]
        var recintos_req = animais.get(animal)[0]

        for (let i = 0; i < recintos.length; i++) {
 
            biomas_filt.push(this.filtraBioma(recintos_req, i))
            tamanho_filt.push(this.filtraTamanho(animal, tamanho_req, i))
            carnvr_filt.push(this.filtraCarnvr(animal, i))
            part_filt.push(this.filtraPart(animal, quantidade, i))
            
            teste[i] += this.filtraBioma(recintos_req, i)
            teste[i] += this.filtraTamanho(animal, tamanho_req, i)
            teste[i] += this.filtraCarnvr(animal, i)
            teste[i] += this.filtraPart(animal, quantidade, i)


        }
        for (let i = 0; i < recintos.length; i++) {
            total_filt[i] = biomas_filt[i]*tamanho_filt[i]*carnvr_filt[i]*part_filt[i]
        }
        console.log(total_filt)
        console.log(teste)
        
    }

}

export { RecintosZoo as RecintosZoo };

//console.log(animais.get("MACACO")[0].includes(recintos[4].getTipo()))
var rec = new RecintosZoo().analisaRecintos("MACACO", 1)
