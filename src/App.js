import "./App.css";
import { getAuth } from "firebase/auth";
import app from "./firebase.init";

const auth = getAuth(app);

function App() {
  const handleSignIn = () => {
    console.log("working with google auth");
  };
  return (
    <div className="App">
      <h1>This is app js with authentication</h1>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
}

export default App;
