import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
  key: "AIzaSyDd2F7exUXOAEphylgcL3wsKeu2fBNY_iE",
  cx: "e3c66e01a5ad645b0",
  // cx:'141b9d26d92fa4600'
};

export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};

//AIzaSyDd2F7exUXOAEphylgcL3wsKeu2fBNY_iE

// <script async src="https://cse.google.com/cse.js?cx=141b9d26d92fa4600">
// </script>
// <div class="gcse-search"></div>
