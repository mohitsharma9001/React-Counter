import React from "react"

function Counter(){
  const [count,setCount] = React.useState(0);
const Increase = ()=>{
  setCount(count+1)
}
const Decrease = ()=>{
  setCount((preValue)=>{
    if(preValue===0){
      return 0
    }
    return setCount(count-1)
  })
  
}

const Double = ()=>{
  setCount(count*2)
}
return (<>
<h1 style={ count%2==0 ? {color:"green",fontSize:"35px"} : {color:"red",fontSize:"35px"} }>Counter : {count}</h1>
<button onClick = {Increase}>Increase</button>
<button onClick = {Decrease}>Decrease</button>
<button onClick = {Double}>Double</button></>)
}
export default Counter