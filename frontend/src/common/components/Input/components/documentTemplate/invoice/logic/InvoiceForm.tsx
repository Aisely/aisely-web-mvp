import React, { useEffect, useState, useRef } from "react";
import { useRouter } from 'next/router'
import { useTableData } from "../../../../../../../contexts/TableDataContext";
import { nanoid } from "nanoid";
import {
  collection,
  addDoc,
  updateDoc,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../../../../../../config/firebase";

function TableItems({ index, tableItem, onChangeItem, inputProduct }) {
  return (
    <>
        {index + 1}
      <tr>
        <td>
          <input
            ref={inputProduct}
            style={{ width: "50px" }}
            type="text"
            required
            value={tableItem.product}
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
        <td>{Number(tableItem.price) * Number(tableItem.quantity)}</td>
      </tr>
    </>
  );
}

function InvoiceForm() {
  const router = useRouter()
  const [localStoreValues, setLocalStoreValues] = useState([]);
  const inputProduct = useRef(null);
  const { setLocalStoreContext } = useTableData()
  const val1 = useRef(false); //helps as a condition switcher. It will help with making sure the adding data to local storage functionality only runs once a table is added
  const [tableItem, setTableItem] = useState([
    // {
    //   price: 0,
    //   quantity: 0,
    // },
  ]);
  const data123 = useRef([]);
  const [isSSR, setIsSSR] = useState(true);

    useEffect(() => {
        setIsSSR(false);
    }, []);

  //persisting target value individually for each change of input (reupdating value algorithm)
  const onChangeItem = (index, type, value) => {
    const newTable = localStoreValues.map((item, idx) => {
      if (idx === index)
        return {
          ...item,
          [type]: value,
        };
      return item;
    });
    setTableItem(newTable);
    setLocalStoreValues(newTable);
  };

  useEffect(() => {
    if (val1.current) {
      const obj = localStoreValues.reduce((t, value, index) => {
        return { ...t, [index]: value };
      }, {});

      if (typeof window !== "undefined") {
        window.localStorage.setItem("store", JSON.stringify(obj));
      }
    }
  });

  //add a new item(new table row)
  const addCell = () => {
    val1.current = true;
    setTableItem((t) => [
      ...t,
      {
        product: "",
        price: 0,
        quantity: 0,
        total: 0,
      },
    ]);
    setLocalStoreValues((t) => [
      ...t,
      {
        product: "",
        price: 0,
        quantity: 0,
        total: 0,
      },
    ]);
  };

  //generate doc
  const generateDoc = () => {
    addData()
    router.push('/generate')
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLocalStoreContext(localStoreValues)
      // window.localStorage.removeItem("store");
    }
  },)
  const addData = () => {
    const dbItems = tableItem.map((item, index) => ({
      ...item,
      index,
      product: item.product,
      price: item.price,
      quantity: item.quantity,
      total: item.price * item.quantity,
    }));
      async function addDataToDb() {
        const id = dbItems[dbItems.length - 1].index + 1;
        const x = dbItems[dbItems.length - 1];
        await setDoc(doc(db, "invoice", id.toString()), {
          invoice: dbItems
        });
      }
      try {
        addDataToDb();
      } catch (error) {
      }
        // window.location.reload()
        setTimeout( () => {
          if (typeof window !== "undefined") {
            // window.location.reload()
          }
        }, 2000)
  }

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
      const values = Object.values(data);

      setLocalStoreValues(values);
      const obj = values.reduce((t, value, index) => {
        return { ...t as object, [index]: value };
      }, {});

      if (typeof window !== "undefined") {
        window.localStorage.setItem("store", JSON.stringify(obj));
      }
    } else {
      if (val1.current) {
        const obj = localStoreValues.reduce((t, value, index) => {
          return { ...t, [index]: value };
        }, {});
        if (typeof window !== "undefined") {
          window.localStorage.setItem("store", JSON.stringify(obj));
        }
        const newData = JSON.parse(window.localStorage.getItem("store"));
        const values = Object.values(newData);
        setLocalStoreValues(values);
      } else {
      }
    }
  }, [tableItem.length]);

  return (
    <>
      { !isSSR &&   <div style={{color: "white", background: "#252828", width: "50%"}}>
        <table style={{ width: "100%", border: "1px solid black" }}>
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
        <button  className="small-btn" style={{background: ""}} onClick={addCell}>add new item +</button>
        <div>Total: {totalPrice}</div>
        {/* <button className="small-btn" onClick={generateDoc}>generate</button> */}
      </div>}
    </>
  );
}

export default InvoiceForm;
