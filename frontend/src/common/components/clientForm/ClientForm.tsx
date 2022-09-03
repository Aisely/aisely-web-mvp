import React, { useState } from "react";
import styles from "./ClientForm.module.css";

type ClientFormProps = {
  name: string
  location: string
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
};

const ClientForm = (props: ClientFormProps) => {
  const { name, location, onInputChange } = props
  return (
    <div>
      <form>
        <div className={styles.formBlock}>
          <label className={styles.formLabel}>Client Name</label>
          <input
            className={styles.formInput}
            type="text"
            name="name"
            id=""
            value={name}
            onChange={onInputChange}
          />
        </div>
        <div className={styles.formBlock}>
          <label className={styles.formLabel}>Client Location</label>
          <input
            className={styles.formInput}
            type="text"
            name="location"
            id=""
            value={location}
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default ClientForm;
