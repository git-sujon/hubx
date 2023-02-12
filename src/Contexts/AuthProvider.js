import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app  from '../Firebase/Firebase.config';

export const AuthContext= createContext()
const auth = getAuth(app)
const [loading ,setLoading] = useState(true)


const AuthProvider = ({children}) => {
const [user, setUser] = useState('')




const userLogin = (email, password) => {
  return signInWithEmailAndPassword(email, password)
}

const createUser = (email, password) => {
  return createUserWithEmailAndPassword(email, password)
}



const logOut = () => {
  return signOut(auth)
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
  }
  

  return (
    <AuthContext.Provider value={authInfo} >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;