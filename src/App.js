import "./App.css";
import app from "./firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});

  const provider = new GoogleAuthProvider();
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        setUser({});
      })
      .catch((error) => {
        setUser({});
      });
  };

  return (
    <div className="App">
      <h1>This is app js with authentication</h1>
      <button onClick={handleSignIn}>Sign in with Google</button>
      <button onClick={handleSignOut}>Sign Out</button>
      <h2>Name: {user.displayName}</h2>
      <p>Email: {user.email}</p>
      <img referrerPolicy="no-referrer" src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
