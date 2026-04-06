import { useState } from "react";

function LoginPage() {
  // estado del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // envio del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    alert("Login exitoso");
  };

  return (
    <main className="form-container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h1>Login</h1>

        <label>Email</label>
        <input
          type="email"
          placeholder="Ingresa tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </main>
  );
}

export default LoginPage;