interface Smartphone{
    carica: number;
    numeroChiamate: number;
}

class User implements Smartphone{
    carica = 0
    numeroChiamate= 0

    public ricarica(unaRicarica: number): void{
        this.carica += unaRicarica
    }

    public chiamata(minutiDurata: number): void{
        this.numeroChiamate += 1
        this.carica -= 0.20 * minutiDurata
    }

    public numero404(): number{
        return this.carica
    }

    public getNumeroChiamate(): number{
        return this.numeroChiamate
    }

    public azzeraChiamate(): void{
        this.numeroChiamate= 0
    }
}

//User 1
console.log("****************USER 1*******************")
let FirstUser = new User
FirstUser.ricarica(10)
console.log("Il tuo credito è: " + FirstUser.numero404())
FirstUser.chiamata(7)
console.log("Il tuo credito è: " + FirstUser.numero404())

//User 2
console.log("****************USER 2*******************")
let SecondUser = new User
SecondUser.ricarica(20)
console.log("Il tuo credito è: " + SecondUser.numero404())
SecondUser.chiamata(13)
SecondUser.chiamata(4)
console.log("Hai effettuato: " + SecondUser.getNumeroChiamate() + " chiamate")

//User 3
console.log("****************USER 3*******************")
let ThirdUser = new User
ThirdUser.ricarica(50)
ThirdUser.chiamata(12)
ThirdUser.chiamata(7)
console.log("Hai effettuato: " + ThirdUser.getNumeroChiamate() + " chiamate")
ThirdUser.azzeraChiamate()
console.log("Hai effettuato: " + ThirdUser.getNumeroChiamate() + " chiamate")