import React, { useState } from "react";

function TableItems({ index, tableItem, onChangeItem }) {
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
      quantity: 0
    }
  ]);

  const onChangeItem = (index, type, value) => {
    const newTable = tableItem.map((item, idx) => {
      if (idx === index)
        return {
          ...item,
          [type]: value
        };
      return item;
    });
    setTableItem(newTable);
  };

  const addCell = () => {
    setTableItem((t) => [
      ...t,
      {
        price: 0,
        quantity: 0
      }
    ]);
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
              // key={}
              index={index}
              tableItem={tableItem}
              onChangeItem={onChangeItem}
            />
          );
        })}
      </table>
      <button onClick={addCell}>+</button>
      <div>Total: {totalPrice}</div>
    </div>
  );
}

export default TableSheet;
