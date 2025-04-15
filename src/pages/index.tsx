import AboutMe from "@/components/AboutMe";
import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import Posts from "@/components/Posts";
import { useEffect, useState } from "react";


const arrItems = [
  {
    id: 1,
    title: 'Home',
    selected: true,
    link: '#home',
    background: '/homeBtn.svg',
  },
  {
    id: 2,
    title: 'Sobre Mim',
    selected: false,
    link: '#aboutMe',
    background: '/sobreMimBtn.svg',
    dot: true,
  },
  {
    id: 3,
    title: 'Posts',
    selected: false,
    link: '#posts',
    background: '/postsBtn.svg',
    dot: true,
  },
  {
    id: 4,
    title: 'Id. Visual',
    selected: false,
    link: '#visualId',
    background: '/idVisualBtn.svg',
    dot: true,
  },
  {
    id: 5,
    title: 'Ilustração',
    selected: false,
    link: '#ilustration',
    background: '/ilustracaoBtn.svg',
    dot: true,
  },
  {
    id: 6,
    title: 'Contatos',
    selected: false,
    link: '#contacts',
    background: '/contatosBtn.svg',
    dot: false,
  }
]

const arrPosts = [
  {
    id: 1,
    src: '/postsImgs/post1.png'
  },
  {
    id: 2,
    src: '/postsImgs/post2.png'
  },
  {
    id: 3,
    src: '/postsImgs/post3.png'
  },
  {
    id: 4,
    src: '/postsImgs/post4.png'
  },
  {
    id: 5,
    src: '/postsImgs/post5.png'
  },
  {
    id: 6,
    src: '/postsImgs/post6.png'
  }
]



export default function Home() {
  const [menuItems, setMenuItems] = useState(arrItems);
  
  const setSelected =  (id: number, link: string) => {
    const element = document.querySelector(link);
    if(element) {
      element.scrollIntoView({behavior: 'smooth'});
    }

    let auxDot: boolean = false;
    let auxArr =  menuItems.map((item, i, arr) => {
      if((item.id === id && !item.selected) || (item.selected && item.id !== id )) {
        return {
          id: item.id,
          title: item.title,
          selected: !item.selected,
          link: item.link,
          background: item.background,
          dot: auxDot,
        }
      } else {
        return item
      }
    })

    auxArr = auxArr.map((item, i, arr) => {
      if( i !== 333330 && (i === (arr.length - 1) || arr[i + 1].selected)) {
        auxDot = false;
      } else {
        auxDot = true;
      }
      return {
        id: item.id,
        title: item.title,
        selected: item.selected,
        link: item.link,
        background: item.background,
        dot: auxDot,
      }
    })
    setMenuItems(auxArr);
  }
  
  return (
    <div>
      <Header itemList={menuItems} handleClick={setSelected}/>
      <HomePage/>
      <AboutMe/>
      <Posts posts={arrPosts}/>
    </div>
  );
}
