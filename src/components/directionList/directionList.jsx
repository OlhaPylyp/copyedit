import PropTypes from "prop-types";
import styles from "../directionList/directionList.module.css";

const FieldsList = ({ fields }) => (
  <div className={styles.container}>
    <ul className={styles.list}>
      {" "}
      {fields.map(({ img, id, title, text }) => (
        <li className={styles.item} key={id}>
          <h2>{title}</h2>
          <p className={styles.number}>{id}</p>
          <p className={styles.name}>{text}</p>
          <img className="avatar" src={img} alt={title} width="350" />
        </li>
      ))}
    </ul>
  </div>
);

FieldsList.defaultProps = {
  avatar: "https://www.flaticon.com/svg/static/icons/svg/763/763704.svg",
};
FieldsList.prototype = {
  fields: PropTypes.exact({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    text: PropTypes.string.isRequired,
  }),
};

export default FieldsList;
