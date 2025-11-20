import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/research";


// Backend deployed URL
// const API_URL = "https://market-research-agent-backend.onrender.com/api/research";

export const runResearch = async (brief) => {
  const res = await axios.post(API_URL, { brief });
  return res.data;
};
