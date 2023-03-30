import axios from "axios";
import config from "../configuration/index.js";

const categoryList = async (req, res) => {
  const url = "https://yummly2.p.rapidapi.com/categories/list";
  const host = "yummly2.p.rapidapi.com";
  try {
    const options = {
      method: "GET",
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
  categoryList
};
