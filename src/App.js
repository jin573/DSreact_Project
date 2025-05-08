import Book from "./Book";
import AddBook from "./AddBook";
import "./App.css";
import React, { useEffect, useState } from "react";
import { call } from "./service/ApiService";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    call("/book", "GET", null).then((response) => setItems(response.data));
  }, []);

  //책 객체가 있어야 함
  let bookItems = items.length > 0 && (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>author</th>
          <th>publisher</th>
          <th>userId</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <Book item={item} />
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="App">
      {/**현재 제품 리스트를 보여주는 UI */}
      <h1>Book item table</h1>
      <div className="BookList">{bookItems}</div>

      {/**제품 추가 */}
      <h1>Book add</h1>
      <AddBook />
    </div>
  );
}

export default App;
