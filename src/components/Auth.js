import { useRef } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import classes from "./Auth.module.css";
const Auth = () => {
  const dispatch = useDispatch();
  const email = useRef();
  const password = useRef();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const loginHandler = (event) => {
    event.preventDefault();
    if (
      email.current.value.trim() !== "" &&
      password.current.value.trim() !== ""
    ) {
      dispatch(authActions.login());
    }
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={email} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={password} />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
