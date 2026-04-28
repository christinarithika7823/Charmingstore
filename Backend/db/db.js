const mongoose = require("mongoose");
module.exports = () => {
	return mongoose.connect(process.env.REACT_MONGO_URL);
};
