const carsRoutes = require("./cars.routes");

const ApiRoutes = (app) => {
    app.use(carsRoutes);
};

module.exports = ApiRoutes;