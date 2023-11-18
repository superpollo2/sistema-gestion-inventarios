import { useGetRoles } from "@/hooks/useGetRoles";
import React from "react";
import { User } from '@prisma/client';
interface TableColumn {
    userAttribute: string;
    header: string;
  }
interface TableProps{
  columns: TableColumn[];
  user: User[] ;
}

const TableUsers = ({columns, user}: TableProps) =>{
const { roles } = useGetRoles();
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
              {user.map((row) =>(
                  <tr key={row.id}>
                      {columns.map((column, index) =>(
                          <td key={index} className="border  border-slate-600 py-1 px-4">
                           {column.userAttribute === 'roleId' ? (
                                    roles?.find((r) => r.id === row.roleId)?.name ?? ''
                                ) : (
                                    row[column.userAttribute]
                                )}</td>
                      ))}
                  </tr>
              ))}
          </tbody>
      </table>
  );
};

export {TableUsers}
