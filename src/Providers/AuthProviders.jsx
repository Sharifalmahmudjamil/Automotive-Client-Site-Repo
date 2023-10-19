/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const googleProvider= new GoogleAuthProvider();

export const AuthContext= createContext(null);

const AuthProviders = ({children}) => {

    const[user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const createUser=(email,password)=>{
        setLoading(true)
            return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout=()=>{
        setLoading(true)
        return signOut(auth);
    }


    useEffect(()=>{
        const unsubscribe=  onAuthStateChanged(auth,currentUser=>{
              console.log("user in the auth state changed",currentUser);
              setUser(currentUser);
              setLoading(false);
          })
          return ()=>{
              unsubscribe();
          }
      },[])

    const userInfo={
        user,
        loading,
        googleSignIn,
        createUser,
        signIn,
        logout,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;