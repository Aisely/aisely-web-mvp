import React from 'react'
import ClientForm from '../../common/components/clientForm/ClientForm'
import ListDocumentPreview from '../../common/components/documentPreview/ListDocumentPreview'
import ListLogic from '../../common/components/Input/components/documentTemplate/list/logic/ListForm'

function listEditor() {
  return (
    <div>
      <ClientForm />
      <ListLogic />
      <ListDocumentPreview />
    </div>
  )
}

export default listEditor