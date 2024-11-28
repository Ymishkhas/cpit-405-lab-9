import { useState } from "react";
import RecipesResults from "./RecipesResults.jsx";
import './Search.css';

const Search = () => {

    const [searchInput, setSearchInput] = useState(null);
    const [searchResults, setSearchResults] = useState(null);

    const handleClick = async () => {
        const reponse = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=5e1ff60550b2470e8ed19bc1702c4ec0&query=${searchInput}`);
        const reponseJson = await reponse.json();
        setSearchResults(reponseJson.results);
    }


    return (
        <>
            <div className="search-wrapper">
                <input type='text' placeholder='Search for ingredients...' onChange={(e) => setSearchInput(e.target.value)} />
                <button onClick={handleClick}>Search</button>
            </div>
            {searchResults && <RecipesResults recipes={searchResults}/>}
        </>
        

    )
}

export default Search; 