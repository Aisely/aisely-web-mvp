import React, {useState} from 'react'
import ClientForm from '../../common/components/clientForm/ClientForm'
import InvoiceDocumentPreview from '../../common/components/documentPreview/InvoiceDocumentPreview'
import InvoiceForm from '../../common/components/Input/components/documentTemplate/invoice/logic/InvoiceForm'
import { useTableData } from '../../contexts/TableDataContext'

type ClientState = {
  name: string
  location: string
}

const InvoiceEditor = () => {
  const [generateDoc, setGeneratedDoc] = useState({
    
  })
  const { localstore } = useTableData()
  console.log("local store", localstore)
  const [form, setForm] = useState<ClientState>({
    name: '',
    location: '',
  })

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((state) => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("store");
      window.location.reload()
    }
  }
  return (
    <div style={{width: '1000px'}}>
      <ClientForm 
        name={form.name}  
        location={form.location}
        onInputChange={onInputChange}  
      />
      <div style={{display: 'flex'}}>
        <InvoiceForm />
        <InvoiceDocumentPreview
          name={form.name}
          location={form.location}
          localstore={localstore}
        />
      </div>
      <button onClick={onSubmit}>Generate Document</button>
    </div>
  )
}

export default InvoiceEditor