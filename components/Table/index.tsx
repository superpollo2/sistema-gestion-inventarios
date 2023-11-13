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
        <tr className="border border-black w-72 bg-slate-400">
          {props.columns.map((column) => (
            <td className="border border-black w-72">
                { column.header }
            </td>
          ))}
        </tr>
        </thead>
        <tbody>
        {props.rows.map((row, index) => {
            const rowClass = index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-300';
            return (
              <tr className={`border border-black w-72 ${rowClass}`}>
                {props.columns.map((column) => (
                  <td className="border border-black w-72">
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
