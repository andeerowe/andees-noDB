// const list = require("./dataList.js")
let list = [
    {
        id: 0,
        img:"url", 
        title: 'title',
        price: 2,
        description: "description"

    },
    {
        id: 1,
        img:"url", 
        title: 'title',
        price: 2,
        description: "description"

    },
    {
        id: 2,
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
        let {text} = req.body
        let sample = {
            text:text
        }
        list.push(sample)
        res.status(200).send(list)
    },

    edit: (req,res) => {
        let {id} = req.params
        let {newPrice} = req.body
        console.log(newPrice)
        for(let i =0; i < list.length; i++){
            if(list[i].id === +id){
                list[i].price = newPrice
            }
        }
        
        res.status(200).send(list)
        
    },

    delete: (req,res) => {
        let {id} = req.params
        let deleteMe = list.findIndex(element => element.id === +id)
        list.splice(deleteMe, 1)
        res.status(200).send(list)
    }

}