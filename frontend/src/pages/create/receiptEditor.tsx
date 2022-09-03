import React from 'react'
import ClientForm from '../../common/components/clientForm/ClientForm'
import ReceiptDocumentPreview from '../../common/components/documentPreview/ReceiptDocumentPreview'
import ReceiptForm from '../../common/components/Input/components/documentTemplate/receipt/logic/ReceiptForm'

function receipt() {
  return (
    <div>
      <ClientForm />
      <ReceiptForm />
      <ReceiptDocumentPreview />
    </div>
  )
}

export default receipt