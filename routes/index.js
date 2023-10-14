const homeRouter = require("./home/home.routes");
const cartRouter = require('./cart/cart.routes')

const routers = (app) => {
    app.use("/api/v1/homepage", homeRouter)
    app.use("/api/v1/cart", cartRouter)
};

module.exports = routers;