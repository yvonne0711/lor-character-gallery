const Character = (props) => {
    return (
        <div>
            <aside></aside>
            <h2>{props.name}</h2>
            <img src={props.imgUrl} />
            <ol>
                <li>Date of Birth: {props.birth}</li>
                <li>Date of Death: {props.death}</li>
                <li>Race: {props.race}</li>
                <li>Realm: {props.realm}</li>
                <li>Spouse: {props.spouse}</li>
            </ol>
        </div>);
}

export default Character;