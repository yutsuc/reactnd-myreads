import React from "react";
import PropTypes from "prop-types";

class BookshelfChanger extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    updateBook: PropTypes.func.isRequired,
  }

  handleUpdateShelf = (event) => {
    let newShelf = event.target.value;
    this.props.updateBook(this.props.book, newShelf);
  }

  render = () => {
    let shelf = this.props.book.shelf ? this.props.book.shelf : "none";
    return (
      <div className="book-shelf-changer">
        <select onChange={this.handleUpdateShelf} value={shelf}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookshelfChanger;