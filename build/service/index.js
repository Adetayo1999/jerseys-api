"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = require("cheerio");
const redis_1 = __importDefault(require("../redis"));
class Base {
    constructor() {
        this.axiosInstance = axios_1.default.create({
            baseURL: "https://jerseysdeluxe.com/",
        });
        this.redisClient = redis_1.default;
        this.loader = cheerio_1.load;
    }
}
exports.default = Base;
