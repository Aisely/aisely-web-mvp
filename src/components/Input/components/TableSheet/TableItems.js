import React, {useState, useEffect} from 'react'

function TableItems({index, tableItem }) {
    const [price, setPrice] = useState(0);
    const [qty, setQty] = useState(0);
    const [total, setTotal] = useState([]);

    useEffect(() => {
        const x = Number(price) * Number(qty)
        setTotal(x)
      return () => {
          
      };
  }, [price, qty, total ]);
    
    return {
        price,
        qty,
        total,
        render: (
        <div>
            <tr>
               <td>{tableItem}<input type='text' required/></td>
                <td><input type='number' value={price} onChange={(e) => setPrice(e.target.value)}/></td>
                <td><input type='number' value={qty} onChange={(e) => setQty(e.target.value)}/></td>
                <td>{total}</td>
            </tr>
        </div>
    )}
}

export default TableItems