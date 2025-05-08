import React, { useState } from "react";

const Book = (props) => {
  const [item, setItem] = useState(props.item);

  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>{item.author}</td>
      <td>{item.publisher}</td>
      <td>{item.userId}</td>
    </tr>
  );
};

export default Book;
