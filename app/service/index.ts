import axios from "axios";
import { load } from "cheerio";
import redis from "../redis";

class Base {
  protected axiosInstance;

  protected redisClient;

  protected loader;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "https://jerseysdeluxe.com/",
    });

    this.redisClient = redis;

    this.loader = load;
  }
}

export default Base;
