import { Component } from "react";

class Jalak extends Component{

    constructor(){
        super();
        this.state={
            // data:"Ajay"
            data:0
        }
    }
    Apple(){
        return(
            // this.setState({data:'Rajput'})
            this.setState({data:this.state.data+1})
        )
    }
    render(){
        return(
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.Apple()}>Magic</button>
            </div>
        )
    }
}
export default Jalak