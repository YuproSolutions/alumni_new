import "./AuthModal.css";

export default function AuthModal({ mode, onClose, onModeChange }) {

  if (!mode) return null;

  const isRegister = mode === "register";

  return (

    <div
      className="modal-backdrop"
      onMouseDown={onClose}
    >

      <section
        className="auth-modal"
        onMouseDown={(e) => e.stopPropagation()}
      >

        <button
          className="modal-close"
          onClick={onClose}
        >
          ×
        </button>

        {/* Header */}

        <div className="modal-header">

          <span className="eyebrow">

            {isRegister
              ? "CREATE ACCOUNT"
              : "WELCOME BACK"}

          </span>

          <h2>

            {isRegister
              ? "Register for Alumni Access"
              : "Login to Your Network"}

          </h2>

          <p>

            {isRegister
              ? "Create your professional alumni profile and connect with your institute community."
              : "Sign in to continue exploring alumni resources, events and opportunities."}

          </p>

        </div>

        {/* Form */}

        <form className="auth-form">

          {isRegister && (

            <label>

              Full Name

              <input
                type="text"
                placeholder="Enter your full name"
              />

            </label>

          )}

          <label>

            Email Address

            <input
              type="email"
              placeholder="name@example.com"
            />

          </label>

          <label>

            Password

            <input
              type="password"
              placeholder="Enter password"
            />

          </label>

          {isRegister && (

            <label>

              Graduation Year

              <input
                type="text"
                placeholder="e.g. 2024"
              />

            </label>

          )}

          <button
            className="submit-btn"
            type="button"
          >

            {isRegister
              ? "Create Account"
              : "Login"}

          </button>

        </form>

        {/* Footer */}

        <div className="modal-footer">

          <p>

            {isRegister
              ? "Already a member?"
              : "New to the alumni network?"}

          </p>

          <button
            className="mode-switch"
            onClick={() =>
              onModeChange(
                isRegister ? "login" : "register"
              )
            }
          >

            {isRegister
              ? "Login"
              : "Register"}

          </button>

        </div>

      </section>

    </div>

  );

}