import React, { useState } from 'react';
import Todolist from './Todolist';
import shortid from 'shortid';
import Form from './Form';

const MainPage = () => {
  const [newItem, setItem] = useState({
    value: '',
    id: '',
    trigger: false,
  });

  const [addItem, setAddItem] = useState(
    localStorage.getItem('addedItem')
      ? JSON.parse(localStorage.getItem('addedItem'))
      : []
  );

  console.log(addItem);

  const newItemHandler = (event) => {
    setItem({
      value: event.target.value,
      id: shortid.generate(),
      trigger: false,
    });
  };

  const newItemTrigger = (e) => {
    e.preventDefault();
    if (newItem.value) {
      setAddItem((preState) => {
        return [
          ...preState,
          { value: newItem.value, id: newItem.id, trigger: false },
        ];
      });
      localStorage.setItem('addedItem', JSON.stringify(addItem));
      setItem({
        value: '',
      });
    }
  };

  const deleteItemHandler = (id) => {
    const deleteItem = addItem.filter((item) => {
      return item.id !== id;
    });

    setAddItem(deleteItem);
    localStorage.setItem(
      'addedItem',
      JSON.stringify(
        addItem.filter((item) => {
          return item.id !== id;
        })
      )
    );
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
    localStorage.setItem('addedItem', JSON.stringify(editItem));
  };
  const finishedHandler = (id) => {
    const selectedItem = addItem.find((item) => item.id === id);
    // if (addItem.id === id) {
    //   const element = document.getElementById(id);
    //   element.classList.add('check-style');
    //   key=true;
    //   console.log(key);
    // } else {
    //   const element = document.getElementById(id);
    //   element.classList.remove('check-style');
    //   key=false;
    //   console.log(key);
    // }
    console.log(selectedItem);
  };

  console.log(addItem);
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
            <Form
              placeholder="Add you task here..."
              onSubmit={newItemTrigger}
              onChange={newItemHandler}
              type="text"
              value={newItem.value}
            />
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
                  checkStyle={newItem.trigger && 'check-style'}
                  checkClick={finishedHandler}
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
