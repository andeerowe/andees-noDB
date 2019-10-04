import React, {Component} from 'react'
import Item from './item'

class Wishlist extends Component {
    constructor(){
        super()

        this.state = {}
    }

    updateListTitle = () => {
        this.setState({})
    }

    render (){
        return(
            <div className="list-display">

            <div className="list-title">Title <button id="edit-title">Edit</button></div>
            
            <div className="item-container">{this.props.list.map((element,index) => {

                return <Item 
                list={this.props.list}
                listItem={element}
                
                />
            })}
            </div>
            
            </div>
        )
    }
}

export default Wishlist