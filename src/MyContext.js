import React, {useState,createContext} from 'react'

export const MyContext = createContext()


export const MYContextProvider = (props)=> {


    const[person,setPerson] = useState([
        {
            name: "ashish",
            id:1234
        },
        {
            name: "amit",
            id:1221
        },
        {
            name: "sid",
            id:18858
        }
    ])

    return (

        <MyContext.Provider value = {[person,setPerson]}>
            {props.children}
        </MyContext.Provider>
    )
}