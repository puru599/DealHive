import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./SignUp.module.css";

const SignUp = () => {
  const emailRef = useRef("");
  const pswdRef = useRef("");
  const confirmPswdRef = useRef("");

  const [emailValid, setEmailValid] = useState(false);
  const [pswdValid, setPswdValid] = useState(false);
  const [confirmValid, setConfirmValid] = useState(false);

  const history = useHistory();

  const signUpSubmitHandler = async (event) => {
    event.preventDefault();

    const emailValue = emailRef.current.value;
    const pswdValue = pswdRef.current.value;
    const confirmPswdValue = confirmPswdRef.current.value;

    if (
      emailValue.includes("@") &&
      emailValue.includes(".") &&
      pswdValue.length > 5 &&
      confirmPswdValue === pswdValue
    ) {
      setEmailValid(false);
      setPswdValid(false);
      setConfirmValid(false);

      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA44FDI677A07gl8waK8TuqqkK1MhV7_cg",
        {
          method: "POST",
          body: JSON.stringify({
            email: emailValue,
            password: confirmPswdValue,
            returnSecureToken: true
          }),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      const data = await response.json();

      if (response.ok) {
        emailRef.current.value = "";
        pswdRef.current.value = "";
        confirmPswdRef.current.value = "";

        history.replace("/login");
      } else {
        alert(data.error.message);
      }
    } else {
      if (!emailValue.includes("@") || !emailValue.includes(".")) {
        setEmailValid(true);
      }
      if (pswdValue.length < 5) {
        setPswdValid(true);
      }
      if (confirmPswdValue !== pswdValue) {
        setConfirmValid(true);
      }
    }
  };
  return (
    <section className={classes.login}>
      <h1>SignUp</h1>
      <form onSubmit={signUpSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input id="emailId" type="text" ref={emailRef}></input>
        </div>
        {emailValid && <p>Please Enter Valid Email</p>}
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input id="passwordId" type="password" ref={pswdRef} />{" "}
        </div>
        {pswdValid && <p>Please Enter Valid Password</p>}
        <div className={classes.control}>
          <label htmlFor="password">Confirm Password</label>
          <input id="confirmPwdId" type="password" ref={confirmPswdRef} />
        </div>
        {confirmValid && <p>Please Match the Password</p>}
        <div className={classes.actions}>
          <button>Sign Up</button>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
