import DriverData from './driverdata.js';

export const dataSend = async (req, res) => {
  const { FirstName, LastName, Gender, VehicleManufacturerAndModel, VehicleYear, VehiclePlateNumber,
          FrontViewOfDriverLicense, BackViewOfDriversLicense, VehicleFrontView, VehicleBackView,
          VehicleLeftView, VehicleRightView, NumberOfSets, DailyRoute, PriceOfTripPerPerson, NameOfBank,
          AccountName, BankAccountNumber, PickDayTimeForInterview
      } = req.body;

  const newDriverData = new DriverData({
    FirstName,
    LastName,
    Gender,
    VehicleManufacturerAndModel,
    VehicleYear,
    VehiclePlateNumber,
    FrontViewOfDriverLicense,
    BackViewOfDriversLicense,
    VehicleFrontView,
    VehicleBackView,
    VehicleLeftView,
    VehicleRightView,
    NumberOfSets,
    DailyRoute,
    PriceOfTripPerPerson,
    NameOfBank,
    AccountName,
    BankAccountNumber,
    PickDayTimeForInterview
  });

  try {
    await newDriverData.save();
    res.status(200).json({ message: 'Driver registered successfully' });
  } catch (error) {
    res.status(422).json({ error: error });
  }
};


export default dataSend