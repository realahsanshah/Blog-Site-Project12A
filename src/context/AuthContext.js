import React from 'react';
import {createContext,useState,useEffect} from 'react';
import firebase from 'gatsby-plugin-firebase';

const initialState={
    user:null,
    isAuthenticated:false,
}

export const AuthContext=createContext(initialState);

const AuthProvider=({children})=>{

    const [user,setUser]=useState(null);
    const [isAuthenticated,setIsAuthenticated]=useState(false);

    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user)=>{
            setUser(user);
            console.log("user",user);
            user===null?setIsAuthenticated(false):setIsAuthenticated(true)
        })
    },[])
    

    return(
        <AuthContext.Provider value={{user,setUser,isAuthenticated,setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
