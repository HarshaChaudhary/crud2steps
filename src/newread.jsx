import React, { useState } from 'react'

const Newread = () => {
    let [data, newData] = useState([])


    async function fetchdata() {
        let res = await fetch("http://localhost:5000/nextone");
        let convert = await res.json();
        newData(convert)
    }

    React.useEffect(() => {
        fetchdata()
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>category</th>
                    <th>discount</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((e,i) => {
                        return (
                            <tr key={i}>
                                <td>{e.product}</td>
                                <td>{e.cat}</td>
                                <td>{e.dis}</td>
                            </tr>
                        )
                    })}
            </tbody>
        </table>
    )
}

export default Newread
