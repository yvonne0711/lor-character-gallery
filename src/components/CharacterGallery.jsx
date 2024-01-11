import chars from "../data/characterData.json";
import Character from "./Character";

const CharacterGallery = () => {
    return (
        <>
        {chars.map(c =>  <Character key={c._id} {...c} />)}
        </>
    );
}

export default CharacterGallery;