const App = ({ recipes }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 align="center" style={{ color: "black", margin: "30px" }}>~: Recipes :~</h1>

          <table style={{
            borderCollapse: "collapse",
            width: "100%",
            margin: "auto"
          }}>
            <thead>
              <tr>
                <th style={thStyle}>Id</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Image</th>
                <th style={thStyle}>Ingredients</th>
                <th style={thStyle}>Mealtype</th>
                <th style={thStyle}>Instruction</th>
                <th style={thStyle}>Prepare Time</th>
                <th style={thStyle}>Ratings</th>
                <th style={thStyle}>Tags</th>
                <th style={thStyle}>UserId</th>
              </tr>
            </thead>
            <tbody>
              {
                recipes.map((recipe, i) => {
                  return (
                    <tr key={i}>
                      <td style={tdStyle}>{recipe.id}</td>
                      <td style={tdStyle}>{recipe.name}</td>
                      <td style={tdStyle}>
                        <img src={recipe.image} style={{ width: "100px", height: "100px" }} alt="" />
                      </td>
                      <td style={tdStyle}>
                        <ul style={{ padding: 0 }}>
                          {
                            recipe.ingredients.map((ingredient, i) => (
                              <li style={{ listStyleType: 'none' }} key={i}>{ingredient}</li>
                            ))
                          }
                        </ul>
                      </td>
                      <td style={tdStyle}>{recipe.mealType}</td>
                      <td style={tdStyle}>
                        <ul style={{ padding: 0 }}>
                          {
                            recipe.instructions.map((instruction, i) => (
                              <li style={{ listStyleType: 'none' }} key={i}>{instruction}</li>
                            ))
                          }
                        </ul>
                      </td>
                      <td style={tdStyle}>{recipe.prepTimeMinutes}</td>
                      <td style={tdStyle}>{recipe.rating}</td>
                      <td style={tdStyle}>{recipe.tags.join(", ")}</td>
                      <td style={tdStyle}>{recipe.userId}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

const thStyle = {
  border: "1px solid black",
  padding: "10px",
  backgroundColor: "#f2f2f2",
  textAlign: "center"
};

const tdStyle = {
  border: "1px solid black",
  padding: "10px",
  textAlign: "center",
  verticalAlign: "top"
};

export default App;
