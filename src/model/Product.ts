export interface Product {
    id: Number;
    name: String;
    category: String;
    price: Number;
    longDescription?: String;
    shortDescription?: String;
    catalog?: Number
    
    // constructor(private id: Number, private name: String,
    //     private category: String, private price: Number,
    //     private longDescription?: String,
    //     private shortDescription?: String,
    //     private catalog?: Number
    // ) {}
}