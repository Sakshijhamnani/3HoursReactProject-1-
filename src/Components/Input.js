import React, { useState, useEffect } from 'react';
import Order from './Order';

const Input = () => {
  const [id, setId] = useState('');
  const [price, setPrice] = useState('');
  const [dishName, setDishName] = useState('');
  const [table, setTable] = useState('');

  const [table1Data, setTable1Data] = useState([]);
  const [table2Data, setTable2Data] = useState([]);
  const [table3Data, setTable3Data] = useState([]);

  const changeIdHandler = (e) => {
    setId(e.target.value);
  };

  const changePriceHandler = (e) => {
    setPrice(e.target.value);
  };

  const changeDishHandler = (e) => {
    setDishName(e.target.value);
  };

  const changeTableHandler = (e) => {
    setTable(e.target.value);
    console.log(e.target.value)
  };

  const submitHandler = (event) => {
    event.preventDefault();

   
    const currentTable = table;

    const newData = {
      id,
      price,
      dishName,
      table: currentTable,
    };

    console.log('data-->',newData)

   
   if (newData.table === 'table1') {
      setTable1Data((prevData) => [...prevData, newData]);
    }
    if (newData.table === 'table2') {
        setTable2Data((prevData) => [...prevData, newData]);
      }
      if (newData.table === 'table3') {
        setTable3Data((prevData) => [...prevData, newData]);
      }
      

   
    setId('');
    setPrice('');
    setDishName('');
    setTable('select');
  };

//   useEffect(() => {
//     console.log(table1Data);
//     console.log(table1Data)
//     console.log(table3Data)
   
//   }, [table1Data,table2Data,table3Data]);

const deleteHandler=(table,index)=>{
   if(table==='table1'){
    setTable1Data((prevData)=>prevData.filter((_,i)=>i!==index))
   }
   if(table==='table2'){
    setTable2Data((prevData)=>prevData.filter((_,i)=>i!==index))
   }
   if(table==='table2'){
    setTable3Data((prevData)=>prevData.filter((_,i)=>i!==index))
   }
}

  return (
    <>
    <form>
      <label htmlFor='id'>Unique Order Id:</label>
      <input type='number' id='id' name='id' value={id} onChange={changeIdHandler} />

      <label htmlFor='price'>Choose Price:</label>
      <input type='number' id='price' name='price' value={price} onChange={changePriceHandler} />

      <label htmlFor='dish'>Choose Dish:</label>
      <input type='text' id='dish' name='dish' value={dishName} onChange={changeDishHandler} />

      <label htmlFor='dropdown'>Select an option:</label>
      <select id='dropdown' onChange={changeTableHandler} value={table}>
        <option value="select">Select</option>
        <option value='table1'>Table 1</option>
        <option value='table2'>Table 2</option>
        <option value='table3'>Table 3</option>
      </select>

      <button onClick={submitHandler}>Add to bill</button>
    </form>

    <Order 
    table1Data={table1Data} 
    table2Data={table2Data} 
    table3Data={table3Data} 
    deleteHandler={deleteHandler} />
    </>
  );
};

export default Input;
