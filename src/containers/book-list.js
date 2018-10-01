import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from  '../actions/index';
import { bindActionCreators } from 'redux';

class Booklist extends Component{

    renderList(){
        return this.props.books.map((book)=>{
            return (
                <li 
                key= {book.title} 
                onClick={()=> this.props.selectBook(book)}
                className="list-group-item">{book.title}</li>
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

// mapDispatchToProps
// Anything returned from this function will end as props
// on th BookList container
function mapDispatchToProps(dispatch){


    // bindActionCreators() 
    // whenever selectbook is callled , the result should be passed
    // to all of our reducers
    return bindActionCreators({selectBook:selectBook}, dispatch)

}

// Promote boolist from a component to a container
// it needs to know about thisnew dispatch method, select book and
// make it available as props
export default connect(mapStateToProps, mapDispatchToProps)(Booklist);