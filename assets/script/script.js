var User = /** @class */ (function() {
    function User() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    User.prototype.ricarica = function(unaRicarica) {
        this.carica += unaRicarica;
    };
    User.prototype.chiamata = function(minutiDurata) {
        this.numeroChiamate += 1;
        this.carica -= 0.20 * minutiDurata;
    };
    User.prototype.numero404 = function() {
        return this.carica;
    };
    User.prototype.getNumeroChiamate = function() {
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamate = function() {
        this.numeroChiamate = 0;
    };
    return User;
}());
//User 1
console.log("****************USER 1*******************");
var FirstUser = new User;
FirstUser.ricarica(10);
console.log("Il tuo credito è: " + FirstUser.numero404());
FirstUser.chiamata(7);
console.log("Il tuo credito è: " + FirstUser.numero404());
//User 2
console.log("****************USER 2*******************");
var SecondUser = new User;
SecondUser.ricarica(20);
console.log("Il tuo credito è: " + SecondUser.numero404());
SecondUser.chiamata(13);
SecondUser.chiamata(4);
console.log("Hai effettuato: " + SecondUser.getNumeroChiamate() + " chiamate");
//User 3
console.log("****************USER 3*******************");
var ThirdUser = new User;
ThirdUser.ricarica(50);
ThirdUser.chiamata(12);
ThirdUser.chiamata(7);
ThirdUser.chiamata(17);
console.log("Hai effettuato: " + ThirdUser.getNumeroChiamate() + " chiamate");
ThirdUser.azzeraChiamate();
console.log("Hai effettuato: " + ThirdUser.getNumeroChiamate() + " chiamate");