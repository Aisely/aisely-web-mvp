import React from 'react';
import Link from 'next/link'
import Input from './input';

function App() {
  return (
    <>
      <Link href="/input"> 
        <a>create doc</a>
      </Link>
    </>
  );
}

export default App;
