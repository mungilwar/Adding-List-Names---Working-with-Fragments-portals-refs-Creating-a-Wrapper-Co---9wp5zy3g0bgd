import React from 'react';
import ListItems from './ListItems';
//code here
const List = ({ listx }) => {
  return (
    <>
      <ul id="list">
        {listx.map((item) => (
          <ListItems valuex={item} />
        ))}
      </ul>
    </>
  );
};

export default List;
