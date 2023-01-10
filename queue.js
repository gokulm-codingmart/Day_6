class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class queue{
    constructor(head){
        this.head = null;
    }
enqueue(head){
    let node = new Node(head);

    if(this.head==null){
        this.head = node;
    }
    else{
        let temp = this.head;
        while(temp.next!=null){
            temp = temp.next;
        }
        temp.next = node
    }
}
dequeue(){
    if(this.head==null){
        console.log("Invalid Operation");
    }
    else{
        let temp = this.head;
        this.head = temp.next;
    }
}
display(){
    if(this.head==null){
        console.log("Queue is Empty");
    }
    else{
        let temp = this.head;
        while(temp.next!=null){
            console.log(temp.data);
            temp = temp.next;
        }
        console.log(temp.data);
    }
}
peak(){
    if(this.head==null){
        console.log("Stack is empty bhaiya !!");
    }
    else{
        let temp = this.head;
        console.log(temp.data)
    }
}

}

let que = new queue();
// que.enqueue(5);
// que.enqueue(6);
// que.enqueue(8);
// que.enqueue(7);
que.display()
// que.dequeue()
// console.log("After dequeue");
// que.display()
que.peak()
