import React, {useState, useEffect } from 'react'
// import styles from './tablesheet.module.css'
import TableItems from './TableItems'

function TableSheet() {
  const [tableItem, setTableItem] = useState([1])
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);
  const [total, setTotal] = useState([]);

useEffect(() => {
    const x = Number(price) * Number(qty)
    setTotal(x)
    // console.log(`price: ${price} qty: ${qty} total: ${total}`)

  return () => {
          
      };
  }, [price, qty, total]);

  const addCell = () => {
    setTableItem((t) => [...t, t + 1])
    console.log(tableItem)
  }

  const generateDoc = () => {
    
  }
  
  return (
    <div>
        <button onClick={generateDoc}>GENERATE DOC</button>
      <div className=''>
      <table>
          <thead>
            <th>Item Description</th>
            <th>Price</th>
            <th>Qty.</th>
            <th>Total</th>
          </thead>
          {/* <tr>
            <td>1<input type='text' required/></td>
            <td><input type='number' value={price} onChange={(e) => setPrice(e.target.value)}/></td>
            <td><input type='number' value={qty} onChange={(e) => setQty(e.target.value)}/></td>
            <td>{value}</td>
          </tr> */}
            {
              tableItem.map((tableItem, index, setItem) => {
                return <TableItems key={index} tableItem={tableItem} setItem={setItem}/>
              })
            }
        </table>
          <button onClick={addCell}>+</button>
      </div>
    </div>
  )
}

export default TableSheet