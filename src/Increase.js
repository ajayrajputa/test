import React,{Component} from "react";



class Hari extends Component{
    
    constructor(){
        super();
        this.state={
            data:0
        }
    }
     apple() {
        return(
            this.setState({data:this.state.data + 1})
        );
    }

    render(){
        return(
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.apple()}>Magic</button>
            </div>
        )
    }
}
export default Hari