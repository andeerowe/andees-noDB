import React, {Component} from 'react';
import './App.css';
import axios from "axios"
import TopNavBar from './Components/topNavBar'
import Wishlist from './Components/wishlist'

class App extends Component {
  constructor (){
    super ()

    this.state = {
      list: [],
      listTitle: 'My List',
      nameInput:'',
      priceInput: '',
      imgInput: '',
      descInput: ''
      
    }
  }

  componentDidMount = () => {
    axios.get("/api/list")
    .then(res => {
      this.setState({
        list:res.data
      })
    })
  }

  addItem = () => {
    const body = {
      title: this.state.nameInput,
      price: this.state.priceInput,
      img: this.state.imgInput,
      description: this.state.descInput
    }
    axios.post('/api/list', body)
    .then(res => this.setState({
      list: res.data,
      nameInput: '',
      priceInput: '',
      imgInput: '',
      descInput: ''
    })
    
    )
    .catch(err => {console.log('lol no', err)})
  }
  editPrice = (id, price) => {
    console.log(price)
    axios.put(`/api/list/${id}`, {price})
    .then(res => {
      this.setState({
        list: res.data
      })
    })
    .catch(err => {console.log('nope.', err)})
  }
  deleteItem = (id) => {
    console.log(id)
    axios.delete(`/api/list/${id}`)
    .then(res => {
      this.setState({
        list: res.data
      })
    })
    .catch(err => {
      console.log('lol no', err)
    })
  }


  render (){
    console.log(this.state.priceInput)
    return(
      <div>
        <header className="top-nav-bar">
          <TopNavBar/>
        </header>
        <div className="side-nav-bar">
        <div className="input-container">
                <div className="side-bar-title">
                    Add New Item Here!
                </div>
                <div>
                    <input 
                      placeholder="Name of Item" 
                      value={this.state.nameInput}  
                      onChange={(e) => this.setState({nameInput: e.target.value})}/>
                </div>
                <div>
                    <input 
                    placeholder="Price"
                    value={this.state.priceInput}
                    onChange={(e)=> this.setState({priceInput: e.target.value})}
                    />
                </div>
                <div>
                   <input 
                   placeholder="Image URL"
                   value={this.state.imgInput}
                   onChange={(e) => this.setState({imgInput: e.target.value})}
                   />
                </div>
                <div>
                    <input 
                    placeholder="Item Description..."
                    className="description" 
                    value={this.state.descInput}
                    onChange={(e) => this.setState({descInput: e.target.value})}
                    />
                </div>
                <button onClick={this.addItem}>Add</button>

            </div>
        </div>
        <div className="list-display-container">
          <Wishlist 
            list={this.state.list}
            delete={this.deleteItem}
            edit={this.editPrice}
            />
        </div>
      </div>
    )
  }
}

export default App;
