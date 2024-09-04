import { useState } from "react"
import Characters from "./Characters"
import HousesContainer from "./HousesContainer"

const View = () => {
    const [house, setHouse] = useState("Gryffindor")

    return (
        <>
            <HousesContainer setHouse={setHouse} house={house} />
            <Characters setHouse={setHouse} house={house}/>
        </>
    )
}

export default View