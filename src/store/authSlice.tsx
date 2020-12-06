import {createSlice,PayloadAction} from '@reduxjs/toolkit';

interface AuthState{
    isAuthenticated:boolean,
    user:any
}

const initialState:AuthState={
    isAuthenticated:false,
    user:null,
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action:PayloadAction<any>)=>{
            state.user=action.payload
            state.isAuthenticated=true;
        },
        logout:(state)=>{
            state.user=null
            state.isAuthenticated=false;
        },
    }
});

export const {login,logout}=authSlice.actions;
export default authSlice.reducer;

