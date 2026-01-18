"use client";
import Container from "@/components/shared/Container";
import { AuthContext } from "@/Providers/AuthContext";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import toast from "react-hot-toast";

const LoginPage = () => {
  const {signInUser} = useContext(AuthContext);
  const router = useRouter()

    const mockUser = {
    email: 'mock@user.com',
    password: 'asdfjk'
  }
    
  const handleLogin =async (e) =>{
    e.preventDefault()
    const form = e.target;

    const email = form.email.value ;
    const password = form.password.value;

    console.log({email, password})

    
    if(email == mockUser.email && password == mockUser.password){
      document.cookie = "auth=ture; path=/";
      router.push('/cash_flow')
    }

    try {
        await signInUser(email, password)
        toast.success('SignIn successful')
    } catch (error) {
        toast.error(error.code)
  } 

}
  return (
      <div>
       <div className="">
            <Container>
              <div className="hero  min-h-screen">
                <div className="hero-content ">
                  <div className="card bg-base-100 w-full min-w-sm shrink-0 shadow-2xl">
                    <h2 className="text-center py-4 font-bold text-xl">
                      Welcome back
                    </h2>
                    <form onSubmit={handleLogin} className="card-body">
                      <fieldset className="fieldset">
              

                        {/* email   */}
                        <label className="label">Email</label>
                        <input
                          name="email"
                          type="email"
                          className="input"
                          placeholder="Email"
                        />

                 
      
                        {/* password  */}
                        <label className="label">Password</label>
                        <input
                          name='password'
                          type="password"
                          className="input"
                          placeholder="Password"
                        />
      
                        <button className="btn bg-green-500 text-white mt-4">Login</button>
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

export default LoginPage;
