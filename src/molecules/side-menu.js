import SideMenuElement from "../atoms/side-menu-element";

const SideMenu = () => {
  return (
    <div className="col-sm-3 side-menu">
      <ul className="nav flex-column ">
        <SideMenuElement
          name="Dashbord"
          iconStyle="bi bi-house-door m-2"
          link="/"
        />
        <SideMenuElement
          name="Team"
          iconStyle="bi bi-people-fill m-2"
          link="/team"
        />
        <SideMenuElement
          name="Projects"
          iconStyle="bi bi-file-earmark-code m-2"
          link="/project"
        />
        <SideMenuElement
          name="Create User"
          iconStyle="bi bi-person-check-fill m-2"
          link="/user"
        />
      </ul>
    </div>
  );
};
export default SideMenu;
