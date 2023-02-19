import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/images/login/login.svg";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((results) => {
        // Signed in
        const user = results.user;
        console.log(user);
        // ...
      })
      .catch((err) => console.error(err));

    // const errorCode = error.code;
    // const errorMessage = error.message;
    // ..
  };

  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl text-center font-bold">SignUp</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="SignuP" />
            </div>
          </form>
          <p className="text-center">
            alrdy have a account{" "}
            <Link className="text-orange-600 font-bold" to="/login">
              LOgin
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Signup;
