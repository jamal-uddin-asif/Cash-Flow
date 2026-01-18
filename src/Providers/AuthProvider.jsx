"use client";
import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase.config";

const AuthProvider = ({ children }) => {
    const [user, SetUser] = useState(null)

    const [loading, SetLoading] = useState(true)

    const createUser = (email, password) =>{
        SetLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        SetLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () =>{
        return signOut(auth)
    }



    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            SetUser(currentUser)
            SetLoading(false)
        })

        return ()=>{
            unSubscribe()
        }
    },[])
  const authInfo = {
    createUser,
    signInUser,
    user,
    loading, 
    SetLoading,
    signOutUser
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
