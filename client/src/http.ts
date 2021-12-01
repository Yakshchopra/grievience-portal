import axios from "axios";
async function http(
  type: string,
  url: string,
  flag: boolean,
  body?: any,
  auth?: any
) {
  let BASE_URL = flag ? "http://localhost:4000/" : "http://localhost:4001/";
  if (type === "GET") {
    try {
      let response = await axios.get(BASE_URL + url);
      return response;
    } catch (err) {
      console.log(err);
    }
  }
  if (type === "POST") {
    try {
      let response = await axios.post(BASE_URL + url, body);
      return response;
    } catch (err: any) {
      console.log(err.message);
    }
  }
}
export default http;
