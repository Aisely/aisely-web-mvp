import Link from 'next/link';
import React, {useEffect, useState} from 'react'
import ClientDetails from '../common/components/Input/components/ClientDetails/ClientDetails';
import TableSheet from '../common/components/Input/components/TableSheet/TableSheet';

function Input() {
  const [isSSR, setIsSSR] = useState(true);

useEffect(() => {
	setIsSSR(false);
}, []);

  return (
    <div>
      {/* <ClientDetails /> */}
      { !isSSR && <TableSheet />}
      <Link href={"/generate"}>
        generate doc
      </Link>
      <Link href={"/"}>
        back home
      </Link>
    </div>
  )
}

export default Input