import React, { useState } from 'react';
import Todolist from '../components/Todolist';
import shortid from 'shortid';
import Form from '../components/Form';
import Header from '../components/Header';
import MainTitle from '../components/MainTitle';

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
    });
  };

  const newItemTrigger = (e) => {
    e.preventDefault();
    const newItems = addItem.list.slice();
    if (newItem.value) {
      newItems.push({
        value: newItem.value,
        id: newItem.id,
        trigger: false,
        animate: true,
      });
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

  function finder(id) {
    const newItems = addItem.list.slice();
    const selectedItem = addItem.list.find((item) => item.id === id);
    const selectedIndex = addItem.list.findIndex((item) => item.id === id);

    return { newItems, selectedItem, selectedIndex };
  }

  const deleteItemHandler = (id) => {
    const find = finder(id);
    find.newItems[find.selectedIndex] = {
      ...find.newItems[find.selectedIndex],
      animate: !find.selectedItem.animate,
    };

    setAddItem((prevState) => {
      return {
        ...prevState,
        list: find.newItems,
      };
    });

    const deleteItem = find.newItems.filter((item) => {
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
    const find = finder(id);
    find.newItems[find.selectedIndex] = {
      ...find.newItems[find.selectedIndex],
      animate: !find.selectedItem.animate,
    };

    setAddItem((prevState) => {
      return {
        ...prevState,
        list: find.newItems,
      };
    });
    const deleteItem = find.newItems.filter((item) => {
      return item.id !== id;
    });
    setAddItem((preState) => {
      return {
        ...preState,
        list: deleteItem,
      };
    });
    setItem({
      value: find.selectedItem.value,
    });
    sessionStorage.setItem('addedItem', JSON.stringify(deleteItem));
  };

  const finishedHandler = (id) => {
    const find = finder(id);
    find.newItems[find.selectedIndex] = {
      ...find.newItems[find.selectedIndex],
      trigger: !find.selectedItem.trigger,
    };
    setAddItem((prevState) => {
      return {
        ...prevState,
        list: find.newItems,
      };
    });
    sessionStorage.setItem('addedItem', JSON.stringify(find.newItems));
  };

  return (
    <div className="mainpage__container">
      <Header />
      <main className="mainpage__main">
        <div className="mainpage__main--content">
          <MainTitle />
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
