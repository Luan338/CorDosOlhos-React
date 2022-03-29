import React from 'react';
import styles from './Textarea.module.css';

const Textarea = ({placeholder, type, children, name, value, onChange}) => {
  return (
    <form>
      <label>{children}
      <textarea
          value={value}
          placeholder={placeholder} 
          type={type} 
          className={styles.textarea}
          name={name}
          onChange={onChange}
      />
      </label>
    </form>
  )
}

export default Textarea;