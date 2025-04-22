import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { useEffect } from "react";
import Product from "./product/Product";
import Carts from "./cart/Carts";
import Recipes from "./recipes/Recipes";
import Users from "./users/Users";
import Post from "./post/Post";
import Comments from "./comments/Comments";
import Todos from "./todos/Todos";
import Quotes from "./quotes/Quotes";



function App() {
 

  // Product API calling

  let [product, setProduct] = useState([]);
  const getProduct = () => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data) => { 
        setProduct(data.products)
      })
  }

  useEffect(() => {
    getProduct();
  }, [])


  // Cart API calling

  let [cart,setCart] = useState([]);

  const getCart = () =>{
    fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then((data) => {
      setCart(data.carts)
    })
  }

  useEffect(() => {
    getCart();
  }, [])



  // recipes API calling
  let [recipes, setRecipes] = useState([])

  const getRecipe = () => {

    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then((data) => {
        setRecipes(data.recipes)

      })
  }
  useEffect(() => {
    getRecipe()
  }, [])

  // post API calling

  let [post, setPost] = useState([])

  const getPost = () => {

    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then((data) => {        
        setPost(data.posts)

      })
  }

  useEffect(() => {
    getPost()
  }, [])


  // comments API calling

  let [comments, setComments] = useState([])

  const getComments = () => {

    fetch('https://dummyjson.com/comments')
      .then(res => res.json())
      .then((data) => {      
        setComments(data.comments)

      })
  }

  useEffect(() => {
    getComments()
  }, [])

  // TODOs API call

  let [todos, setTodos] = useState([])

  const getTodos = () => {

    fetch('https://dummyjson.com/todos')
      .then(res => res.json())
      .then((data) => {
        setTodos(data.todos)

      })
  }

  useEffect(() => {
    getTodos()
  }, [])

  // Quotes API

  let [quotes, setQuotes] = useState([])

  const getQuotes = () => {

    fetch('https://dummyjson.com/quotes')
      .then(res => res.json())
      .then((data) => {
        setQuotes(data.quotes)

      })
  }

  useEffect(() => {
    getQuotes()
  }, [])

  // users
 
  let [users, setUsers] = useState([])

  const getUser = () => {

    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then((data) => {
        
        setUsers(data.users)

      })
  }

  useEffect(() => {
    getUser()
  }, [])



  return (
    <>
      <Product productData={product} />
      <Carts  cartsData={cart}/>
      <Recipes recipes={recipes} />
      <Users usersData={users} />
      <Post postData={post} />
      <Comments commentsData={comments} />
      <Todos todosData={todos} />
      <Quotes quotesData={quotes} />
      {/* <Mock mockData={mock} /> */}
    

     
    </>
  )
}

export default App
