const express = require('express');
const router = express.Router();
const Vehicless = require('../models/vehicles');

// Define route for fetching all vehicles
router.get('/gettallvehicles', async (req, res) => {
  try {
    const vehicles = await Vehicless.find({});
    res.status(200).json(vehicles);
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    res.status(500).json({ message: 'Failed to fetch vehicles' });
  }
});

// Get vehicle by ID from request body
router.post("/gettvehiclesbyeid", async (req, res) => {
  const { vid } = req.body; // Accessing the vid from the request body

  try {
    const vehicle = await Vehicless.findOne({ _id: vid });
    if (!vehicle) {
      res.status(404).json({ message: "Vehicle not found" });
      return;
    }
    res.status(200).json(vehicle);
  } catch (error) {
    console.error('Error fetching vehicle:', error);
    res.status(500).json({ message: 'Failed to fetch vehicle' });
  }
});

// Another version of getting vehicle by ID (commented out)
// router.post('/gettvehiclesbyeid', async (req, res) => {
//   const vid = req.body.id; // Accessing the ID from the request body
//   try {
//     const vehicle = await Vehicless.findOne({ _id:vid });
//     res.status(200).json(vehicle);
//   } catch (error) {
//     console.error('Error fetching vehicles:', error);
//     res.status(500).json({ message: 'Failed to fetch vehicles' });
//   }
// });

// Route for adding a new vehicle
router.post("/addvehicle",async(req,res)=>{
  try {
    const newvehicle = new Vehicless(req.body);
    await newvehicle.save();
    res.send('New vehicle and data added');
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router; // Export the router for use in app.js
