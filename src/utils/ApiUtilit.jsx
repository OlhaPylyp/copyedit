import axios from "axios";

const FetchDetails = async () =>
  await axios
    .get("details.json")
    .then((response) => console.log(response.data));
export default FetchDetails;
