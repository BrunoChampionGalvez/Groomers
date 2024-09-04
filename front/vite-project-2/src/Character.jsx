const Character = ({character}) => {
    return (
        <>
            <p>Name: {character.name}</p>
            <p>House: {character.house}</p>
            {character.wizard ? <p>Wizard: True</p> : <p>Wizard: False</p>}
            <p>Actor: {character.actor}</p>
            <br />
        </>
    )
}

export default Character