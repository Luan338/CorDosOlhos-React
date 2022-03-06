import React from 'react';
import styles from './Textarea.module.css';

const Textarea = ({placeholder, type, children}) => {
  return (
    <form>
      <label>{children}
      <textarea
          placeholder={placeholder} 
          type={type} 
          className={styles.textarea}
      />
      </label>
    </form>
  )
}

export default Textarea;