class Counter {
    constructor(count){
       this.count = count 
    }
    add(amount){
      this.count = this.count + amount
    }
    print(){
        console.log(this.count)
    }
}
const count1 = new Counter (1)
count1.add(1)
count1.print()

const count2 = new Counter(2)
count2.add(1)
count2.print()