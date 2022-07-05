import React, {useState, useEffect} from 'react'
import styles from './tablesheet.module.css'
import TableItems from './TableItems'

function TableSheet() {
  const [tableItem, setTableItem] = useState([1])
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);
  const [value, setValue] = useState('');
  
  useEffect(() => {
          const x = Number(price) * Number(qty)
          setValue(x)
          
      return () => {
          
      };
  }, [price, qty]);

  const addCell = () => {
    console.log('remove')
    setTableItem((t) => [...t, Number(t) + 1])
    console.log(tableItem)
  }

  return (
    <div>
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
              tableItem.map((item, index) => {
                return <TableItems key={index} item={item} />
              })
            }
          <button onClick={addCell}>+</button>
        </table>
      </div>
    </div>
  )
}

export default TableSheet