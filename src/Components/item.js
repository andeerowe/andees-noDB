import React, {Component} from 'react'
import './item.css'


class Item extends Component{
constructor () {
    super ()

    this.state = {
        editing: false,
        newPriceInput: ''
    }
}
edit = () => {
    const { editing } = this.state;
    this.setState({
      editing: !editing
    });
  };

handleUpdate = (e) => {
    this.setState({
        newPriceInput: e.target.value
    })
    console.log(e.target.value)
}

update = () => {
    let {id} = this.props.listItem
    this.props.edit(id, this.state.newPriceInput)

    this.setState({
        editing: false
    })
}

render () {
    let {img, title, price, description} = this.props.listItem
    console.log(this.props.listItem.id)
    return (
        
        <div>
        {this.state.editing ? (<div>
            <div className="item-box">
            <div>
                <img className="item-img" src={img} alt="photo here" />
            </div>
            <div>{title}</div>
            <input
                placeholder="New Price"
                value={this.state.newPriceInput}
                onChange={ e => {this.handleUpdate(e)}}

            ></input>
            <div>{description}</div>
            <button className="edit-delete" onClick={() => this.props.delete(this.props.listItem.id)}>Delete</button>
            <button className="edit-delete" onClick={this.update}>Update</button>
        </div>
        </div>)
        
        :(<div className="item-box">
             <div>
                <img className="item-img" src={img} alt="photo here" />
            </div>
            <div>{title}</div>
            <div>{price}</div>
            <div>{description}</div>
            <div className="edit-delete-container">
            <button className="edit-delete" onClick={() => this.props.delete(this.props.listItem.id)}>Purchase</button>
            <button className="edit-delete" onClick={() => this.edit()}>Price Match</button>
            </div>
        
        </div>)}
        
    </div>)
}       
    
}

export default Item