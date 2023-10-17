import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const Booklist = () => {
  return (
    <section className="booklist">
      <Book name="j" />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

const Book = () => {
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/91ke43dIxkL._SY522_.jpg"
        alt="Iron Flame (The Empyrean, 2)"
      />
      <h2>Iron Flame (The Empyrean, 2)</h2>
      <h4>Rebecca Yarros</h4>
    </article>
  );
};

root.render(<Booklist />);
