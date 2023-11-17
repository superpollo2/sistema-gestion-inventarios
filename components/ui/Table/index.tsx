import React from "react";
interface TableColumn {
    dataAttribute: string;
    header: string;
  }
interface TableProps{
  columns: TableColumn[];
  data: any[] ;
}

const Table = ({columns, data}: TableProps) =>{
  return(
      <table  className="bg-white  border-collapse rounded-xl border text-center border-slate-500 table-auto ">
          <thead className="bg-zinc-100 ">
              <tr >
                  {columns.map((colum, index) =>(
                      <th key={index} className="border  border-slate-600 p-2">{colum.header}</th>
                  ))}
              </tr>
          </thead>
          <tbody>
              {data.map((row) =>(
                  <tr key={row.id}>
                      {columns.map((colum, index) =>(
                          <td key={index} className="border  border-slate-600 py-1 px-4">{row[colum.dataAttribute]}</td>
                      ))}
                  </tr>
              ))}
          </tbody>
      </table>
  );
};

export {Table}
