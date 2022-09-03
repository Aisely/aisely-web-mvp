import Link from 'next/link'
import React, {useState}  from 'react'
import ClientForm from '../../common/components/clientForm/ClientForm'

function index() {

  return (
    <div className=''>
        {/* <h1>Choose the Client/Buyer</h1>
        <div style={{border: "1px solid black"}}>
          <select  name="" id="" style={{border: 'none', outline: 'none'}}>
            <option value="">Apple</option>
            <option value="">Scott Disick private retailers</option>
            <option value="">Ugo's Shipping Ltd</option>
          </select>
          <button onClick={onToggle}> add new Client</button>
        </div> */}
        <h1>Choose a document</h1>
        <div className="flex">
            <Link href='/create/invoiceEditor'>Invoice</Link>
            <Link href='/create/listEditor'>Lists</Link>
            <Link href='/create/receiptEditor'>Receipt</Link>
        </div>
    </div>
  )
}

export default index