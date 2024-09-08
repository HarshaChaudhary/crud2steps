import React from 'react'
import Read from './Read'

const App = () => {
    const [userData, setUserData] = React.useState({
        name: '',
        phone: '',
        email:'',
        password:'',
    })


    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name] : e.target.value
        })
        console.log(userData);
    }

    async function handleSubmit() {
        let resposne = await fetch('http://localhost:5000/user', {
            method: 'POST',
            header : {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(userData)
        })
    }

    return (
        <>   
        <form className='container row'>
            <div className="mb-3 col-6">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp"  onChange={handleChange} />
            </div>

            <div className="mb-3 col-6">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="text" className="form-control" id="phone" name='phone' aria-describedby="emailHelp" value={userData.phone} onChange={handleChange}  />
            </div>

            <div className="mb-3 col-6">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={userData.email} onChange={handleChange}  />
            </div>

            <div className="mb-3 col-6">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" value={userData.password} name='password' onChange={handleChange}  />
            </div>
            
            <button type="submit" className="btn btn-primary col-1 mx-3" onClick={handleSubmit}>Submit</button>
        </form>
        <Read/>
        </>
    )
}

export default App
