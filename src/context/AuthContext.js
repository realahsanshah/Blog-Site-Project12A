import React from 'react';
import {createContext,useState} from 'react';
import firebase from 'gatsby-plugin-firebase';

const initialState={
    user:null,
    isAuthenticated:false,
}

export const AuthContext=createContext(initialState);

const AuthProvider=({children})=>{

    const [user,setUser]=useState("Hello");
    const [isAuthenticated,setIsAuthenticated]=useState(false);

    return(
        <AuthContext.Provider value={{user,setUser,isAuthenticated,setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
