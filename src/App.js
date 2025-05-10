import Book from "./Book";
import AddBook from "./AddBook";
import GetBook from './GetBook';
import UpdateBook from './UpdateBook';
import "./App.css";
import React, { useEffect, useState } from "react";
import { call } from "./service/ApiService";

function App() {
  const [items, setItems] = useState([]); //책을 등록하여서 테이블에 추가할 때 사용
  const [getItem, getItems] = useState([]); //검색 할 때 사용
  const [updategetItem, updategetItems] = useState([]); //수정 할 때 사용할 검색
  const [updateItem, updateItems] = useState([]); //수정 할 때 사용

  useEffect(() => {
    call("/book", "GET", null).then((response) => setItems(response.data));
  }, []);

  const addItem = (item) => {
    call("/book", "POST", item).then((response) => setItems(response.data));
  };

  const searchItem = (item) => {
    const params = new URLSearchParams({
      title: item.title
    }).toString();
    call(`/book/search?${params}`, "GET").then((response) =>{console.log(response.data); getItems(response.data)});
  };

  const getBookbyUpdate = (item) => {
    const params = new URLSearchParams({
      title: item.title
    }).toString();
    call(`/book/search?${params}`, "GET").then((response) =>{console.log(response.data); updategetItems(response.data)});
  }

  const putItem = (item) => {
    call("/book", "PUT", item).then((response) =>{updateItems(response.data)});
    call("/book", "GET", null).then((response) => setItems(response.data));
  };

  //테이블에 보여줄 책 객체가 있어야 함
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

  //검색 결과를 보여줄 책 객체
  let searchItems = getItem[0];
  console.log(searchItems);

  let getBookbyUpdateITems = updategetItem[0];
  let updateitem = updateItem[0];


  return (
    <div className="App">
      {/**현재 제품 리스트를 보여주는 UI */}
      <h1>Book item table</h1>
      <div className="BookList">{bookItems}</div>

      {/**제품 추가 */}
      <h1>Book add</h1>
      <AddBook addItem={addItem} />

      {/**제품 검색 */}
      <h1>Book search</h1>
        <GetBook searchItem={searchItem} searchResults={searchItems} />

        {/**제품 수정 */}
      <h1>Book update</h1>
        <UpdateBook getBookbyUpdate = {getBookbyUpdate} updateItem={putItem} searchResults={getBookbyUpdateITems} updateitem={updateitem}/>
    </div>
  );
}

export default App;
