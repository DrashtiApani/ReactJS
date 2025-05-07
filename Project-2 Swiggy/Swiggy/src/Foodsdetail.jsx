import { useState } from "react";

const Foodsdetail = ({ foodsData }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const foodCategories = [
    "All",
    "pizza",
    "burger",
    "chinese",
    "south_indian",
    "mexican",
    "shake",
    "cake",
    "pavbhaji",
    "salad"
  ];

  // Filter foods based on selected category
  const filteredFoods = selectedCategory === "All" 
    ? foodsData 
    : foodsData.filter(food => food.category === selectedCategory);

  return (
    <div style={{ padding: '20px' }} align="center">
      <h1 style={{ margin: '50px' , color: '#FF5200', fontWeight: 'bold' }}>Foods</h1>
      
      {/* Category Buttons */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '10px',
        marginBottom: '30px'
      }}>
        {foodCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              padding: '10px',
              backgroundColor: selectedCategory === category ? '#E04900' : '#FF5200',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '14px',
              width: '80%',
              height: '50px',
              margin: '10px',
              transition: 'background-color 0.3s',
              ':hover': {
                backgroundColor: '#E04900'
              }
            }}
          >
            {category.split('_').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ')}
          </button>
        ))}
      </div>
      
      {/* Food Items */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        {filteredFoods.map((food) => (
          <div key={food.id} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <img 
              src={food.img} 
              alt={food.title} 
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'contain',
                borderRadius: '5px'
              }} 
            />
            <h3 style={{ margin: '10px 0 5px' }}>{food.title}</h3>
            <p style={{ margin: '5px 0', color: '#555' }}>{food.rate} • {food.minute}</p>
            <p style={{ margin: '5px 0', color: '#777' }}>{food.content}</p>
            <p style={{ margin: '5px 0', color: '#666' }}>{food.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foodsdetail;