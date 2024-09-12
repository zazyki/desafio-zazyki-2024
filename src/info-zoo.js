import { BiomasZoo } from "./biomas-zoo.js";

//associar com cada animal uma array cuja primeira entrada informa os biomas, a segunda informa o tamanho e a terceira se são carnívoros ou não
const ANIMAIS = new Map()
ANIMAIS.set("MACACO", {"biomas":["savana", "floresta", "savana e rio"],"tamanho": 1, "carnvr" : 0})  
ANIMAIS.set("HIPOPOTAMO", {"biomas":["savana", "rio", "savana e rio"],"tamanho": 4, "carnvr" : 0}) 
ANIMAIS.set("GAZELA", {"biomas":["savana",  "savana e rio"],"tamanho": 2, "carnvr" : 0}) 
ANIMAIS.set("LEAO", {"biomas":["savana", "savana e rio"],"tamanho": 3, "carnvr" : 1}) 
ANIMAIS.set("LEOPARDO", {"biomas":["savana", "savana e rio"],"tamanho": 2, "carnvr" : 1}) 
ANIMAIS.set("CROCODILO",{"biomas":["rio", "savana e rio"],"tamanho": 3, "carnvr" : 1})  

const LISTA_ANIMAIS = ["MACACO", "HIPOPOTAMO", "GAZELA", "LEAO", "LEOPARDO", "CROCODILO"]

const RECINTOS = [new BiomasZoo("Recinto 1", "savana", 10, ["MACACO", "MACACO", "MACACO"]),
                new BiomasZoo("Recinto 2", "floresta", 5, []),
                new BiomasZoo("Recinto 3", "savana e rio", 7, ["GAZELA"]),
                new BiomasZoo("Recinto 4", "rio", 8, []),
                new BiomasZoo("Recinto 5", "savana", 9, ["LEAO"])]

RECINTOS.forEach(recinto => {
    recinto.setEspaco(ANIMAIS)
})

export {ANIMAIS, RECINTOS, LISTA_ANIMAIS}