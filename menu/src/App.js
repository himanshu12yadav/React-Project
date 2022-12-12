import React, { useState } from 'react';
import Categories from './components/Categories.components';
import Menu from './components/Menu.components';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App(props) {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  
  console.log(allCategories);

  const filterItem = category => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);

  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItem} />
        <Menu items={menuItems} />
      </section>
    </main>
  )


}

export default App;
