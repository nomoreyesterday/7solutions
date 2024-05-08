"use client"
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LayoutList } from '@/components/ui/layoutList';
import { LayoutColumn } from '@/components/ui/layoutColumn';
import Link from 'next/link';

interface Item {
  type: 'Fruit' | 'Vegetable';
  name: string
}

const TodoList = () => {
  const [listItems, setListItems] = useState<Item[]>([
      { type: 'Fruit', name: 'Apple' },
      { type: 'Vegetable', name: 'Broccoli' },
      { type: 'Vegetable', name: 'Mushroom' },
      { type: 'Fruit', name: 'Banana' },
      { type: 'Vegetable', name: 'Tomato' },
      { type: 'Fruit', name: 'Orange' },
      { type: 'Fruit', name: 'Mango' },
      { type: 'Fruit', name: 'Pineapple' },
      { type: 'Vegetable', name: 'Cucumber' },
      { type: 'Fruit', name: 'Watermelon' },
      { type: 'Vegetable', name: 'Carrot' },
    ]
  );

  const [tempList, setTempList] = useState<Item[]>([]);
  
  const handleMove = (item: Item) => {
    setTempList((prevTemp) => prevTemp ? [...prevTemp, item] : [item]);
    setListItems((prevList) => prevList.filter((i) => i !== item));
    
    setTimeout(() => {
      setTempList((prevTemp) => prevTemp ? prevTemp.filter((i) => i !== item) : []);
      setListItems((prevList) => {
        if (!prevList.includes(item)) {
          return [...prevList, item];
        }
        return prevList;
      });
    }, 5000);
  };
  
  const handleMoveBack = (item: Item) => {
    setTempList((prevTemp) => prevTemp ? prevTemp.filter((i) => i !== item) : []);
    setListItems((prevList) => [...prevList, item]);
  };
  
  return (
    <main className='relative flex items-center justify-center py-6 px-20'>
      <Link href="/">
        <div className='absolute top-8 right-8 w-16 h-12 rounded-md bg-transparent bg-white hover:bg-[#f6f8fa] active:bg-[#eff1f3] shadow-md overflow-hidden flex items-center justify-center gap-x-2 duration-100 border-[1px] border-solid border-gray-200'>
          Back
        </div>
      </Link>
      <div className="min-[800px] w-[1200px] p-6">
        <div className='grid grid-cols-3 gap-8'>
          <LayoutList>
              {listItems.map((item, index) => (
                <Button
                  key={index}
                  onClick={() => handleMove(item as Item)}
                >
                  <p className='text-[24px] font-[500] flex items-center justify-center'>{item.name}</p>
                </Button>
              ))}
          </LayoutList>

          <LayoutColumn text={"Fruit"}>
            {tempList?.filter(item => item.type === "Fruit").map((item, index) => (
              <Button
                key={index}
                onClick={() => handleMoveBack(item)}
              >
                <p className='text-[24px] font-[500] flex items-center justify-center'>{item.name}</p>
              </Button>
            ))}
          </ LayoutColumn>

          <LayoutColumn text={"Vegetable"}>
            {tempList?.filter(item => item.type === "Vegetable").map((item, index) => (
              <Button
                key={index}
                onClick={() => handleMoveBack(item)}
              >
                <p className='text-[24px] font-[500] flex items-center justify-center'>{item.name}</p>
              </Button>
            ))}
          </ LayoutColumn>
        </div>
      </div>
    </main>
  );
};

export default TodoList;
