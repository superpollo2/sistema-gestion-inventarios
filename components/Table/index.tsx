import React from "react";

interface Column {
  accessor: string;
  header: string;
}

interface Props {
  rows: any[];
  columns: Column[];
}

const Table = (props: Props) => {
  return (
    <div className="table-container">
      <table>
        <thead>
<<<<<<< Updated upstream
        <tr className="border border-black w-72 bg-slate-400">
          {props.columns.map((column) => (
            <td className="border border-black w-72">
=======
        <tr style={{border: "1px solid rgb(0, 0, 0)"}}>
          {columns.filter(x => !x.hidden).map((column) => (
            <td style={{border: "1px solid rgb(0, 0, 0)", backgroundColor: "#9b9b9b", width: "300px"}}>
>>>>>>> Stashed changes
                { column.header }
            </td>
          ))}
        </tr>
        </thead>
        <tbody>
        {props.rows.map((row, index) => {
            const rowClass = index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-300';
            return (
<<<<<<< Updated upstream
              <tr className={`border border-black w-72 ${rowClass}`}>
                {props.columns.map((column) => (
                  <td className="border border-black w-72">
=======
              <tr style={{border: "1px solid rgb(0, 0, 0)"}}>
                {columns.filter(x => !x.hidden).map((column) => (
                  <td style={{border: "1px solid rgb(0, 0, 0)"}}>
>>>>>>> Stashed changes
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
