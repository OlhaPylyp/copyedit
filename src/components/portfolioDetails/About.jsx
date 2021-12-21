import { React, useState, useEffect } from "react";
// import FetchDetails from "../../utils/ApiUtilit";
import data from "../../Jsone/details.json";
import PropTypes from "prop-types";

// import axios from "axios";

const About = ({
  match: {
    params: { id },
  },
  history: { goBack },
}) => {
  // const [detail, setDetail] = useState([]);
  // const getData = () => {
  //   console.log(data.id);
  // };

  // getData();
  // // useEffect(() => {

  // // }, []);
  return (
    <div>
      {data
        .filter(({ id_data }) => id === id_data)
        .map(({ title, text, img }) => (
          <div>
            <h2>{title}</h2>
            <img src={img} alt="" />
            <p>{text}</p>
          </div>
        ))}
      <button onClick={goBack}>go Back</button>;
    </div>
  );
};

About.defaultProps = {
  img: "https://www.flaticon.com/svg/static/icons/svg/763/763704.svg",
};
About.prototype = {
  data: PropTypes.exact({
    id_data: PropTypes.number.isRequired,
    title: PropTypes.string,
    text: PropTypes.string.isRequired,
  }),
};

export default About;
