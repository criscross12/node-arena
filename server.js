const Arena = require("bull-arena");
const Bull = require("bull");
const barRoutes = require('./src/bar/route')
const barEntranceRoutes = require('./src/barEntrance/route')

module.exports = (app, port,queues) => {

    console.log("Config ", queues);
  const arenaConfig = Arena(
    {
        Bull,
        queues
    },
    {
        basePath:'/arena', 
        disableListen: true
    });

  app.use("/", arenaConfig);
  barRoutes(app)
  barEntranceRoutes(app)

  app.listen(port, () => {
    console.log("Server on port", port);
  });
};
