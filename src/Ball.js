import React,{useState} from "react"

function Ball(){
    
    // var[data,setdata]=useState("Ajay Rajput")
    var[data,setdata]=useState(0)

    function Apple(){
        return(
            // setdata('Papa Bolte')
            setdata(data+1)
        )
    }

    return(
        <div>
            <h1>{data}</h1>
            <button onClick={Apple}>Magic</button>
        </div>
    )
}
export default Ball