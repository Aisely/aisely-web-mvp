import React, { useState } from 'react'
import styles from './clientdetails.module.css'

function ClientDetails() {
  const [client, setClient] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setClient(values => ({...values, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(client);
  }
  return (
    <div>
        <div className='client-details-wrapper'>
            <form onSubmit={handleSubmit}>
                <div className={styles.name}>
                  <label>Client Name</label>
                <input type='text' id='name' name='name' value={client.name} onChange={handleChange} required></input>
                </div>
                <div className={styles.logo}>
                  <label>Logo</label>
                  <input type='file' id='logo' name='logo' value={client.logo} onChange={handleChange} required></input>
                </div>
                <div className={styles.phone}>
                  <label>Tel no.</label>
                  <input type='tel' id='phone' name='phone' value={client.phone} autoComplete='true' required></input>
                </div>
                <div className={styles.email}>
                  <label>Email</label>
                  <input type='email' id='email' name='email' value={client.email} onChange={handleChange} required></input>
                </div>
                <div className={styles.address}>
                  <label>Address</label>
                  <input type='text' id='address' name='address' value={client.address} onChange={handleChange} required></input>
                </div>
                <div className={styles.null}>
                  <label>Null</label>
                  <input type='text' id='null' name='null' value={client.null} onChange={handleChange} required></input>
                </div>
                <button type='submit' className='small-btn'>next</button>
            </form>
        </div>
    </div>
  )
}

export default ClientDetails;