import { useQuery } from "react-query";
import Table from "../molecules/table";

const fetchTeam = async () => {
  const data = await fetch("https://reqres.in/api/users?page=1");
  return data.json();
};

const Team = () => {
  const { data, status } = useQuery("teamData", fetchTeam);
  return (
    <div className="col-sm-9 card-detail">
      <h5>My Team</h5>
      {status === "loading" && <div>Loading Data...</div>}
      {status === "error" && <div> Some Error Occur , Please visit later </div>}
      {status === "success" && <Table teamData={data} />}
    </div>
  );
};
export default Team;
