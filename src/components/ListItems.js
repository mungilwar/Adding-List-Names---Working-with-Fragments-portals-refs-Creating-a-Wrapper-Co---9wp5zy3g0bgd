import React from 'react';

const ListItems = (props) => {
  return (
    <li className="items" key={props.valuex.id}>
      {props.valuex}
    </li>
  );
};
export default ListItems;
