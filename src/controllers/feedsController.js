import axios from "axios";
import config from "../configuration/index.js";

const host = "yummly2.p.rapidapi.com";

const feedsAutoComplete = async (req, res) => {
  const url = "https://yummly2.p.rapidapi.com/feeds/auto-complete";
  const param = "chicken soup";
  try {
    const options = {
      method: "GET",
      params: {q: param},
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

const feedsSearch = async (req, res) => {
  const url = "https://yummly2.p.rapidapi.com/feeds/search";
  const param = "chicken soup";
  try {
    const options = {
      method: "GET",
      params: {
        start: 0,
        maxResult: 18,
        maxTotalTimeInSeconds: 7200,
        q: param,
        allowedAttribute: config.ATTRIBUTE,
        FAT_KCALMax: 1000
      },
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

const feedsList = async (req, res) => {
  const url = "https://yummly2.p.rapidapi.com/feeds/list";
  try {
    const options = {
      method: "GET",
      params: {limit: 24, start: 0},
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

const feedsListSimilarities = async (req, res) => {
  const url = "https://yummly2.p.rapidapi.com/feeds/list-similarities";
  const id = "15-Minute-Baked-Salmon-with-Lemon-9029477";
  try {
    const options = {
      method: "GET",
      params: {
        limit: 18,
        start: 0,
        id,
        apiFeedType: "moreFrom",
        authorId: "Yummly"
      },
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
  feedsAutoComplete, feedsSearch, feedsList, feedsListSimilarities
};
