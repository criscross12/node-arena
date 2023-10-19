const Queue = require("bull");
const {
  config: { redis },
} = require("./config");
const { bar: barWorker, barEntrance: barEntranceWorker } = require("./workers");
const bar = new Queue("bar", { redis });
const barEntrance = new Queue("bar-Entrance", { redis });

bar.process((job, done) => barWorker(job, done));
barEntrance.process((job, done) => barEntranceWorker(job, done));

const queues = [
  {
    type: Queue,
    name: "bar",
    hostId: "Bar Queue Manager",
    redis,
  },
  {
    type: Queue,
    name: "bar-Entrance",
    hostId: "Bar Entrance Queue Manager",
    redis,
  },
];

module.exports = { bar, barEntrance, queues };
