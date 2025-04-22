import React from 'react';

const App = ({ recipes }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 align="center" style={{ color: "#2c3e50", margin: "30px 0" }}>~: Recipes :~</h1>

          <table className="recipe-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Image</th>
                <th>Ingredients</th>
                <th>Mealtype</th>
                <th>Instruction</th>
                <th>Prep Time</th>
                <th>Ratings</th>
                <th>Tags</th>
                <th>UserId</th>
              </tr>
            </thead>
            <tbody>
              {
                recipes.map((recipe, i) => (
                  <tr key={i} className={i % 2 === 0 ? "even" : "odd"}>
                    <td>{recipe.id}</td>
                    <td>{recipe.name}</td>
                    <td>
                      <img src={recipe.image} alt="Recipe" className="recipe-img" />
                    </td>
                    <td>
                      <ul className="list">
                        {
                          recipe.ingredients.map((ingredient, idx) => (
                            <li key={idx}>• {ingredient}</li>
                          ))
                        }
                      </ul>
                    </td>
                    <td>{recipe.mealType}</td>
                    <td>
                      <ul className="list">
                        {
                          recipe.instructions.map((instruction, idx) => (
                            <li key={idx}>{idx + 1}. {instruction}</li>
                          ))
                        }
                      </ul>
                    </td>
                    <td>{recipe.prepTimeMinutes} min</td>
                    <td>{recipe.rating} ⭐</td>
                    <td>{recipe.tags.join(", ")}</td>
                    <td>{recipe.userId}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>

      {/* ✅ CSS STYLING */}
      <style>{`
        .recipe-table {
          width: 100%;
          border-collapse: collapse;
          font-family: 'Segoe UI', sans-serif;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          border-radius: 10px;
          overflow: hidden;
        }

        .recipe-table th {
          background-color: #34495e;
          color: #ecf0f1;
          padding: 14px;
          font-size: 14px;
          text-align: center;
          border-bottom: 2px solid #2c3e50;
        }

        .recipe-table td {
          padding: 12px;
          border: 1px solid #e0e0e0;
          text-align: center;
          vertical-align: top;
          font-size: 13px;
          color: #2c3e50;
        }

        .recipe-table .even {
          background-color: #f9f9f9;
        }

        .recipe-table .odd {
          background-color: #ffffff;
        }

        .recipe-table tr:hover {
          background-color: #f1f1f1;
        }

        .recipe-img {
          width: 100px;
          height: 100px;
          border-radius: 10px;
          object-fit: cover;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }

        .list {
          padding: 0;
          margin: 0;
          list-style: none;
          text-align: left;
        }

        .list li {
          padding: 2px 0;
        }

        @media (max-width: 768px) {
          .recipe-table th, .recipe-table td {
            font-size: 12px;
            padding: 8px;
          }

          .recipe-img {
            width: 80px;
            height: 80px;
          }
        }
      `}</style>
    </>
  );
};

export default App;
