import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';


function Table({ data }) {

  const navigate = useNavigate();

  const viewUser= (person) =>{
    navigate(`/api/users/${person.id}`, { state: person});
 }

  return (
    <StyledTable class="table-auto">
      <thead className="border-b-2 border-[#A100FF]">
        <tr>
          <th className="p-2 text-left">Name</th>
          <th className="p-2 text-left">Email</th>
          <th className="p-2 text-left">Contact Number</th>
          <th className="p-2 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((person) => {
          return (
            <tr
              className="border-b border-gray-200 hover:bg-gray-200"
              key={person.id}
            >
              <td className="p-2">{person.name}</td>
              <td className="p-2">{person.email}</td>
              <td className="p-2">{person.contact}</td>
              <td className="p-2">
                <div className="flex gap-2">
                  <button onClick={()=> viewUser(person)} className="rounded-sm bg-black p-2 text-xs text-white hover:bg-[#A100FF]">
                    View
                  </button>

                  <button className="rounded-sm bg-black p-2 text-xs text-white hover:bg-[#A100FF]">
                    Update
                  </button>
                  <button className="rounded-sm bg-black p-2 text-xs text-white hover:bg-[#A100FF]">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
}

export default Table;

const StyledTable = styled.table`
  width: calc(100vw - 20rem);
`;
