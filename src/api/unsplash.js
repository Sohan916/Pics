import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID wKkWBPelLhZYeEvwG8CAcHB1MR-I0wTNdavCeS3fEvc",
  },
});
