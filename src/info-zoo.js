import { BiomasZoo } from "./biomas-zoo.js";

//associar com cada animal uma array cuja primeira entrada informa os biomas, a segunda informa o tamanho e a terceira se são carnívoros ou não
var animais = new Map()
animais.set("MACACO", [["savana", "floresta", "savana e rio"], 1, 0])  
animais.set("HIPOPOTAMO", [["savana", "rio", "savana e rio"], 4, 0])
animais.set("GAZELA", [["savana", "savana e rio"], 2, 0])
animais.set("LEAO", [["savana", "savana e rio"], 3, 1])
animais.set("LEOPARDO", [["savana", "savana e rio"], 2, 1])
animais.set("CROCODILO", [["rio", "savana e rio"], 3, 1])

const lista_animais = ["MACACO", "HIPOPOTAMO", "GAZELA", "LEAO", "LEOPARDO", "CROCODILO"]

const recintos = [new BiomasZoo("Recinto 1", "savana", 10, ["MACACO", "MACACO", "MACACO"]),
                new BiomasZoo("Recinto 2", "floresta", 5, []),
                new BiomasZoo("Recinto 3", "savana e rio", 7, ["GAZELA"]),
                new BiomasZoo("Recinto 4", "rio", 8, []),
                new BiomasZoo("Recinto 5", "savana", 9, ["LEAO"])]

for (let i = 0; i < recintos.length; i++) {
    recintos[i].setEspaco(animais)
}

export {animais, recintos, lista_animais}