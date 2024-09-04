const HousesContainer = ({ setHouse, house }) => {
    function handleClick(event) {
        event.preventDefault()
        setHouse(event.target.id)
    }

    return (
        <>
            <button id="Gryffindor" onClick={handleClick}>Gryffindor</button>
            <button id="Slytherin" onClick={handleClick}>Slytherin</button>
            <button id="Hufflepuff" onClick={handleClick}>Hufflepuff</button>
            <button id="Ravenclaw" onClick={handleClick}>Ravenclaw</button>
            <h2>Casa seleccionada: {house}</h2>
        </>
    )
}

export default HousesContainer