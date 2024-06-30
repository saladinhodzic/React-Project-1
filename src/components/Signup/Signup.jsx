import "./Signup.css";
export function SignUp() {
  return (
    <div className="sign-up">
      <input type="text" placeholder="Enter your Name" />
      <input type="email" placeholder="Enter your email" />
      <input type="password" placeholder="Enter your password" />
      <button className="sign-up-button">Sign Up</button>
    </div>
  );
}
