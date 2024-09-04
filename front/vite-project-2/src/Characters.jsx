import { useEffect, useState } from "react"
import Character from "./Character"

const Characters = ({house, setHouse}) => {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        fetch("https://hp-api.onrender.com/api/characters").then(res => res.json()).then(data => setCharacters(data))
    }, [])

    function handleRestore(event) {
        setHouse("")
    }

    return (
        <>
            <button onClick={handleRestore}>Restaurar</button>
            {characters.map((character, i) => (
                (house === character.house || house === "") &&
                <Character key={i} character={character} />
            ))}
        </>
    )
}

export default Characters