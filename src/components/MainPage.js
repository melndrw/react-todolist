import React, { useState } from 'react';
import Todolist from './Todolist';
import shortid from 'shortid';

const MainPage = () => {
  const [newItem, setItem] = useState({
    value: '',
    id: '',
  });

  const [addItem, setAddItem] = useState(
    JSON.parse(localStorage.getItem('addedItem'))
  );

  const newItemHandler = (event) => {
    setItem({ value: event.target.value, id: shortid.generate() });
  };

  const newItemTrigger = (e) => {
    e.preventDefault();
    if (newItem.value) {
      setAddItem((preState) => {
        return [...preState, { value: newItem.value, id: newItem.id }];
      });
      setItem({
        value: '',
        id: '',
      });
      localStorage.setItem('addedItem', JSON.stringify(addItem));
    }
  };

  const deleteItemHandler = (id) => {
    const deleteItem = addItem.filter((item) => {
      return item.id !== id;
    });

    setAddItem(deleteItem);
    localStorage.setItem('addedItem', JSON.stringify(deleteItem));
  };

  const editItemHandler = (id) => {
    const editItem = addItem.filter((item) => {
      return item.id !== id;
    });

    const selectedItem = addItem.find((item) => item.id === id);

    setAddItem(editItem);
    setItem({
      value: selectedItem.value,
    });
  };

  return (
    <div className="mainpage__container">
      <header className="mainpage__header">
        <a href="#!">React Todo List</a>
      </header>
      <main className="mainpage__main">
        <div className="mainpage__main--content">
          <div className="mainpage__main--title">
            <p>
              todo<span>list</span>
            </p>
            <p>A simple todolist app built with React Hooks & Context</p>
          </div>
          <div>
            <form onSubmit={newItemTrigger}>
              <input
                type="text"
                onChange={newItemHandler}
                placeholder="Add you list here..."
                id="input"
                value={newItem.value}
              />
              <button type="submit" className="todolist__button"></button>
            </form>
          </div>
          <div className="todolist__container">
            {addItem.map((store) => {
              return (
                <Todolist
                  value={store.value}
                  key={store.id}
                  id={store.id}
                  onDelete={deleteItemHandler}
                  onEdit={editItemHandler}
                />
              );
            })}
          </div>
        </div>
      </main>
      <footer className="mainpage__footer">All rights reserved</footer>
    </div>
  );
};

export default MainPage;
