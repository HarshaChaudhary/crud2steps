import React, {useState} from 'react'

const Read = () => {
    let [data, setData] = useState([])

    async function getData(){
        let response = await fetch('http://localhost:5000/user');
        let data = await response.json()
        setData(data)
    }


    React.useEffect(()=>{
        getData()
    })
    return (
        <table className="table my-5">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((element)=>{
                    return (
                    <tr key={element.id}>
                        <td>{element.name}</td> 
                        <td>{element.phone}</td>
                        <td>{element.email}</td>
                        <td>{element.password}</td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Read
