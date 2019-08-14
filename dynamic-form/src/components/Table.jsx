import React from "react";

const Table = ({characters}) => {
  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {characters.length !== 0 ? characters.map((character, index)=><tr key={index}>
            <td>{character.name}</td>
            <td>{character.location}</td>
            <td><button className="btn btn-danger btn-sm">Remove</button></td>
        </tr>) : <p className="text-center">No data found</p>}
      </tbody>
    </table>
  );
};

export default Table;
