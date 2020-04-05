export default class Creator {

    constructor (name) {
        this.name = name;
    }

    createEl(){

        this.el = document.registerElement(this.name);

    }

}

