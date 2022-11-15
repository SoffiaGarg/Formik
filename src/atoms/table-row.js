const Row = ({ fname, lname, email }) => {
  return (
    <tr>
      <th scope="row"></th>
      <td>{fname}</td>
      <td>{lname}</td>
      <td>{email}</td>
    </tr>
  );
};
export default Row;
