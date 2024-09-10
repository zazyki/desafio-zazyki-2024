import { BiomasZoo } from "./biomas-zoo.js";

//associar com cada animal uma array cuja primeira entrada informa os biomas, a segunda informa o tamanho e a terceira se são carnívoros ou não
var animais = new Map()
animais.set("MACACO", [["savana", "floresta", "savana e rio"], 1, 0])  
animais.set("HIPOPOTAMO", [["savana", "rio", "savana e rio"], 4, 0])
animais.set("GAZELA", [["savana", "savana e rio"], 2, 0])
animais.set("LEÃO", [["savana", "savana e rio"], 3, 1])
animais.set("LEOPARDO", [["savana", "savana e rio"], 2, 1])
animais.set("CROCODILO", [["rio", "savana e rio"], 3, 1])

var recintos = [new BiomasZoo("savana", 10, ["MACACO", "MACACO", "MACACO"]),
                new BiomasZoo("floresta", 5, []),
                new BiomasZoo("savana e rio", 7, ["GAZELA"]),
                new BiomasZoo("rio", 8, []),
                new BiomasZoo("savana", 9, ["LEÃO"])]

for (let i = 0; i < recintos.length; i++) {
    recintos[i].setEspaco(animais)
}

export {animais, recintos}