'use client'
import link from "daisyui/components/link";
import Link from "next/link";
import React, { useContext } from "react";
import Container from "./Container";
import { TbBrandCoinbase } from "react-icons/tb";
import { AuthContext } from "@/Providers/AuthContext";
import toast from "react-hot-toast";

const Header = () => {
  const {user, signOutUser} = useContext(AuthContext)

  const links = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/cash_flow"}>Cash Flow</Link>
      </li>
    </>
  );

  const handleSignOut =async()=>{
    try {
      await signOutUser()
      toast.success('SignOut successful')
    } catch (error) {
      toast.error(error.code)
    }
  }
  return (
    <section className="bg-base-100 shadow-sm py-2"> 
      <Container>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <Link href={'/'} className=" md:text-3xl text-2xl flex items-center text-green-500 font-bold "><TbBrandCoinbase /><span>ashFlow</span></Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            {
              user ? <button onClick={handleSignOut} className="btn bg-black text-white">SignOut</button>:
            <>
            <Link href={'/login'} className="btn bg-black text-white md:mr-2">SignIn</Link>
            <Link href={'/register'} className="btn bg-black text-white">Register</Link>
            </>

            }
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Header;
