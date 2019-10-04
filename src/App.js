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
      descInput: '',
      // id: 3
      
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
      description: this.state.descInput,
      // id: this.state.id
    }
    axios.post('/api/list', body)
    .then(res => this.setState({
      list: res.data,
      nameInput: '',
      priceInput: '',
      imgInput: '',
      descInput: '',
    })
    
    )
    .catch(err => {console.log('lol no', err)})
  }
  editPrice = () => {

  }
  deleteItem = () => {

  }

  // itemNameHandler = (e) => {
  //   console.log(this.state.nameInput)
  // }


  render (){
    return(
      <div>
        <header className="top-nav-bar">
          <TopNavBar/>
        </header>
        <div className="side-nav-bar">
        <div className="input-container">
                <div>
                    Add New Item:
                </div>
                <div>
                    1<input 
                      placeholder="Name of Item" 
                      value={this.state.nameInput}  
                      onChange={(e) => this.setState({nameInput: e.target.value})}/>
                </div>
                <div>
                    2<input 
                    placeholder="Price"
                    value={this.state.priceInput}
                    onChange={(e)=> this.setState({priceInput: e.target.value})}
                    />
                </div>
                <div>
                   3<input 
                   placeholder="Image URL"
                   value={this.state.imgInput}
                   onChange={(e) => this.setState({imgInput: e.target.value})}
                   />
                </div>
                <div>
                    4<input 
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
          <Wishlist list={this.state.list}/>
        </div>
      </div>
    )
  }
}

export default App;
