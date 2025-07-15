import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7Bh-maeoHlZtNF9DaqR2UvxRBp2nP-k0",
  authDomain: "vanlife-6c51a.firebaseapp.com",
  projectId: "vanlife-6c51a",
  storageBucket: "vanlife-6c51a.appspot.com",
  messagingSenderId: "662907236865",
  appId: "1:662907236865:web:30cb7103809f0f7793c600",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function App() {
  async function handleLogin() {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, "", "");
      console.log("Login success:", userCredential.user);
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  return (
    <div>
      <h1>Firebase Login Test</h1>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
}
