import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import users from '../models/auth.js'

export const signup=async(req,res)=>{
    const {name,email,password}=req.body;
    

}
export const login=async(req,res)=>{
    
}