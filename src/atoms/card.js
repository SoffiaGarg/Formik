import { useContext } from "react";
import { UserContext } from "../Context/context";

const Card = ({ title, text, icon }) => {
  const data = useContext(UserContext);
  const isEditable = data.edit ? true : false;
  return (
    <div className="card col-6 shadow p-3 mb-5 bg-white rounded">
      <div className="card-body-style card-body">
        <h5 contentEditable={isEditable} className="card-header">
          {title}
        </h5>
        <p className="card-text p-3">
          <i className={icon}></i> {text}
        </p>
      </div>
    </div>
  );
};
export default Card;
