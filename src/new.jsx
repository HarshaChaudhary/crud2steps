import React, { useState } from 'react'

export default function New() {
    let [code,setCode] = useState({
      product: '',
      cat: '',
      dis:''
    })


    function hello(e){
      setCode({
        ...code,
        [e.target.name] : (e.target.value)
      })
     }

async function Flop(){
let ans=await fetch("http://localhost:5000/nextone",{
        header: {
           " Content-Type": "application/json"
        },
        method: 'POST',
        body: JSON.stringify(code)

    })
    console.log(ans);
    }
 
  return (
    <div>
        <label>product</label>
      <input type="text" name='product' onChange={hello}/>
    
      <label>category</label>
      <input type="text" name='cat' onChange={hello}/>
      <label>discount</label>
      <input  type="number" name='dis' onChange={hello}/>
      <button onClick={Flop}>add</button>
    </div>
  )
}
