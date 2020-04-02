import axios from "axios";

export default {
  getPortfolios() {
    return axios.get("/api/portfolio.json");
  }
};
