import React from 'react';
import styles from './Textarea.module.css';

const Textarea = ({placeholder, type, children, name}) => {
  return (
    <form>
      <label>{children}
      <textarea
          placeholder={placeholder} 
          type={type} 
          className={styles.textarea}
          name={name}
      />
      </label>
    </form>
  )
}

export default Textarea;