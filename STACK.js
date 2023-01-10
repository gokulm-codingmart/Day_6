class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class stack{
    constructor(head){
        this.head = null;
    }

push(data){
    let node = new Node(data);
    if(this.head==null){
        this.head = node;
    }
    else{
        node.next = this.head;
        this.head = node;
    }
    //console.log(this.head.data);
}
display(){
    let temp = this.head;
    while(temp!=null){
        console.log(temp.data);
        temp = temp.next;
    }
    //console.log(temp.data);
}

pop(){
    if(this.head==null){
        console.log("Operation invalid");
    }
    else{
        let temp = this.head.next
        this.head = this.head.next;
    }
}

peak(){
    if(this.head==null){
        console.log("Stack is empty!!!");
    }
    else{
   console.log(this.head.data);}
}

}
let stck = new stack()
stck.push(3)
stck.push(4)
stck.push(5)
stck.pop()
stck.display()
stck.peak()
