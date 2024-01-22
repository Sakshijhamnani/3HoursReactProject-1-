import React from 'react'

const Order = (props) => {

    const deleteHandler=(table,index)=>{
        console.log(table)
        props.deleteHandler(table,index)
     
    }
  return (
   <>
   <h2>Orders</h2>
   <h3>Table 1</h3>
   {
    props.table1Data.map((data,index)=>{
        return (<li key={index}>{data.price}- {data.table}-{data.dishName}  <button onClick={(e) => { e.preventDefault(); deleteHandler('table1', index); }}>Delete Order</button></li>)
})
   }
   <h3>Table 2</h3>
   {
    props.table2Data.map((data,index)=>{
        return (<li key={index}>{data.price}- {data.table}-{data.dishName}  <button onClick={(e) => { e.preventDefault(); deleteHandler('table2', index); }}>Delete Order</button></li>)
})
   }
   <h3>Table 3 </h3>
   {
    props.table3Data.map((data,index)=>{
        return (<li key={index}>{data.price}- {data.table}-{data.dishName}  <button onClick={(e) => { e.preventDefault(); deleteHandler('table3', index); }}>Delete Order</button></li>)
})
   }
   </>
  )
}

export default Order