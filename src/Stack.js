
class Stack {
    constructor() {
        this.arr = [];
    }

    push(element) {
        this.arr.push(element);
    }

    pop() {
        //check;
        var lastElement = this.arr[this.arr.length - 1];
        this.arr.splice(this.arr.length - 1, 1);
        return lastElement;
    }

    getLastElement() {
        return this.arr[this.arr.length - 1];
    }

    length(){
        var size = this.arr.length
        return size;
    }


}

module.exports = Stack;