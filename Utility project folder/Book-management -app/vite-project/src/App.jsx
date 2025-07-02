import BookList from "./components/BookList";
import { Books } from "./utils/mockData";
import "./components/style.css";
import { useState } from "react";

function App() {
  const [searchText,setSearchText]= useState("");

  const[filteredBooks,setFilteredBooks]=useState(Books);

  function handleSearch(){
      const filtertheBooks=Books.filter(book => book.title.toLowerCase().includes(searchText.toLowerCase()));

      setFilteredBooks(filtertheBooks);
  }

  return (
    <>
    <div className="search">
      <h2>Search Books</h2>
      <div>
        <input type="text" name="" id="" className="search-input" onChange={(e) => setSearchText(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      </div>
      
    </div>
      <BookList booksData = {filteredBooks}/>
   
    </>
  )
}

export default App
