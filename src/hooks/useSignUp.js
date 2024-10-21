import { useState, useEffect } from "react";
import { Filter } from "bad-words";
import { useDispatch } from "react-redux";
import { setUser } from "../store/actions/actions";

export default function useSignUp({login , password}) {
   const [name , setName] = useState('')
   const dispatch = useDispatch()
   const dispName = name ? name : "Anonim"
   const signUp = (login ,password) => {
    setName(login)
    dispatch(setUser(login,password))
   }
  
  
  return {
    dispName,
    signUp

  }
}
