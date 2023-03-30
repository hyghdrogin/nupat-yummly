import axios from "axios";
import config from "../configuration/index.js";

const reviewList = async (req, res) => {
  const url = "https://yummly2.p.rapidapi.com/reviews/list";
  const host = "yummly2.p.rapidapi.com";
  try {
    const options = {
      method: "GET",
      params: {offset: 0, limit: 20, globalId: config.GLOBAL_ID},
      url,
      headers: {
        "X-RapidAPI-Key": config.API_KEY,
        "X-RapidAPI-Host": host,
      }
    };
    const response = await axios.request(options);
    const responseData = response.data;
    return res.status(200).send(responseData);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export {
  reviewList
};
