import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, {  createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebsse.init';

const googleProvider= new GoogleAuthProvider()
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading]= useState(true)
       
    const loginWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
       }
    

    const createNewUser= (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUserProfile=(updatedData)=>{
        return updateProfile(auth.currentUser,updatedData)
           }

    const logOut= ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            console.log('set user')
            setLoading(false)
        })
        return()=>{
            unsubscribe()
        }
    })

   const authInfo={
    user,
    loading,
    setUser,
    createNewUser,
    loginUser,
    logOut,
    loginWithGoogle,
    updateUserProfile,
            
   }


    return (
      
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;