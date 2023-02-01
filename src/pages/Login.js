import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/movies");
  };

  return (
    <div className="main-container">
      <div className="container">
        <div className="form-control">
          <h3>Sign in to your account</h3>
        </div>
        <div className="form-change">
          <form>
            <div>
              <input type="email" placeholder="Email / Phone number" />
            </div>
            <div>
              <input type="password" placeholder="Password" />
            </div>
            <div>
              <button onClick={handleLogin}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
