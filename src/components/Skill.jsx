import { Code } from 'phosphor-react';
import styles from './Skill.module.css';

export function Skill() {
    return (
        <main className={styles.Skill}>
            <div className={styles.skill}>
                <h1>Conhecimento Técnico:</h1>
                
                <div className={styles.skillCard}>
                 
                    <h2>Web Developer <br />
                    <Code size={50} />
                    </h2>
                  
                    <div className={styles.card}> 
                      <p><span>HTML</span></p>
                      <p><span>CSS</span></p>
                      <p><span>JavaScript</span></p>
                      <p><span>ReactJs</span></p>
                      <p><span>NodeJs</span></p> 
                      <p><span>Python</span></p>
                      <p><span>Git</span></p>
                      <p><span>GitHub</span></p>
                  </div>
                 
                      
                  <h2>Programação
           
                  </h2>
                  <div className={styles.card}>
                        
                        <p><span>SQL</span></p>
                        <p><span>Banco de dados</span></p>
                        <p><span>DbTools</span></p>
                    </div>
                      
                    <h2>Manutenção
                   
                    </h2>
                    <div className={styles.card}>
                      
                        <p><span>Servidores</span></p>
                        <p><span>Windows</span></p>
                        <p><span>Macintosh</span></p>
                        <p><span>Redes</span></p>
                        <p><span>telefonia</span></p>
                    </div>
                  
                </div>
            </div>
        </main>
    )
      

}