import React from "react";

const TableBody = ({ data, selectItem }) => {
  return (
    <tbody>
      {!data.length
        ? null
        : data.map(item => {
            return (
              <tr key={item.id} onClick={() => selectItem(item.id)}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
    </tbody>
  );
};
export default TableBody;
