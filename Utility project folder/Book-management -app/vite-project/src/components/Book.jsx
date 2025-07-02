import "./style.css";

function Book(props) {
  console.log("props",props)
  return (
    <div className="book-card">
     <img src={props.bookDetails.coverImage} alt="" height="200px" width="200px" className="book-cover" />
        <div className="book-details">
          <h2 className="book-title">{props.bookDetails.title}</h2>
          <p className="book-author">{props.bookDetails.author}</p>
          <p className="book-description">{props.bookDetails.description}</p>
        </div>
    </div>
  )
}

export default Book;