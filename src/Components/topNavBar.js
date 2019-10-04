import React, {Component} from 'react'

class TopNavBar extends Component {
    constructor(){
        super()
     this.state = {
         something: 'something'
     }
}
    render (){
        return (
            <div className="img-container"><img id="profile-pic"alt="profile pic" src="https://images.wallpaperscraft.com/image/golden_retriever_dog_sits_blur_120469_3415x3415.jpg"></img> 
            <div className="welcome">Welcome back, user!</div>
            </div>
        )
    }


}

export default TopNavBar