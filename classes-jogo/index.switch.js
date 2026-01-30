class Hero {
    constructor (name, age, type) {
    this.name = name
    this.age = age
    this.type = type
    }

    attack() {
        let attackType
        switch(this.type){
        case "guerreiro":
            attackType = "espada"
            break
        case "mago":
            attackType = "magia"
            break
        case "monge":
            attackType = "artes marciais"
            break
        case "ninja":
            attackType = "shuriken"
            break
        default:
            attackType = "um ataque desconhecido"
        }
         console.log (`O ${this.type} atacou usando ${attackType}`)
    }
}

const hero1 = new Hero ("Gandalf", 2000, "mago")
hero1.attack()