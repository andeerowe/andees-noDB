import React, {Component} from 'react'
import Item from './item'

class Wishlist extends Component {
    constructor(){
        super()

        this.state = {
            wishListTitle: "My Wishlist"
        }
    }

    updateListTitle = () => {
        this.setState({})
    }

    render (){
        return(
            <div className="list-display">

            <div className="list-title"> {this.state.wishListTitle} 
            {/* <button id="edit-title">Edit</button> */}
            </div>
            
            <div className="item-container">{this.props.list.map((element,index) => {

                return <Item 
                list={this.props.list}
                listItem={element}
                delete={this.props.delete}
                edit={this.props.edit}
                
                />
            })}
            </div>
            
            </div>
        )
    }
}

export default Wishlist