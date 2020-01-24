import React from "react";
import style from "./tableBody.module.css";

const TableBody = ({ data, selectItem, selectedId }) => {
  return (
    <>
      <tbody>
        {!data.length
          ? null
          : data.map(item => {
              return (
                <tr
                  key={item.id}
                  onClick={() => selectItem(item.id)}
                  className={item.id === selectedId ? style.active : ""}
                >
                  <td>{item.id}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              );
            })}
      </tbody>
    </>
  );
};
export default TableBody;
