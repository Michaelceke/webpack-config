import "../styles/index.scss";
import Recipes from "./Recipes"

const App=()=>{
    return(
        <>
          <section  className={"hero"}></section>
            <main>
                <section>
                    <h1> Oh HAi, React</h1>
                </section>
            </main>
            <Recipes/>
        </>
    )
};

export default App