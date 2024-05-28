"use client"
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { LayoutList } from '@/components/ui/layoutList';
import { LayoutColumn } from '@/components/ui/layoutColumn';
import Link from 'next/link';
import CountdownTimer from '@/components/ui/countdown';

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
  const timeoutIdsRef = useRef<Array<number | NodeJS.Timeout>>([]);

  const startTimeout = (callback: () => void, delay: number) => {
    const timeoutId = setTimeout(() => {
      callback();
      clearTimeout(timeoutId);
      timeoutIdsRef.current = timeoutIdsRef.current.filter(id => id !== timeoutId);
    }, delay);
    timeoutIdsRef.current = [...timeoutIdsRef.current, timeoutId];
  };
  
  const cancelTimeout = (item: Item) => {
    const index = tempList.findIndex(i => i === item)
    const timeoutId = timeoutIdsRef.current[index];
    if (timeoutId) {
      clearTimeout(timeoutId as NodeJS.Timeout);
      timeoutIdsRef.current = timeoutIdsRef.current.filter(id => id !== timeoutId);
    }
  };

  // const [timeoutIds, setTimeoutIds] = useState<Array<number | NodeJS.Timeout>>([]);
  
  // const startTimeout = (callback: () => void, delay: number) => {
  //   const timeoutId = setTimeout(() => {
  //     callback();
  //     clearTimeout(timeoutId);
  //     setTimeoutIds(prevIds => prevIds.filter(id => id !== timeoutId));
  //   }, delay);
  //   setTimeoutIds(prevIds => [...prevIds, timeoutId]);
  // };
  
  // const cancelTimeout = (item: Item) => {
  //   const index = tempList.findIndex(i => i === item)
  //   const timeoutId = timeoutIds[index];
  //   if (timeoutId) {
  //     clearTimeout(timeoutId as NodeJS.Timeout);
  //     setTimeoutIds(prevIds => prevIds.filter(id => id !== timeoutId));
  //   }
  // };

  const afterTimeout = (item: Item) => {  
    setTempList(prevTemp => prevTemp.filter(i => i !== item));
    setListItems((prevList) => prevList.includes(item) ? prevList : [...prevList, item]);
  };

  const handleMove = (item: Item) => {
    setTempList((prevTemp) => [...prevTemp, item]);
    setListItems((prevList) => prevList.filter((i) => i !== item));
    startTimeout(() => afterTimeout(item), 5000);
  };
  
   const handleMoveBack = (item: Item) => {
    cancelTimeout(item);
    setTempList((prevTemp) => prevTemp.filter((i) => i !== item));
    setListItems((prevList) => [...prevList, item]);
  };

  return (
    <main className='relative min-w-[360px] w-full flex items-center justify-center py-8 sm:py-10 overflow-x-hidden'>

      <Link href="/">
        <div className='absolute top-4 left-6 w-16 h-8 sm:h-10 rounded-md bg-transparent bg-white hover:bg-[#f6f8fa] active:bg-[#eff1f3] shadow-md overflow-hidden flex items-center justify-center gap-x-2 duration-100 border-[1px] border-solid border-gray-200 text-[16px] sm:text-[18px]'>
          Back
        </div>
      </Link>

      <div className="w-full sm:w-[1200px] p-6">
        <div className='grid grid-cols-3 gap-4 sm:gap-8'>
          <LayoutList>
              {listItems?.map((item, index) => (
                <Button
                  key={index}
                  onClick={() => handleMove(item)}
                >
                  <p className='text-[14px] sm:text-[24px] font-[500] flex items-center justify-center'>{item.name}</p>
                </Button>
              ))}
          </LayoutList>

          <LayoutColumn text={"Fruit"}>
            {tempList?.filter(item => item.type === "Fruit").map((item, index) => (
              <Button
                key={index}
                onClick={() => handleMoveBack(item)}
              >
                <p className='text-[14px] sm:text-[24px] font-[500] flex items-center justify-center'>{item.name}</p>
                {/* <CountdownTimer duration={5} item={index.toString()}/> */}
              </Button>
            ))}
          </ LayoutColumn>

          <LayoutColumn text={"Vegetable"}>
            {tempList?.filter(item => item.type === "Vegetable").map((item, index) => (
              <Button
                key={index}
                onClick={() => handleMoveBack(item)}
              >
                <p className='text-[14px] sm:text-[24px] font-[500] flex items-center justify-center'>{item.name}</p>
                {/* <CountdownTimer duration={5} item={index.toString()}/> */}
              </Button>
            ))}
          </ LayoutColumn>
        </div>
      </div>

    </main>
  );
};

export default TodoList;
