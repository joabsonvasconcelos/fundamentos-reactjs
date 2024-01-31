import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import { About } from "./components/About";
import { Skill } from "./components/Skill";

 

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
       <Sidebar />
        <main>
          <About />
          <Post />
          <Skill />
        </main>

      </div>


    </div>
  )
}
