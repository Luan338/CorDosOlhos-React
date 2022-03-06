import React from 'react';
import styles from './Input.module.css';

const Input = ({ placeholder, type, name, children}) => {
    return(
      <form>
          <label>{children}
          <input
          placeholder={placeholder} 
          type={type} 
          name={name}
          className={styles.input}
          />
          </label>
      </form>
    ) 
  };
  
  export default Input;