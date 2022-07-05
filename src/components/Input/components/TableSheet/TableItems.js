import React, {useState, useEffect} from 'react'

function TableItems({index, item}) {
    const [tableItem, setTableItem] = useState([])
    const [price, setPrice] = useState(0);
    const [qty, setQty] = useState(0);
    const [value, setValue] = useState('');
  
    useEffect(() => {
        const x = Number(price) * Number(qty)
        setValue(x)
          
      return () => {
          
      };
  }, [price, qty]);
    
    return (
        <tr>
           <td>{item}<input type='text' required/></td>
            <td><input type='number' value={price} onChange={(e) => setPrice(e.target.value)}/></td>
            <td><input type='number' value={qty} onChange={(e) => setQty(e.target.value)}/></td>
            <td>{value}</td>
        </tr>
    )
}

export default TableItems