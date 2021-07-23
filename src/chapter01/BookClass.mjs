export default class Book {
    constructor(title) {
        this._title = title
    }
    printTitle(){
        console.log(this._title)
    }
}