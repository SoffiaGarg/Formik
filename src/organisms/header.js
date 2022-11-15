import { useContext } from "react";
import IconButton from "../atoms/button-with-icon";
import { UserContext } from "../Context/context";
export const Header = () => {
  const data = useContext(UserContext);
  const btnName = data.edit ? "Switch to View Mode" : "Switch to Edit Mode";
  const btnStyle = data.edit
    ? "btn btn-labeled btn-primary mt-10 mb-10"
    : "btn btn-labeled btn-secondary mt-10 mb-10";
  const iconName = data.edit
    ? "bi bi-eye-fill iconStyle"
    : "bi bi-pencil-square iconStyle";

  return (
    <div className="row header">
      <div className="col-sm-9 vertical-center">React Context Playground</div>
      <div className="col-sm-3 align-self-end ">
        <IconButton style={btnStyle} btnName={btnName} icon={iconName} />
      </div>
    </div>
  );
};
export default Header;
