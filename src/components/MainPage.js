import React, { useState } from 'react';
import Todolist from './Todolist';
import shortid from 'shortid';

const MainPage = () => {
  const [todolist, setTodolist] = useState({
    value: '',
    storage: [],
  });

  const triggerHandler = () => {
    const todos = todolist.storage.slice();
    let input = document.querySelector('#input');
    input.addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
        todos.push({
          id: shortid.generate(),
          value: event.target.value,
        });
        setTodolist((preState) => {
          return {
            ...preState,
            storage: todos,
            value: '',
          };
        });
      }
    });
  };

  const changeHandler = (event) => {
    setTodolist({ value: event.target.value, storage: todolist.storage });
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
              <span onClick={triggerHandler}>Context</span>
            </p>
          </div>
          <div>
            <input
              type="text"
              onChange={changeHandler}
              placeholder="Add you list here..."
              id="input"
              value={todolist.value}
            />
          </div>
          <div className="todolist__container">
            {todolist.storage.map((store) => {
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
