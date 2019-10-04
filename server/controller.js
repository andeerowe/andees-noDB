// const list = require("./dataList.js")
let list = [
    {
        id: 1,
        img:"https://images.unsplash.com/photo-1510832303954-cc30cbf2b8db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80", 
        title: 'Plane Tickets',
        price: '$500',
        description: "SLC -> ACK"

    },
    {
        id: 2,
        img:"https://cdn.shopify.com/s/files/1/1334/7009/products/ChloeBracelet_2000x.jpg?v=1565823112", 
        title: 'Miranda Frye Bracelet',
        price: '$72.00',
        description: "Chloe Chain Link Bracelet"

    },
    {
        id: 3,
        img:"http://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Stories%20Images/2018/11/door%20dash/2web.jpg", 
        title: 'Chick Fil A',
        price: "$8.50",
        description: "Allllll the Waffle Fries"

    },

    {
        id:4,
        img:"https://images.unsplash.com/photo-1534450539339-6d1c81ad18e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
        title: "Disneyland Trip",
        price: "$1,000.00",
        description:"3 Day Trip"
    },
    {
        id:5,
        img:"https://images.unsplash.com/photo-1545534191-9de5b0875495?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
        title: "Fall Decorations",
        price: "$200.00",
        description: "Pumpkins, Candles, Etc"
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