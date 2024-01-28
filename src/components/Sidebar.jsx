
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';
import {  GithubLogo, Globe, GlobeHemisphereWest, GraduationCap, InstagramLogo, LinkedinLogo, PaperPlaneTilt, Phone, Student, TwitterLogo } from 'phosphor-react';


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
           

            <div className={styles.profile}>
                <Avatar src="https://github.com/joabsonvasconcelos.png"/>

                <strong>Joabson vasconcelos</strong>
                <span>Web Developer</span>

            </div>
            <footer>

            <div className={styles.information}>
                <h1>Contatos:</h1>
                    <p> <span><Phone /></span> 87 99925-6122</p>
                    <p> <span><PaperPlaneTilt /> </span> joabson.vasconcelos@icloud.com</p>
                    <a href="https://www.joabson.com/" target='_blank'><p> <span><Globe /> </span> joabson.com</p></a>
                    <a href="https://www.linkedin.com/in/joabson/" target='_blank'><p> <span><LinkedinLogo /> </span> in/joabson</p></a>
                    <a href="https://www.github.com/joabsonvasconcelos/" target='_blank'><p> <span><GithubLogo /> </span> /joabsonvasconcelos</p></a>
                   
                 
                    <br />
                <h1>Formação Acadêmica:</h1>
                    <p> <span> Estácio - UNISEB - 5° Periodo</span> </p>
                    <p> <span><GraduationCap /> </span>Análise e desenvolvimento de sistemas</p>
                    <br />
                    <p> <span>ETEC/SP - Centro Paula Souza</span> </p>
                    <p> <span><GraduationCap /> </span>Técnico em infomática - Programação</p>
                    <p>Conclusão - 2013</p>
                    <br />

                <h1>Curso complementares:</h1>
                    <p> <span>Rocketseat </span> </p>
                    <p> <span><Student /> </span>Fundamentos de HTML, CSS, JavaScript, DOM, Terminal, NodeJS, EJS, SQL, Estrutura de Dados, Programação Orientada a Objetos, Programação Funcional, Git, GitHub e HTTP.</p><br />
                    <p> <span><Student /> </span>Java - Desenvolvimento de uma aplicação back-end em Java; Maven; Spring Boot; API Rest; Lombok; Integração com H2 Database Engine; Implementando segurança nos dados do usuário; Tratamento de Exceções e Deploy do back-end.</p><br />
                    <p> <span>Doctor Finder: Apple Service Center </span> </p>
                    <p> <span><Student /> </span> Support Essential Mac OS  </p>
                
                    <p> <span><Student /> </span>  File Maker Pro. </p>
                    <br />


                <h1>Idiomas:</h1>
                    <p> <span><GlobeHemisphereWest /> </span> Inglês técnico</p>

                

            </div>

            </footer>

        </aside>
    );
}