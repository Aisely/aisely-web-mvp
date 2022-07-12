import React, { useState, useEffect } from 'react'
import TableItems from './TableItems'

function TableSheet() {
  const [tableItem, setTableItem] = useState([1]);
  const [item, setItem] = useState('')
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);
  const [total, setTotal] = useState([]);
  
  
  //addition of price and qty
  useEffect(() => {
    const x = Number(price) * Number(qty)
    setTotal(x)
  return () => {
          
      };
  }, [price, qty, total]);
  
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
          <tr>
              <td><input type='text' required/></td>
              <td><input type='number' value={price} onChange={(e) => setPrice(e.target.value)}/></td>
              <td><input type='number' value={qty} onChange={(e) => setQty(e.target.value)}/></td>
              <td>{total}</td>
          </tr>
          <tr>
              <td><input type='text' required/></td>
              <td><input type='number' value={price} onChange={(e) => setPrice(e.target.value)}/></td>
              <td><input type='number' value={qty} onChange={(e) => setQty(e.target.value)}/></td>
              <td>{total}</td>
          </tr>
          <tr>
              <td><input type='text' required/></td>
              <td><input type='number' value={price} onChange={(e) => setPrice(e.target.value)}/></td>
              <td><input type='number' value={qty} onChange={(e) => setQty(e.target.value)}/></td>
              <td>{total}</td>
          </tr>
          <tr>
              <td><input type='text' required/></td>
              <td><input type='number' value={price} onChange={(e) => setPrice(e.target.value)}/></td>
              <td><input type='number' value={qty} onChange={(e) => setQty(e.target.value)}/></td>
              <td>{total}</td>
          </tr>
          <tr>
              <td><input type='text' required/></td>
              <td><input type='number' value={price} onChange={(e) => setPrice(e.target.value)}/></td>
              <td><input type='number' value={qty} onChange={(e) => setQty(e.target.value)}/></td>
              <td>{total}</td>
          </tr>
          <tr>
              <td><input type='text' required/></td>
              <td><input type='number' value={price} onChange={(e) => setPrice(e.target.value)}/></td>
              <td><input type='number' value={qty} onChange={(e) => setQty(e.target.value)}/></td>
              <td>{total}</td>
          </tr>
          <tr>
              <td><input type='text' required/></td>
              <td><input type='number' value={price} onChange={(e) => setPrice(e.target.value)}/></td>
              <td><input type='number' value={qty} onChange={(e) => setQty(e.target.value)}/></td>
              <td>{total}</td>
          </tr>
          <tr>
              <td><input type='text' required/></td>
              <td><input type='number' value={price} onChange={(e) => setPrice(e.target.value)}/></td>
              <td><input type='number' value={qty} onChange={(e) => setQty(e.target.value)}/></td>
              <td>{total}</td>
          </tr>
          <tr>
              <td><input type='text' required/></td>
              <td><input type='number' value={price} onChange={(e) => setPrice(e.target.value)}/></td>
              <td><input type='number' value={qty} onChange={(e) => setQty(e.target.value)}/></td>
              <td>{total}</td>
          </tr>
          <tr>
              <td><input type='text' required/></td>
              <td><input type='number' value={price} onChange={(e) => setPrice(e.target.value)}/></td>
              <td><input type='number' value={qty} onChange={(e) => setQty(e.target.value)}/></td>
              <td>{total}</td>
          </tr>
          <tr>
              <td><input type='text' required/></td>
              <td><input type='number' value={price} onChange={(e) => setPrice(e.target.value)}/></td>
              <td><input type='number' value={qty} onChange={(e) => setQty(e.target.value)}/></td>
              <td>{total}</td>
          </tr>
          <tr>
              <td><input type='text' required/></td>
              <td><input type='number' value={price} onChange={(e) => setPrice(e.target.value)}/></td>
              <td><input type='number' value={qty} onChange={(e) => setQty(e.target.value)}/></td>
              <td>{total}</td>
          </tr>
        </table>
        <button onClick={addCell}>+</button>
    </div>
  )
}


export default TableSheet