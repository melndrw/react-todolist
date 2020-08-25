import React, { useState } from 'react';
import Todolist from './Todolist';
import shortid from 'shortid';

const MainPage = () => {
  const [newItem, setItem] = useState({
    value: '',
    id: '',
  });

  const [addItem, setAddItem] = useState([]);

  const newItemHandler = (event) => {
    setItem({ value: event.target.value, id: shortid.generate() });
  };

  const newItemTrigger = () => {
    // let input = document.querySelector('#input');
    // input.addEventListener('keydown', (e) => {
    //   if (e.keyCode === 13) {
    //     console.log(e.target.value);
    //   }
    // });

    if (newItem.value) {
      setAddItem((preState) => {
        return [...preState, { value: newItem.value, id: newItem.id }];
      });
      setItem({
        value: '',
        id: '',
      });
    }
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
            <p>
              A simple todolist app built with React Hooks &{' '}
              <span onClick={newItemTrigger} id="sp">
                Context
              </span>
            </p>
          </div>
          <div>
            <input
              type="text"
              onChange={newItemHandler}
              placeholder="Add you list here..."
              id="input"
              value={newItem.value}
            />
          </div>
          <div className="todolist__container">
            {addItem.map((store) => {
              return <Todolist value={store.value} key={store.id} />;
            })}
          </div>
        </div>
      </main>
      <footer className="mainpage__footer">All rights reserved</footer>
    </div>
  );
};

export default MainPage;
