import React from 'react';
import styles from './Input.module.css';

const Input = ({ placeholder, type, name, children, value, onChange}) => {
    return(
      <form>
          <label>{children}
          <input
          value={value}
          placeholder={placeholder} 
          type={type} 
          name={name}
          onChange={onChange}
          className={styles.input}
          />
          </label>
      </form>
    ) 
  };
  
  export default Input;