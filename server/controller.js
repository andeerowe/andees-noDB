// const list = require("./dataList.js")
let list = [
    {
        id: 1,
        img:"https://images.unsplash.com/photo-1510832303954-cc30cbf2b8db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80", 
        title: 'Plane Tickets',
        price: '$500',
        description: "Plane tickets to ACK"

    },
    {
        id: 2,
        img:"url", 
        title: 'title',
        price: 2,
        description: "description"

    },
    {
        id: 3,
        img:"url", 
        title: 'title',
        price: 2,
        description: "description"

    }
]

module.exports = {
    read: (req,res) => {
        res.status(200).send(list)
    },

    add: (req,res) => {
        let {title, price, img, description} = req.body

        let id = 0

        if(list.length === 0){
            id = 1
        } else {
            id = list[list.length -1].id + 1
        }
        let nextItem = {
            title: title,
            price: price,
            img: img,
            description: description,
            id: id
        }
        list.push(nextItem)
        res.status(200).send(list)
    },

    edit: (req,res) => {
        let {id} = req.params
        let {price} = req.body
        console.log(price)
        for(let i =0; i < list.length; i++){
            if(list[i].id === +id){
                list[i].price = price
            }
        }
        console.log(list)
        res.status(200).send(list)
        
    },

    delete: (req,res) => {
        let {id} = req.params
        let deleteMe = list.findIndex(element => element.id === +id)
        list.splice(deleteMe, 1)
        res.status(200).send(list)
    }

}