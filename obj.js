class Book {          /* Here we are creating a reusable Book class */
    #percentagePerSale = 0.12;    /* THis is private property. we can't access it outside  */
    constructor(title , page, isbn){  /* Here constructor will run when you declare a new Book */
     this.tile = title;
     this.page = page ;
     this.isbn = isbn;
    }
    get price (){   /* This is called getter. This'll return new Book price   */
        return this.page * this.#percentagePerSale
    }
    static copiesSold =0; /* This is static property method. THis'll be same through creating a lot Book. Details : "https://chatgpt.com/c/69081c55-d5e8-8323-8a23-7f2cf4529662" */
    static sellCopy(){
        this.copiesSold++;
    }
    printIsbn(){
        console.log(this.isbn)
    }
}
const book1 = new Book ("JS", "200", "js-101")
console.log(book1, "price $:" , book1.page)

// Book.sellCopy()
// Book.sellCopy()
// Book.sellCopy()
// console.log(Book.copiesSold)