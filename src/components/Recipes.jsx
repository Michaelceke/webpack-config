import {useState} from "react"
const elvenShieldRecipe={
    leatherStripes:2,
    ironIngot:1,
    refinedMoonstone:5
}

const elvenGauntletRecipe={
    ...elvenShieldRecipe,
    leather:1,
    refinedMoonstone:4
}

const Recipes=()=>{
    const [recipe, setRecipe]=useState({});
    console.log(recipe);
    return (
        <div>
              <h3>Current Recipe</h3>
            <button onClick={()=>setRecipe(elvenShieldRecipe)}> Elven shield recipe</button>
            <button onClick={()=>setRecipe(elvenGauntletRecipe)}> Elven Gauntlet recipe</button>
                <ul>
                {Object.keys(recipe).map((material)=>(
                    <li key={material}>{material}:{recipe[material]}</li>))}
                </ul>

        </div>
    )
};

export default Recipes