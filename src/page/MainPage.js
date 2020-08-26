import React, { useState } from 'react';
import Todolist from '../components/Todolist';
import shortid from 'shortid';
import Form from '../components/Form';

const MainPage = () => {
  const [newItem, setItem] = useState({
    value: '',
    id: '',
  });

  const [addItem, setAddItem] = useState({
    list: sessionStorage.getItem('addedItem')
      ? JSON.parse(sessionStorage.getItem('addedItem'))
      : [],
  });

  const newItemHandler = (event) => {
    setItem({
      value: event.target.value,
      id: shortid.generate(),
      trigger: false,
    });
  };

  const newItemTrigger = (e) => {
    e.preventDefault();
    const newItems = addItem.list.slice();
    if (newItem.value) {
      newItems.push({ value: newItem.value, id: newItem.id, trigger: false });
      setAddItem((preState) => {
        return {
          ...preState,
          list: newItems,
        };
      });
      localStorage.setItem('addedItem', JSON.stringify(addItem));
      setItem({
        value: '',
        id: '',
      });
      sessionStorage.setItem('addedItem', JSON.stringify(newItems));
    }
  };

  const deleteItemHandler = (id) => {
    const deleteItem = addItem.list.filter((item) => {
      return item.id !== id;
    });

    setAddItem((preState) => {
      return {
        ...preState,
        list: deleteItem,
      };
    });
    sessionStorage.setItem('addedItem', JSON.stringify(deleteItem));
  };

  const editItemHandler = (id) => {
    const editItem = addItem.list.filter((item) => {
      return item.id !== id;
    });

    const selectedItem = addItem.list.find((item) => item.id === id);
    setAddItem((preState) => {
      return {
        ...preState,
        list: editItem,
      };
    });

    setItem({
      value: selectedItem.value,
    });
    sessionStorage.setItem('addedItem', JSON.stringify(editItem));
  };

  const finishedHandler = (id) => {
    const newItems = addItem.list.slice();
    const selectedItem = addItem.list.find((item) => item.id === id);
    const selectedIndex = addItem.list.findIndex((item) => {
      return item.id === id;
    });
    newItems[selectedIndex] = {
      ...newItems[selectedIndex],
      trigger: !selectedItem.trigger,
    };
    setAddItem((prevState) => {
      return {
        ...prevState,
        list: newItems,
      };
    });
    sessionStorage.setItem('addedItem', JSON.stringify(newItems));
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
            {addItem.list.map((store) => {
              return (
                <Todolist
                  value={store.value}
                  key={store.id}
                  id={store.id}
                  onDelete={deleteItemHandler}
                  onEdit={editItemHandler}
                  checkStyle={store.trigger && 'check-style check-color'}
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
