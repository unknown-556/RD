import express from "express";
const router = express.Router()
import { signUp,signIn } from "./userController.js";
import {driversignUp, driversignIn} from "./driverController.js"
import dataSend from "./driverdatacontroller.js";

router.post("/register",signUp)
router.post("/login", signIn)
router.post("register", driversignUp)
router.post("/login", driversignIn)
router.post('/register', dataSend)

export default router;

