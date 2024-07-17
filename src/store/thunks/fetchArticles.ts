import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchArtices = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get(
    "https://dummy-rest-api.specbee.site/api/v1/news"
  );
  return response.data;
});

export { fetchArtices };
