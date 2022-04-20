import React from 'react';

const ListInfo = ({ infos, deleteInfo }) => {
  return (
    <ul>
      {infos && infos.length > 0 ? (
        infos.map((info) => {
          return (
            <li key={info._id} onClick={() => deleteInfo(info._id)}>
              {"NAME:"}
              <br />
              {info.cust_name}
              <br />
              {" "}
              {"EMAIL:"}
              <br />
              {info.email}
              <br />
            </li>
          );
        })
      ) : (
        <li>No information to show!!</li>
      )}
    </ul>
  );
};

export default ListInfo;