import { React, useState, useEffect } from "react";
// import FetchDetails from "../../utils/ApiUtilit";
import axios from "axios";

const About = ({
  match: {
    params: { id },
  },
  history: { goBack },
}) => {
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    axios.get("details.json").then((response) => {
      console.log(response.data);
      setDetail(response.data);
    });
  }, []);
  return (
    <div>
      <h2> Details: {id}</h2>
      {detail.map(({ id }) => (
        <li>{id}</li>
      ))}
      <button onClick={goBack}>go Back</button>;
    </div>
  );
};

// PortfolioList.defaultProps = {
//   avatar: "https://www.flaticon.com/svg/static/icons/svg/763/763704.svg",
// };
// PortfolioList.prototype = {
//   fields: PropTypes.exact({
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string,
//     text: PropTypes.string.isRequired,
//   }),
// };

export default About;
