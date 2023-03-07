import React from "react"
import Header from "./header"
import List from "./List"
import { db } from "./firebase"

export default function App() {
    console.log(db)

    return (
        <div className='App'>
            <Header />
            <List />
        </div>
    )
}
