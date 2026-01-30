class Hero {
    constructor (name, age, type) {
    this.name = name
    this.age = age
    this.type = type
    }

    attack (){
        let attackType
        if (this.type === "guerreiro") {
            attackType = "espada"
        } else if (this.type === "mago") {
            attackType = "magia"
        } else if (this.type === "monge") {
            attackType = "artes marciais"
        } else if (this.type === "ninja") {
            attackType = "shuriken"
        }
        console.log (`O ${this.type} atacou usando ${attackType}`)
    }
}

const hero1 = new Hero ("Marcos", 21, "mago")
hero1.attack ()

