"use client";
import Container from "@/components/shared/Container";
import { AuthContext } from "@/Providers/AuthContext";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const router = useRouter() 


  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    try {

      await createUser(email, password);
      toast.success("Cash Flow Account Created");

    } catch (error) {
      console.log(error);
      toast.error(error.code);
      return
    }


  };
  return (
    <div>
      <div className="">
        <Container>
          <div className="hero  min-h-screen">
            <div className="hero-content ">
              <div className="card bg-base-100 w-full min-w-sm shrink-0 shadow-2xl">
                <h2 className="text-center py-4 font-bold text-xl">
                  Create a Cash Flow Account
                </h2>
                <form onSubmit={handleRegister} className="card-body">
                  <fieldset className="fieldset">
                    {/* name   */}
                    <label className="label">Name</label>
                    <input
                      name="name"
                      type="text"
                      className="input"
                      placeholder="Full Name"
                    />

                    {/* email   */}
                    <label className="label">Email</label>
                    <input
                      name="email"
                      type="email"
                      className="input"
                      placeholder="Email"
                    />

                    {/* photo   */}
                    <label className="label">Choose your photo</label>
                    <input
                      name="photo"
                      type="file"
                      className="input"
                      placeholder="Photo"
                    />

                    {/* password  */}
                    <label className="label">Password</label>
                    <input
                      name="password"
                      type="password"
                      className="input"
                      placeholder="Password"
                    />

                    <button className="btn text-white bg-green-500 mt-4">
                      Create Account
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Register;
