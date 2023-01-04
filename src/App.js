import "./App.css";
import app from "./firebase.init";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const handleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignInGithub = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
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
      {user.uid ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <div>
          <button onClick={handleSignIn}>Sign in with Google</button>
          <button onClick={handleSignInGithub}>Sign In with Github</button>
        </div>
      )}
      <h2>Name: {user.displayName}</h2>
      <p>Email: {user.email}</p>
      <img referrerPolicy="no-referrer" src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
