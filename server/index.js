import  express  from "express"
import mongoose from "mongoose"
import cors from 'cors'

import userRoutes from './routed/users.js';

const app=express();

app.use(express.json({limit:"30mb",extended:"true"}));
app.use(express.urlencoded({limit:"30mb",extended:"true"}));
app.use(cors());

app.get('/',(req,res)=>{
    res.send("This is a Stack Overflow clone API");
})

app.post('auth/signup',()=>{

})

app.use('/user',userRoutes) //here we are we get like /user/login or /user/signup login is replaced by userRoutes
"mongodb+srv://maheshyadav:mahesh@stack-overflow-clone.kc99tin.mongodb.net/?retryWrites=true&w=majority"

const PORT=process.env.PORT||5000

const CONNECTION_URL="mongodb+srv://maheshyadav:<password>@stack-overflow-clone.kc99tin.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
       .then(()=>app.listen(PORT,()=>{console.log(`server running on ${PORT}`)}))
       .catch((err)=>console.log(err.message))
