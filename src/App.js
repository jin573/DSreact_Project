import Book from "./Book";
import AddBook from "./AddBook";
import GetBook from './GetBook';
import UpdateBook from './UpdateBook';
import "./App.css";
import React, { useEffect, useState } from "react";
import { call } from "./service/ApiService";

function App() {
  const [bookList, setBookList] = useState([]); //책을 등록하여서 테이블에 추가할 때 사용
  const [getBookItem, setGetBookItem] = useState([]); //검색 할 때 사용
  const [updateToGetItem,setUpdateToGetItem] = useState([]); //수정 할 때 사용할 검색
  const [updateBookItem, setUpdateBookItem] = useState([]); //수정 할 때 사용

  useEffect(() => {
    call("/book", "GET", null).then((response) => setBookList(response.data));
  }, []);

  const callAddItem = (item) => {
    call("/book", "POST", item).then((response) => setBookList(response.data));
  };

  const callGetItem = (item) => {
    const params = new URLSearchParams({
      title: item.title
    }).toString();
    call(`/book/search?${params}`, "GET").then((response) =>{console.log(response.data); setGetBookItem(response.data)});
  };

  const callUpdateToGetItem = (item) => {
    const params = new URLSearchParams({
      title: item.title
    }).toString();
    call(`/book/search?${params}`, "GET").then((response) =>{console.log(response.data); setUpdateToGetItem(response.data)});
  }

  const callUpdateItem = (item) => {
    call("/book", "PUT", item).then((response) =>{setUpdateBookItem(response.data)});
    call("/book", "GET", null).then((response) => setBookList(response.data));
  };

  //테이블에 보여줄 책 객체가 있어야 함
  let bookItems = bookList.length > 0 && (
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
        {bookList.map((item) => (
          <Book item={item} />
        ))}
      </tbody>
    </table>
  );

  //검색 결과를 보여줄 책 객체
  let searchItem = getBookItem[0];
  let updateToGetbookItem = updateToGetItem[0];
  let updateItem = updateBookItem[0];


  return (
    <div className="App">
      {/**현재 제품 리스트를 보여주는 UI */}
      <h1>Book item table</h1>
      <div className="BookList">{bookItems}</div>

      {/**제품 추가 */}
      <h1>Book add</h1>
      <AddBook addItem={callAddItem} />

      {/**제품 검색 */}
      <h1>Book search</h1>
        <GetBook searchItem={callGetItem} searchResults={searchItem} />

        {/**제품 수정 */}
      <h1>Book update</h1>
        <UpdateBook updateToGetItem={callUpdateToGetItem} searchResults={updateToGetbookItem} searchItem={callUpdateItem} updateItem={updateItem}/>
    </div>
  );
}

export default App;
