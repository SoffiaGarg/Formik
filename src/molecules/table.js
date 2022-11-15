import Row from "../atoms/table-row";
const Table = ({ teamData }) => {
  const rowData = teamData?.data.map((userData) => {
    return (
      <Row
        key={userData.id}
        fname={userData.first_name}
        lname={userData.last_name}
        email={userData.email}
      />
    );
  });
  return (
    <table className="table table-striped">
      <thead className="thead-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
        </tr>
        {rowData}
      </thead>
    </table>
  );
};
export default Table;
