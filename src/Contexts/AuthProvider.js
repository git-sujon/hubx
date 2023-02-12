import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import app  from '../Firebase/Firebase.config';
import toast  from 'react-hot-toast';


export const AuthContext= createContext()
const auth = getAuth(app)



const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)

const [loading ,setLoading] = useState(true)


const userLogin = (email, password) => {
  setLoading(true)
  return signInWithEmailAndPassword(auth , email, password)
}

const createUser = (email, password) => {
  setLoading(true)
  return createUserWithEmailAndPassword(auth ,email, password)
}



const logOut = () => {

  return signOut(auth)
}

const resetPassword = (email) => {
 return sendPasswordResetEmail(auth, email)

}

useEffect(()=> {
const unSubscribe = onAuthStateChanged(auth, currentUser => {
  setUser(currentUser)
  setLoading(false)
})

return () => {
  unSubscribe()
}

},  [])


  const authInfo= {
    user,
    setUser,
    userLogin,
    createUser,
    logOut,
    resetPassword
  }
  

  return (
    <AuthContext.Provider value={authInfo} >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;