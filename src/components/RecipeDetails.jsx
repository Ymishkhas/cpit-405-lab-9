import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './RecipeDetails.css';

const RecipeDetails = () => {

    const params = useParams();
    const id = params.id;
    const [recipeDetails, setRecipeDetails] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=5e1ff60550b2470e8ed19bc1702c4ec0`);
            const responseJson = await response.json();
            setRecipeDetails(responseJson);
        }
        fetchRecipe();
    }, [id])

    return (
        <>
            {recipeDetails && (
                <div className="recipe-details">
                    <div className="header">
                        <div>
                            <img src={recipeDetails.image} />
                        </div>
                        <div>
                            <h2>{recipeDetails.title}</h2>
                            <h3>Ready in: {recipeDetails.readyInMinutes} minutes</h3>
                            <h3>Summary</h3>
                            <p dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}></p>
                        </div>
                    </div>
                    <div className="card">
                        <h3>Ingredients</h3>
                        <ul>
                            {recipeDetails.extendedIngredients.map((ingredient) => (
                                <li key={ingredient.id}>{ingredient.original}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Instructions</h3>
                        {recipeDetails.analyzedInstructions[0].steps.map((step) => (
                            <div key={step.number} className="step">
                                <h4>Step {step.number}</h4>
                                <p>{step.step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </>
    )
}

export default RecipeDetails;