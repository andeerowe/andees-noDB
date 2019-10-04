import React from 'react'
import './item.css'

function Item (props){
// console.log(props.list)
const {id, img, title, price, description} = props.listItem
// console.log(id,img)
console.log(props.listItem)

    return(
        <div className="item-box">
            <p>{img}</p>
            <p>{title}</p>
            <p>{price}</p>
            <p>{description}</p>
        </div>
    )
}

export default Item