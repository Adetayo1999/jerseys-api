import { CheerioAPI, Element } from "cheerio";
import Base from ".";

class Jersey extends Base {
  getJerseyDetails(item: Element, index: number, $: CheerioAPI) {
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
    return new Promise(async (resolve, reject) => {
      try {
        const bestSellers = await this.redisClient.get("api:best-sellers");
        if (bestSellers) {
          resolve(JSON.parse(bestSellers));
          return;
        }
        const response: any = [];
        const { data } = await this.axiosInstance.get("/");
        const $ = this.loader(data);
        $(".product-list-block .items").each((index, item) => {
          const jerseyDetail = this.getJerseyDetails(item, index, $);
          response.push(jerseyDetail);
        });
        resolve(response);
        await this.redisClient.setEx(
          "api:best-sellers",
          3600,
          JSON.stringify(response)
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  getNBAJerseys() {
    // eslint-disable-next-line
    return new Promise(async (resolve, reject) => {
      try {
        const nbaJerseys = await this.redisClient.get("api:nba-jerseys");
        if (nbaJerseys) {
          resolve(JSON.parse(nbaJerseys));
          return;
        }
        const response: any = [];
        const { data } = await this.axiosInstance.get(
          "/collections/nba-jerseys"
        );
        const $ = this.loader(data);
        $(".product_list_content .items").each((index, item) => {
          const jerseyDetail = this.getJerseyDetails(item, index, $);
          response.push(jerseyDetail);
        });
        resolve(response);
        await this.redisClient.setEx(
          "api:nba-jerseys",
          3600,
          JSON.stringify(response)
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  getNFLJerseys() {
    // eslint-disable-next-line
    return new Promise(async (resolve, reject) => {
      try {
        const nflJerseys = await this.redisClient.get("api:nfl-jerseys");
        if (nflJerseys) {
          resolve(JSON.parse(nflJerseys));
          return;
        }
        const response: any = [];
        const { data } = await this.axiosInstance.get(
          "/collections/nfl-jerseys"
        );
        const $ = this.loader(data);
        $(".product_list_content .items").each((index, item) => {
          const jerseyDetail = this.getJerseyDetails(item, index, $);
          response.push(jerseyDetail);
        });
        resolve(response);
        await this.redisClient.setEx(
          "api:nfl-jerseys",
          3600,
          JSON.stringify(response)
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  getSoccerJerseys() {
    // eslint-disable-next-line
    return new Promise(async (resolve, reject) => {
      try {
        const soccerJerseys = await this.redisClient.get("api:soccer-jerseys");
        if (soccerJerseys) {
          resolve(JSON.parse(soccerJerseys));
          return;
        }
        const response: any = [];
        const { data } = await this.axiosInstance.get("/collections/soccer");
        const $ = this.loader(data);
        $(".product_list_content .items").each((index, item) => {
          const jerseyDetail = this.getJerseyDetails(item, index, $);
          response.push(jerseyDetail);
        });
        resolve(response);
        await this.redisClient.setEx(
          "api:soccer-jerseys",
          3600,
          JSON.stringify(response)
        );
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default Jersey;
