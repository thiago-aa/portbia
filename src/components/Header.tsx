import HeaderItem from "./HeaderItem"
import styles from "../styles/Header.module.css";

interface HeaderProps {
  itemList: any[];
  handleClick: (id: number, link: string) => void;
}

export default function Header (props: HeaderProps) {
  const {itemList, handleClick} = props;
  return (
    <nav className={styles.navContainer}>
      <div className={styles.nav}>
        {
          itemList.map( item => <HeaderItem 
                                  id={item.id} 
                                  handleClick={handleClick} 
                                  link={item.link} 
                                  selected={item.selected} 
                                  key={item.id}
                                  background={item.background}
                                  dot={item.dot}
                                >
                                  {item.title}
                                </HeaderItem>) 
        }
      </div>
      <div className={styles.line}></div>
    </nav>
  )
}