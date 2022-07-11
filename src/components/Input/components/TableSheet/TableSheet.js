import React, { useState } from 'react'
import TableItems from './TableItems'

function TableSheet() {
  const [tableItem, setTableItem] = useState([1]);
  // const [total, setTotal] = useState([]);
  
  
  //addition of price and qty
  // useEffect(() => {
  //   const x = Number(price) * Number(qty)
  //   setTotal(x)
  // return () => {
          
  //     };
  // }, [price, qty, total]);
  
  //adding a new table cell (table row)
  const addCell = () => {
    setTableItem((t) => [...t, t + 1])
  }

  return (
    <div>
      <table>
          <thead>
            <th>Item Description</th>
            <th>Price</th>
            <th>Qty.</th>
            <th>Total</th>
          </thead>
            {
              tableItem.map((tableItem, index, setItem) => {
                return <TableItems key={index} tableItem={tableItem} setItem={setItem} addCell={addCell}/>
              })
            }
        </table>
        <button onClick={addCell}>+</button>
    </div>
  )
}


export default TableSheet