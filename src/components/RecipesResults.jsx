import { Link } from "react-router-dom";
import './RecipesResults.css';

const RecipesResults = ({ recipes }) => {
    return (
        <>
            {recipes && (
            <div className="recipes-wrapper">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="recipe-card">
                        <Link to={`/recipe-details/${recipe.id}`}>
                            <img src={recipe.image} alt={recipe.title} />
                            <p>{recipe.title}</p>
                        </Link>
                    </div>
                ))}
            </div>
            )}
        </>
    )
}

export default RecipesResults;