class Node {
 constructor(value) {
   this.value = value;
   this.next = null;
 }
}

class linkList {
 constructor() {
   this.head = null;
   this.tail = null;
   this.length = 0;
 }
 append(value) {
   const newNode = new Node(value);
   if (this.head === null) {
     this.head = newNode;
     this.tail = newNode;
   } else {
     this.tail.next = newNode;
     this.tail = newNode;
   }
   this.length++;
 }
 prepend(value) {
   const newNode = new Node(value);
   if (this.head === null) {
     this.head = newNode;
     this.tail = newNode;
   } else {
     newNode.next =
       this.head; /*তুমি নতুন নোডের next কে পুরনো হেডের দিকে পয়েন্ট করছো। here this.head =10 */
     this.head = newNode; /* এখন তুমি হেড পয়েন্টারকে আপডেট করছো —
কারণ এখন নতুন হেড হলো 100 (আগে ছিল 10)। */
   }
 }
 insert(index, value) {
   if (index < 0 || index > this.length) {
     console.error("muri khaoo");
     return undefined;
   }

   if (index === 0) {
     return this.prepend(value);
   }
   if (index === this.length) {
     return this.append(value);
   }
   const leadingNode = this._traverseToIndex(index - 1);       
   const holdingNode = leadingNode.next;  /* target  */
   const newNode = new Node(value);
   leadingNode.next = newNode;   
   newNode.next = holdingNode;      /* address */
 }
 remove() {}
 // private helper method
 _traverseToIndex(index) {
   let count = 0;
   let currentNode = this.head;
   while (count != index) {
     currentNode = currentNode.next;
     count++;
   }
   return currentNode;
 }

 print() {
   let currentNode = this.head;
   while (currentNode != null) {
     console.log(currentNode.value);
     currentNode = currentNode.next;
   }
 }
}
const newlinkedList = new linkList();
newlinkedList.append(0);
newlinkedList.append(1);
newlinkedList.append(3);
newlinkedList.insert(2, 2);
newlinkedList.print();

