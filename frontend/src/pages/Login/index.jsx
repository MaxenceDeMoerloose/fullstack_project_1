import { useState, useEffect } from "react";

function Login() {

  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({password})
    })
    const data = await res.json();
    console.log(data);
    if (res.ok) {
      localStorage.setItem("token", data.token); // on stocke le token
      alert("Connecté !");
      // rediriger vers la page principale si besoin
    } else {
      alert(data.message); // mot de passe incorrect
    }
  }

  return (
      <div>
          <p>Login here</p>
          <form onSubmit={handleSubmit}>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">send</button>
          </form>
      </div>
  );
}

export default Login;