import { createClient } from "redis";

const redisClient = createClient({
  url: "https://salty-forest-52253.herokuapp.com/",
});

redisClient.connect();

export default redisClient;
