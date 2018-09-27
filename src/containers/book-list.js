import React, {Component} from 'react';
import { connect } from 'react-redux';

class Booklist extends Component{

    renderList(){
        return this.props.books.map((book)=>{
            return (
                <li key= {book.title} className="list-group-item">{book.title}</li>
            )
        });
    }

    render(){
        return(
            <ul className="list-group col-sm-4">
            {this.renderList()}
            </ul>
        )
    }
}

//connection between redux and our component
function mapStateToProps(state){
    // returned will show up as props
    // inside of Booklist
    return{
        books: state.books
    }

}

export default connect(mapStateToProps)(Booklist);