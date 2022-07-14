import React, { useEffect, useState, useRef } from "react";
import { nanoid } from "nanoid";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../firebase";

function TableItems({ index, tableItem, onChangeItem }) {
  // Add a new document with a generated id.
  return (
    <>
      <tr>
        <td>
          <input type="text" required />
        </td>
        <td>
          <input
            type="number"
            value={tableItem.price}
            onChange={(e) => onChangeItem(index, "price", e.target.value)}
          />
        </td>
        <td>
          <input
            type="number"
            value={tableItem.quantity}
            onChange={(e) => onChangeItem(index, "quantity", e.target.value)}
          />
        </td>
        <td>{Number(tableItem.price) * Number(tableItem.quantity)}</td>
      </tr>
    </>
  );
}

function TableSheet() {
  const [tableItem, setTableItem] = useState([
    {
      price: 0,
      quantity: 0,
    },
  ]);
  const val = useRef(false) //preventing useEffect for the addData function to render in 

  const onChangeItem = (index, type, value) => {
    const newTable = tableItem.map((item, idx) => {
      if (idx === index)
        return {
          ...item,
          [type]: value,
        };
      return item;
    });
    setTableItem(newTable);
  };

  useEffect(() => {
    if (val.current){
      
      async function addData() {
        const docRef = await addDoc(collection(db, "cities"), {
          name: "Tokyo",
          country: "Japan",
        });
      }
      try {
        addData()
        console.log('added data success')
      } catch (error) {
        console.log(error);
      }
    } else {
      val.current = true
    }
  }, [tableItem.length]);
  console.log(tableItem.length)
  const addCell = () => {
    setTableItem((t) => [
      ...t,
      {
        price: 0,
        quantity: 0,
      },
    ]);
    console.log(val)
  };

  const totalPrice = tableItem.reduce((acc, cur) => {
    acc += Number(cur.price) * Number(cur.quantity);
    return acc;
  }, 0);

  return (
    <div>
      <table>
        <thead>
          <th>Item Description</th>
          <th>Price</th>
          <th>Qty.</th>
          <th>Total</th>
        </thead>
        {tableItem.map((tableItem, index) => {
          return (
            <TableItems
              // key={key}
              index={index}
              tableItem={tableItem}
              onChangeItem={onChangeItem}
            />
          );
        })}
      </table>
      <button onClick={addCell}>add new item +</button>
      <div>Total: {totalPrice}</div>
    </div>
  );
}

export default TableSheet;
