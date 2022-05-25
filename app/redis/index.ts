import { createClient } from "redis";

const redisClient = createClient({
  url: "redis://default:CXKYbT0PP2UKvjAEKTmee55bHRESEMtB@redis-13742.c273.us-east-1-2.ec2.cloud.redislabs.com:13742",
});

redisClient.connect();

export default redisClient;
