import React, { useContext } from "react";
import { UserContext } from "../Context/context";

export const IconButton = ({ style, icon, btnName }) => {
  const data = useContext(UserContext);
  return (
    <button type="button" className={style} onClick={data.toggleEdit}>
      <span className="btn-label">
        <i className={icon}></i>
      </span>
      {btnName}
    </button>
  );
};

export default IconButton;
