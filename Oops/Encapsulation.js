class encap {
    #pin = 1234
    get getpin() {  // Getter method to access the private field
        return this.#pin
    }
    set setpin(newpin) {  // Setter method to update the private field
        this.#pin = newpin
    }
}
let sg = new encap()
console.log(sg.getpin);
sg.setpin=4321
console.log(sg.getpin);