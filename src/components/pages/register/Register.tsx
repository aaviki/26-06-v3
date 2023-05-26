import { useState, FormEvent } from "react";
import styles from "./Register.module.css"

export function Register() {
  const [registerFormState, setRegisterFormState] = useState({
    username: "",
    password: "",
    repass: "",
    email: "",
    hasCat: "yes",
    areaOfInterest: "",
    bio: "",
    privacy: false,
  });

  const [registerFormErrors, setRegisterFormErrors] = useState({
    username: {
      minlength: false,
      specialCharacters: false,
    },
    password: false,
    repass: false,
    email: {
      minlenght: false,
      specialCharacters: false,
    },
    privacy: false,
    passwords: false,
  });

  const onRegister = (e: any) => {
    e.preventDefault();
  };

  const changeField = (e: any) => {
    if (e.target.type === "checkbox") {
      return setRegisterFormState((oldState) => ({
        ...oldState,
        [e.target.name]: e.target.checked,
      }));
    }

    setRegisterFormState((oldSate) => ({
      ...oldSate,
      [e.target.name]: e.target.value,
    }));
  };

  const validateField = (e: any) => {
    if (e.target.name === "username") {
      if (e.target.value.length < 3) {
        setRegisterFormErrors((oldState) => ({
          ...oldState,
          [e.target.name]: { minlength: true, specialCharacters: false },
        }));
      } else if (e.target.value.includes("%")) {
        setRegisterFormErrors((oldState) => ({
          ...oldState,
          [e.target.name]: { minlength: false, specialCharacters: true },
        }));
      } else {
        setRegisterFormErrors((oldState) => ({
          ...oldState,
          [e.target.name]: { minlength: false, specialCharacters: false },
        }));
      }
    } else if (e.target.name === "password") {
      if (e.target.value.length < 5) {
        setRegisterFormErrors((oldState) => ({
          ...oldState,
          [e.target.name]: true,
        }));
      } else {
        setRegisterFormErrors((oldState) => ({
          ...oldState,
          [e.target.name]: false,
        }));
      }
    } else if (e.target.name === "email") {
      if (e.target.value.length < 5) {
        setRegisterFormErrors((oldState) => ({
          ...oldState,
          [e.target.name]: { minlength: true, specialCharacters: false },
        }));
        // } else if (!e.target.value.includes("@")) {
        //   setRegisterFormErrors((oldState) => ({
        //     ...oldState,
        //     [e.target.name]: { minlength: false, specialCharacters: true },
        //   }));
      } else {
        setRegisterFormErrors((oldState) => ({
          ...oldState,
          [e.target.name]: {
            minlength: false,
            specialCharacters: false,
          },
        }));
      }
    } else if (e.target.name === "privacy") {
      if (e.target.checked) {
        setRegisterFormErrors((oldState) => ({
          ...oldState,
          [e.target.name]: true,
        }));
      } else {
        setRegisterFormErrors((oldState) => ({
          ...oldState,
          [e.target.name]: false,
        }));
      }
    }

    if (
      registerFormState.repass.length > 0 &&
      registerFormState.password !== registerFormState.repass
    ) {
      setRegisterFormErrors((oldState) => ({ ...oldState, passwords: true }));
    } else {
      setRegisterFormErrors((oldState) => ({ ...oldState, passwords: false }));
    }
  };

  return (
    <>
      <h1>Register Here</h1>
      <form onSubmit={onRegister}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={registerFormState.username}
            onChange={changeField}
            onBlur={validateField}
          />
        </div>
        {registerFormErrors.username.minlength && (
          <p className={styles.error}>
            Username must be at least 3 characters long
          </p>
        )}
        {registerFormErrors.username.specialCharacters && (
          <p className={styles.error}>
            Username cannot contain special characters
          </p>
        )}

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={registerFormState.password}
            onChange={changeField}
            onBlur={validateField}
          />
        </div>
        {registerFormErrors.password && (
          <p className={styles.error}>
            Password must be at least 5 characters long
          </p>
        )}
        <div>
          <label htmlFor="repass">Repeat password:</label>
          <input
            type="password"
            id="repass"
            name="repass"
            value={registerFormState.repass}
            onChange={changeField}
            onBlur={validateField}
          />
        </div>
        {registerFormErrors.passwords && (
          <p className={styles.error}>Passwords don't match</p>
        )}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={registerFormState.email}
            onChange={changeField}
            onBlur={validateField}
          />
        </div>
        {registerFormErrors.email.minlenght && (
          <p className={styles.error}>Email must be at least 5 chracters</p>
        )}
        {registerFormErrors.email.specialCharacters && (
          <p className={styles.error}>This is not valid e-mail address</p>
        )}
        <div>
          <label htmlFor="hasCat">Do you have a cat?</label>
          <input type="radio" id="hasCat" name="hasCat" value="yes" />
          Yes, I have
          <input type="radio" id="hasCat" name="hasCat" value="doNot" />
          No, I don't
        </div>
        <div>
          <label htmlFor="areaOfInterest">Area of interest:</label>
          <select id="areaOfInterest" name="areaOfInterest">
            <option value={""}></option>
            <option value={"care"}>care</option>
            <option value={"fun"}>fun</option>
            <option value={"food"}>food</option>
            <option value={"health"}>health</option>
          </select>
        </div>
        <div></div>
        <div>
          <label htmlFor="bio">About me:</label>
          <textarea id="bio" name="bio"></textarea>
        </div>
        <div>
          <input
            type="checkbox"
            id="privacy"
            name="privacy"
            checked={registerFormState.privacy}
            onChange={() => changeField}
            onFocus={() => validateField}
          />
          <label>
            I have read and agree to the <a href="/privacy"> Privacy Policy</a>
          </label>
        </div>
        {registerFormErrors.privacy && (
          <p className={styles.error}>You must agree with the Privasy Policy</p>
        )}
        <input type="submit" value="Register" />
      </form>
    </>
  );
}
