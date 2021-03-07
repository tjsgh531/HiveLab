import{
    Header
}from "./header.js";

class Main{
    constructor(){
        this.headerApp = new Header();
    }
}

window.onload = () => {
    new Main();
}