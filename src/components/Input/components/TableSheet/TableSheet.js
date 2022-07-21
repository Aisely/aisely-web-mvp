import React, { useEffect, useState, useRef } from "react";
import { nanoid } from "nanoid";
import { collection, addDoc, updateDoc, setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebase";

function TableItems({ index, tableItem, onChangeItem , inputProduct, onChangeInput}) {
  
return (
    <>
      <tr>
        <td>
          <input 
            ref={inputProduct}
            style={{ width: "50px" }} 
            type="text"
            required 
            onChange={(e) => onChangeItem(index, "product", e.target.value)}
            onBlur={(e) => onChangeInput(index, e.target.value)}
          />
        </td>
        <td>
          <input
            style={{ width: "50px" }}
            type="number"
            value={tableItem.price}
            onChange={(e) => onChangeItem(index, "price", e.target.value)}
          />
        </td>
        <td>
          <input
            style={{ width: "50px" }}
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
  const [id, setId] = useState([]);
  const [product, setProduct] = useState([]);
  const [newProduct, setNewProduct] = useState([]);
  const inputProduct = useRef(null);
  const [tableItem, setTableItem] = useState([
    // {
    //   price: 0,
    //   quantity: 0,
    // },
  ]);
  const val = useRef(false); //preventing useEffect for the addData function to render in

  const onChangeInput = (index, value) => {
  if (document.activeElement === inputProduct.current) {
    // setProduct((t) => [...t, value])
    console.log(index)
  } else {
  }
  }

  //updating each input from the db when changed
  const updateWithNewTable = async (index, type, value) => {
    if (type === "quantity") {
      var quantity = type;
    } else {
      var price = type;
    }
    // const ref = doc(db, "invoice", index.toString());
    // await updateDoc(ref, {
    //   quantity: value,
    //   price: value,
    //   product: value,
    // });
  };

  //persisting target value individually for each change of input
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
    updateWithNewTable(index);
  };

  //add a new item(new table row)
  const addCell = () => {
    setTableItem((t) => [
      ...t,
      {
        product: '',
        price: 0,
        quantity: 0,
      },
    ]);
    setId((t) => [...t, nanoid()]);
  };

  //add table data to db
  useEffect(() => {
    const dbItems = tableItem.map((item, index) => ({
      ...item,
      index,
      product: item.product,
      price: item.price,
      quantity: item.quantity,
      total: item.price * item.quantity,
    }));
    if (val.current) {
      async function addData() {
        const id = dbItems[dbItems.length - 1].index;
        const x = dbItems[dbItems.length - 1];
        console.log(dbItems)
        await setDoc(doc(db, "invoice", id.toString()), {
          index: x.index,
          product: x.product,
          price: x.price,
          quantity: x.quantity,
          total: x.total,
        });
      }
      try {
        addData();
        console.log("added data success");
      } catch (error) {
        console.log("error firebase", error);
      }
    } else {
      val.current = true;
      console.log("e no run");
    }
  }, [tableItem.length]);

  //arithmetic multiplication of price and quantity
  const totalPrice = tableItem.reduce((acc, cur) => {
    acc += Number(cur.price) * Number(cur.quantity);
    return acc;
  }, 0);

  return (
    <div>
      <table style={{ width: "100vw", border: "1px solid black" }}>
        <thead>
          <th>Item Description</th>
          <th>Price</th>
          <th>Qty.</th>
          <th>Total</th>
        </thead>
        {tableItem.map((tableItem, index) => {
          return (
            <TableItems
              index={index}
              tableItem={tableItem}
              onChangeItem={onChangeItem}
              onChangeInput={onChangeInput}
              inputProduct={inputProduct}
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
