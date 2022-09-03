import React, {useState,useEffect} from 'react'

type DocumentPreviewProps = {
  name: string
  location: string
  localstore: any
}

const InvoiceDocumentPreview = (props: DocumentPreviewProps) => {
  const { name, location, localstore} = props
  const [localStoreValuesArray, setLocalStoreValuesArray] = useState([])
  useEffect(() => {
    if(localstore) {
      setLocalStoreValuesArray(Object.values(localstore))
      }
  }, [localstore])

  return (
    <div style={{'width': '600px', padding: '50px'}}>
      <h1>Doc Preview</h1>
      <div style={{border: "1px solid black", padding: '20px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '30px'}}>
          <div>
            {name ? (
              <h3>Invoice to: <span style={{fontWeight: 'bold'}}>{name}</span></h3>
            ) : ( <h3>Invoice to: </h3>)}
            {location ? (
              <p><span style={{fontWeight: 'bold'}}>location: </span>{location}</p>
            ) : ( <p style={{fontWeight: 'bold'}}>location: </p>)}
          </div>
          <div>
            <h2>INVOICE</h2>
          </div>
        </div>
        <div>
        <table style={{ width: "100%"}}>
            <thead>
              <th>Item Description</th>
              <th>Price</th>
              <th>Qty.</th>
              <th>Total</th>
            </thead>
            {localStoreValuesArray.map((item, index) => {
              return (
                <tr>
                  <td>{item.product}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.quantity * item.price}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  )
}

export default InvoiceDocumentPreview