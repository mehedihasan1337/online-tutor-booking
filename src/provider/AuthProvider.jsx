import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, {  createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebsse.init';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';

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

    const logOut= async()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async currentUser => {
          console.log('CurrentUser', currentUser)
          if (currentUser?.email) {
            setUser(currentUser)
            const { data } = await axios.post(
              `${import.meta.env.VITE_API_URL}/jwt`,
              {
                email: currentUser?.email,
              },
              { withCredentials: true }
            )
            console.log(data)
         }
         else {
            setUser(currentUser)
            const { data } = await axios.get(
              `${import.meta.env.VITE_API_URL}/logout`,
              { withCredentials: true }
            )
          }
          setLoading(false)
        })
        return () => {
          return unsubscribe()
        }
      }, []) 

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
            <Toaster></Toaster>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;