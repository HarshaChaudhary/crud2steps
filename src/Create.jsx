
import React, { useState } from 'react'




function Create() {
    const [user, setUser] = useState({
        name: "",
    });

    function UserData(e) {
        setUser(
            {   ...user,
                [e.target.name]: e.target.value
            }
        )
    }

    async function Submit() {
        let res = await fetch("http://localhost:5000/newdata", {
            method: "POST",
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        
        console.log(res);
    }


    return (
        <div>
            <label htmlfor="name">Name</label>
            <input type='text' id='name' name="name" onChange={UserData} />
            <button onClick={Submit}>add</button>
        </div>
    )
}

export default Create
