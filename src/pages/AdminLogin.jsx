import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://loomis-backend-xxmu405mo-loomis3.vercel.app/api/admin/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Login failed."
        );
      }

      localStorage.setItem(
        "adminToken",
        data.token
      );

      localStorage.setItem(
        "admin",
        JSON.stringify(data.admin)
      );

      navigate("/admin");

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login">

      <div className="admin-login-left">

        <div className="admin-login-brand">
          LOGISTICS
        </div>

        <div className="admin-login-intro">

          <span>
            ADMINISTRATION
          </span>

          <h1>
            Welcome
            <br />
            back.
          </h1>

          <p>
            Sign in to manage shipments and
            update customer tracking information.
          </p>

        </div>

      </div>

      <div className="admin-login-right">

        <form
          className="admin-login-form"
          onSubmit={handleSubmit}
        >

          <div className="login-heading">

            <span>
              ADMIN LOGIN
            </span>

            <h2>
              Sign in
            </h2>

          </div>

          <div className="login-field">

            <label>
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="admin@logistics.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          <div className="login-field">

            <label>
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />

          </div>

          {error && (
            <div className="login-error">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading
              ? "Signing in..."
              : "Sign in"}

            <span>→</span>
          </button>

        </form>

      </div>

    </div>
  );
}

export default AdminLogin;