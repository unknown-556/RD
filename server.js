import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { join } from 'path'
import {driversignUp, driversignIn} from './driverController.js'
import {signUp }from './userController.js'
// import signInController from './authController.js'
import { signIn } from './userController.js'
import connectDB from './database.js'
import router from './index.js'
import user from './pass.model.js'
import dataSend from './driverdatacontroller.js'

dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();



app.use(cors({origin:"*"}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/api/v1', router)
app.use(express.static(join(__dirname, 'public')));

app.post('/sign_up', signUp);

app.post('/log_in', signIn);

app.post('/driversign_up', driversignUp);

app.post('/driverlog_in', driversignIn)

app.post('/sign_up', dataSend)
  

app.get('/api/v1', (req,res)=> {
    return res.redirect('land.html')
})


 
const startServer  = async () => {
   const PORT  = process.env.PORT || 2234
   connectDB()
   try {
      app.listen(PORT,() => {console.log(`APP IS RUNNING ON PORT: ${PORT}`);})
   } catch (error) {
      console.log(error);
   }
};

startServer();

app.get("/", (req,res) => {
   return res.redirect('land.html')
})