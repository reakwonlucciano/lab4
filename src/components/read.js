//import react
import React  from "react";
import { Books } from "./books"; // imports books component and used down below <book

// class for the read component// extends word used to export app.js
export class Read extends React.Component{

     // state to store data in this class
    state = {

        / books holding json data about 3 books.
        books: [
            {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
            },
            {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
            "Kyle Banker",
            "Peter Bakkum",
            "Tim Hawkins",
            "Shaun Verch",
            "Douglas Garrett"
            ],
            "categories": []
            },
            {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
            }
            ]
    } //state
    
    render(){
        
        // returning component

        // bpoks data in read component, have <books> here that connects the two components
        // with the "<Books books ={this.state.books}> " sends the data in the read component (state) and send it to
        // the books class/component where it sends back the formatted books data from the BookiIem component that's inbeeded in it and sent back to the read component which has a page on the website
        // that will show the books data that was formatted and sent back
         
        
        return(
            <div>
                <h3>Hello from my read component! </h3>
                <Books books={this.state.books}></Books>
            </div>
        );
    } //render
} //class
