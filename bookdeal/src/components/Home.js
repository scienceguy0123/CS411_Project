import React, {Component} from 'react';
import Categories from './Categories.js';
import LatestAddition from "./LatestAddition.js";
import SearchBar from './SearchBar.js';
import NYTBooks from './NYTBooks.js';

class Home extends Component{

    constructor(props){
        super(props);

        this.state={}
    }

    componentDidMount() {       
        this.props.fetchLatestBooks();
        this.props.fetchNYTBooks();
        this.props.clearGBook();
        console.log("fire");
       }   


    render(){
        if(this.props.fetchBooks.books!= null && this.props.fetchBooks.books.data.length !=4){
            return (
                <div></div>
            )
        }
        return(
        <div>
            {this.props.fetchBooks.isLoading ? 

                <div>
                    <h1>loading</h1>
                </div>

                :


                <div>
                    <SearchBar className="mt-5"/>
                    <Categories className="mt-5"/>
                    <div style={{marginTop:"3vw"}}></div>

                    
                    <LatestAddition fetchBooks = {this.props.fetchBooks} fetchLatestBooks = {this.props.fetchLatestBooks}/>
                    <NYTBooks  nytBooks ={this.props.nytBooks}/>
                </div>
            }
        </div>

        )
    }
}

export default Home;