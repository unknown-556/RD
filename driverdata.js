import images from 'images';
import mongoose from 'mongoose'
import { Schema } from 'zod';


const driverdataSchema = mongoose.Schema({
  FirstName: {
    type: String,
  },
  LastName: {
    type: String,
  },
  Gender: {
    type: String,
  },
  VehicleManufacturerandModel: {
    type: String,
  },
  VehicleYear: {
    type: String,
  },
  VehiclePlateNumber: {
    type: String,
  },
  VehicleColor: {
    type: String
  },
  Nin: {
    type: String
  },
  NumberofSeats : {
    type:String,
  },
  DailyRoute : {
    type:String,
  },
  PriceofTripPerPerson: {
    type: String,
  },

  NameofBank: {
   type: String,
  },

  AccountName: {
    type: String,
  },

  BankAccountNumber: {
   type: String,
  },  


  PickaDayandTimeforInterview: {
    type: String,
  },
},
{
  timeStamps: true
}
);


const imageSchema =new Schema({

  FrontViewofDriverLicense: {
    type: String,
    default: '' 
  },
  BackViewofDriversLicense: {
    type: String,
    default: ''
  },
  VehicleFrontView: {
    type:images,
    default: ''
  },
  VehicleBackView : {
    type:String,
    default: ''
  },
  VehicleLeftView : {
    type:String,
    default: ''
  },
  VehicleRightView : {
    type:String,
    default: ''
  },

})


  
  

;


const DriverData = mongoose.model('DriverData',driverdataSchema)
export default {DriverData, imageSchema}