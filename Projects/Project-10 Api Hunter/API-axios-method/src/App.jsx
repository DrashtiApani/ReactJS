import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GET_RECIPES from "./Redux/Action/AxiosAction.js";

function App() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.api.recipes);

  useEffect(() => {
    dispatch(GET_RECIPES());
  }, [dispatch]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🍽️ Top Recipes</h1>

      <div style={styles.grid}>
        {recipes.map((recipe) => (
          <div key={recipe.id} style={styles.card}>
            <img src={recipe.image} alt={recipe.name} style={styles.image} />
            <h2 style={styles.title}>{recipe.name}</h2>
            <p><strong>🍳 Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
            <p><strong>⏱ Cook Time:</strong> {recipe.cookTimeMinutes} min</p>
            <p><strong>🌍 Cuisine:</strong> {recipe.cuisine}</p>
            <p><strong>⭐ Rating:</strong> {recipe.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh"
  },
  heading: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "30px",
    color: "#333",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "15px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "1.25rem",
    marginBottom: "10px",
    color: "#1e293b",
  },
};

export default App;
