const express = require('express');
const app = express();
const dbConfig = require("./db");
const vehicleroute = require("./routes/vehicleroutes");
const userroutes=require("./routes/userroutes")
const bookingRoute=require("./routes/bookingRoute")
app.use(express.json())

// Mount the vehicleRoute handler under /api/vehicles path
app.use("/api", vehicleroute)
app.use("/api/bookings",bookingRoute)

app.use("/api/users",userroutes);
const port = 5000 || 5000;
app.listen(port, () => {
  console.log("Node server started on port " + port);
}); 
