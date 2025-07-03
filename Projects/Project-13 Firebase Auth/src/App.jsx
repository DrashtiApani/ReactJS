import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../firebase";


function App() {

  const authentication = async () => {
    try {
      let result = await signInWithPopup(auth, googleAuthProvider);


    } catch (error) {
      console.log(error);
      return
    }
  }

  return (
  <div align="center">
    <h1>Authantication</h1>
      <button onClick={() => authentication()}>Log In</button>
  </div>
  )
}

export default App
