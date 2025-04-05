import { useEffect, useState } from 'react';

import './App.css'

function App() {

  let [recipes, setRecipes] = useState([])

  const getRecipe = () => {

    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        setRecipes(data.recipes)

      })
  }


  useEffect(() => {
    getRecipe()
  }, [])





  return (
    <>
      <h1>Recips</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Ingredians</th>
            <th>Instruction</th>
            <th>PrepareTime</th>
          </tr>
        </thead>
        <tbody>
          {
            recipes.map((recipe, i) => {
              return (
                <tr key={i}>
                  <td>{recipe.id}</td>
                  <td>{recipe.name}</td>
                  <td>
                    <ul>
                      {
                        recipe.ingredients.map((ingredient, i) => {
                          return <li style={{ listStyleType: 'none' }} key={i}>{ingredient}
                          </li>
                        })
                      }
                    </ul>
                  </td>
                  <td>{recipe.instructions.join(",")}</td>
                  <td>{recipe.prepTimeMinutes}</td>
                </tr>
              )
            })
          }

        </tbody>

      </table>
    </>
  )
}

export default App
