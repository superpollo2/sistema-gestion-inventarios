import React from "react";

const Table = ({ data, columns}) => {
  return (
    <div className="table-container">
      <table>
        <thead>
        <tr style={{border: "1px solid rgb(0, 0, 0)"}}>
          {columns.map((column) => (
            <td style={{border: "1px solid rgb(0, 0, 0)", backgroundColor: "#9b9b9b", width: "300px"}}>
                { column.header }
            </td>
          ))}
        </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            return (
              <tr style={{border: "1px solid rgb(0, 0, 0)"}}>
                {columns.map((column) => (
                  <td style={{border: "1px solid rgb(0, 0, 0)"}}>
                    {
                        row[column.accessor]
                    }
                </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
