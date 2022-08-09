import Link from 'next/link'
import React from 'react'
import { useTableData } from '../contexts/TableDataContext'

function GeneratedDoc() {
  const { localstore } = useTableData()
  console.log(localstore, "localstore print inside generate.tsx")
  return (
    <div>
      Generated DOC
      <canvas></canvas>
      <Link href="/input"> 
        <a>create doc</a>

      </Link>
    </div>
  )
}

export default GeneratedDoc