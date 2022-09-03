import React from 'react';
import Link from 'next/link'
function App() {
  return (
    <>
      <h1>Welcome back Paul</h1>
      <Link href="/create"> 
        <a>create doc</a>
      </Link>
      <div>
        {/* <table>
          <thead>
            <th>Client Name</th>
            <th>docs created</th>
            <th>last modified</th>
          </thead>
          <tr>
            <td>Ugo's Shipping ltd</td>
            <td>3</td>
            <td>3 days ago</td>
          </tr>
        </table> */}
      </div>
    </>
  );
}

export default App;
