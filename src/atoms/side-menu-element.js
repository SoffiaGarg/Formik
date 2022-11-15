import { Link } from "react-router-dom";

const SideMenuElement = ({ name, iconStyle, link }) => {
  return (
    <>
      <li className="nav-item nav-item-style">
        <Link to={link}>
          <i className={iconStyle}></i>
          {name}
        </Link>
      </li>
    </>
  );
};
export default SideMenuElement;
