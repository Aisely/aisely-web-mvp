import React, { useEffect, useState, useRef } from "react";
import { nanoid } from "nanoid";
import { collection, addDoc, updateDoc, setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebase";

function TableItems({ index, tableItem, onChangeItem , inputProduct}) {
  
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
        <td>
          {Number(tableItem.price) * Number(tableItem.quantity)}
        </td>
      </tr>
    </>
  );
}

function TableSheet() {
  const [ localStoreValues, setLocalStoreValues] = useState([])
  const [ localStorageTable, setLocalStorageTable ] = useState([])
  const inputProduct = useRef(null);
  const val = useRef(false); //preventing useEffect for the addData function to render at initial render
  const val1 = useRef(false); //helps as a condition switcher. It will help with making sure the adding data to local storage functionality only runs once a table is added
  const [ tableItem, setTableItem ] = useState([
    // {
    //   price: 0,
    //   quantity: 0,
    // },
  ]);
  const data123 = useRef([])

  //persisting target value individually for each change of input (reupdating value algorithm)
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
    setLocalStorageTable(newTable)
    setLocalStoreValues(newTable)
  };

  useEffect(() => {

  if (val1.current) {
    console.log('run')
    const obj = localStorageTable.reduce(( t, value, index) => {
      return {...t, [index]: value}
    }, {})
    window.localStorage.setItem("store", JSON.stringify(obj));
  }
  })
  

  //add a new item(new table row)
  const addCell = () => {
    val1.current = true
    setTableItem((t) => [
      ...t,
      {
        product: '',
        price: 0,
        quantity: 0,
        total: 0,
      },
    ]);
    setLocalStorageTable((t) => [
      ...t,
      {
        product: '',
        price: 0,
        quantity: 0,
        total: 0,
      },
    ]);
    setLocalStoreValues((t) => [
      ...t,
      {
        product: '',
        price: 0,
        quantity: 0,
        total: 0,
      },
    ]);
  };

  //generate doc
  const generateDoc = () => {
    window.localStorage.removeItem("store");
  }

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
      async function addDataToDb() {
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
        // addDataToDb();
        console.log("added data success");
      } catch (error) {
        console.log("error firebase", error);
      }
    } else {
      val.current = true;
      console.log("e no run");
    }
  }, [tableItem.length]);

  //total price of all products
  const totalPrice = tableItem.reduce((acc, cur) => {
    acc += Number(cur.price) * Number(cur.quantity);
    return acc;
  }, 0);

  //local storage
  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("store"));
    
    if (data) {
      const data = JSON.parse(window.localStorage.getItem("store"));
      const values = Object.values(data)
      console.log(values)

      const obj = localStoreValues.reduce(( t, value, index) => {
        return {...t, [index]: value}
      }, {})
      console.log('obj', obj)
      window.localStorage.setItem("store", JSON.stringify(obj));
    
    } else {

        if (val1.current) {
          console.log(localStorageTable)
          const obj = localStorageTable.reduce(( t, value, index) => {
            return {...t, [index]: value}
          }, {})
          window.localStorage.setItem("store", JSON.stringify(obj));
          
          const newData = JSON.parse(window.localStorage.getItem("store"));
          
          const values = Object.values(newData)
          setLocalStoreValues(values)
        
        } else {

        }
        
      }

  }, [tableItem.length])
    

  return (
    <div>
      <table style={{ width: "100vw", border: "1px solid black" }}>
        <thead>
          <th>Item Description</th>
          <th>Price</th>
          <th>Qty.</th>
          <th>Total</th>
        </thead>
        {localStoreValues.map((tableItem, index) => {
          return (
            <TableItems
              index={index}
              tableItem={tableItem}
              onChangeItem={onChangeItem}
              inputProduct={inputProduct}
            />
          );
        })}
      </table>
      <button onClick={addCell}>add new item +</button>
      <div>Total: {totalPrice}</div>
      <button onClick={generateDoc}>generate</button>
    </div>
  );
}

export default TableSheet;