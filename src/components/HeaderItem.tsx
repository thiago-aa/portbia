import React, { useState } from 'react'
import styles from '../styles/HeaderItem.module.css';


interface headerItemProps {
  selected: boolean;
  link: string;
  children: React.ReactNode;
  handleClick: (id: number, link: string) => void;
  id: any;
  background: string;
  dot: boolean;
}

export default function HeaderItem (props: headerItemProps) {
  const {children, selected, link, handleClick, id, dot} = props;
  return selected ? ( children === 'Home' ?  (
    <>
      <a className={` ${styles.selectedItem}`} onClick={() => handleClick(id, link)}>{children}</a>
      <span style={{backgroundColor: 'transparent'}} className={styles.ball}></span>
    </>
  ) : (children === 'Contatos' ? (
    <>
      <a className={styles.selectedItem} onClick={() => handleClick(id, link)}>{children}</a>
      <span style={{backgroundColor: 'transparent'}} className={styles.ball}></span>
    </>
  ) : (
  <>
    <a className={styles.selectedItem} onClick={() => handleClick(id, link)}>{children}</a>
    <span style={{backgroundColor: 'transparent'}} className={styles.ball}></span>
  </>
)
    
  )): dot ? (
    <>
      <a className={styles.item} onClick={() => handleClick(id, link)}>{children}</a>
      <span className={styles.ball}></span>
    </>
  ) : (
    <>
      <a className={styles.item} onClick={() => handleClick(id, link)}>{children}</a>
      <span style={{backgroundColor: 'transparent'}} className={styles.ball}></span>
    </>
  )
}
