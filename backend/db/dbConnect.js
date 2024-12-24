const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB)
.then((err,data) => console.log("database connected"))
.catch((error) => console.log(error));