"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
class Jersey extends _1.default {
    getJerseyDetails(item, index, $) {
        const title = $(item).find(".gt_subheading").text().trim();
        const discountPrice = $(item)
            .find(".gt_product-price--current")
            .text()
            .trim();
        const price = $(item).find(".gt_product-price--compare").text().trim();
        const image = $(item).find(".gt_product-image--front").attr("src");
        const previewImage = $(item).find(".gt_product-image--back").attr("src");
        return {
            id: index + 1,
            title,
            discountPrice,
            price,
            image,
            previewImage,
        };
    }
    getBestSellers() {
        // eslint-disable-next-line
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const bestSellers = yield this.redisClient.get("api:best-sellers");
                if (bestSellers) {
                    resolve(JSON.parse(bestSellers));
                    return;
                }
                const response = [];
                const { data } = yield this.axiosInstance.get("/");
                const $ = this.loader(data);
                $(".product-list-block .items").each((index, item) => {
                    const jerseyDetail = this.getJerseyDetails(item, index, $);
                    response.push(jerseyDetail);
                });
                resolve(response);
                yield this.redisClient.setEx("api:best-sellers", 3600, JSON.stringify(response));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    getNBAJerseys() {
        // eslint-disable-next-line
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const nbaJerseys = yield this.redisClient.get("api:nba-jerseys");
                if (nbaJerseys) {
                    resolve(JSON.parse(nbaJerseys));
                    return;
                }
                const response = [];
                const { data } = yield this.axiosInstance.get("/collections/nba-jerseys");
                const $ = this.loader(data);
                $(".product_list_content .items").each((index, item) => {
                    const jerseyDetail = this.getJerseyDetails(item, index, $);
                    response.push(jerseyDetail);
                });
                resolve(response);
                yield this.redisClient.setEx("api:nba-jerseys", 3600, JSON.stringify(response));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    getNFLJerseys() {
        // eslint-disable-next-line
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const nflJerseys = yield this.redisClient.get("api:nfl-jerseys");
                if (nflJerseys) {
                    resolve(JSON.parse(nflJerseys));
                    return;
                }
                const response = [];
                const { data } = yield this.axiosInstance.get("/collections/nfl-jerseys");
                const $ = this.loader(data);
                $(".product_list_content .items").each((index, item) => {
                    const jerseyDetail = this.getJerseyDetails(item, index, $);
                    response.push(jerseyDetail);
                });
                resolve(response);
                yield this.redisClient.setEx("api:nfl-jerseys", 3600, JSON.stringify(response));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    getSoccerJerseys() {
        // eslint-disable-next-line
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const soccerJerseys = yield this.redisClient.get("api:soccer-jerseys");
                if (soccerJerseys) {
                    resolve(JSON.parse(soccerJerseys));
                    return;
                }
                const response = [];
                const { data } = yield this.axiosInstance.get("/collections/soccer");
                const $ = this.loader(data);
                $(".product_list_content .items").each((index, item) => {
                    const jerseyDetail = this.getJerseyDetails(item, index, $);
                    response.push(jerseyDetail);
                });
                resolve(response);
                yield this.redisClient.setEx("api:soccer-jerseys", 3600, JSON.stringify(response));
            }
            catch (error) {
                reject(error);
            }
        }));
    }
}
exports.default = Jersey;
