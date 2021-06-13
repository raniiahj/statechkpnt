import React, {Component} from 'react'


class Welcomeprofile extends Component  {


    constructor() {
        super()
        this.state={ hidden:false
            
        }
    }


Hide=()=> {this.setState({hidden: this.state.hidden})}

    render (){
        return (this.state.hidden && <div>
            <h1> {this.props.fullName} </h1>
            <h2> {this.props.bio} </h2>
            <h3> {this.props.profession} </h3>
            <button onClick={this.Hide}></button>
            
            </div>
        )
    }
}


export default Welcomeprofile