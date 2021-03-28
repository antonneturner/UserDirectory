import React from "react";
// props={
//   users,
//   handleSorting
// }

export default function Table(props) {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">img</th>
          <th scope="col" onClick={props.handleSorting}>
            First <i class="fas fa-arrow-circle-up"></i>
          </th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((item) => (
          <tr>
            <th scope="row">
              <img src={item.picture.thumbnail} />
            </th>
            <td>{item.name.first}</td>
            <td>{item.name.last}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
