import styles from './Post.module.css';
import {  Code, Nut} from 'phosphor-react';

export function Post(){
    return(
        <main className={styles.post}>
            <h1>Sobre Min</h1>
                <p>          
                    Olá, Adquiri conhecimentos em linguagens de programação e desenvolvimento de sistemas durante minha formação técnica. Atualmente, aprimoro minhas habilidades no curso de Analise e desenvolvimento de Sistema, buscando constantemente atualizações em tecnologia para contribuir com soluções inovadoras. Sou proativo, criativo e comprometido com o sucesso dos projetos, aberto a novos desafios e oportunidades de aprendizado.      
                </p>

            <h1>Histórico Professional:</h1>
                <div className={styles.professional}>
                    <div className={styles.period}>
                        <p>OftalmoPE - Instituto de saúde do brasil LTDA</p>
                        <p> <span>10/2021 - Atual</span></p>
                    </div>
                    <div className={styles.role}>
                        <p>Analista de desenvolvimento de sistemas </p>
                        <p>Como Analista de Desenvolvimento de Sistemas, tive a responsabilidade de implementar com sucesso o sistema integrado SQL com o SUS (Sistema Único de Saúde) em todas as unidades. Além disso, desempenhei um papel crucial na implementação do setor de TI, coordenando a implantação da infraestrutura, o que incluiu a configuração e gerenciamento de servidores.
                        </p>
                 </div>

                 <div className={styles.period}>
                        <p>IMIP Hospitalar /UPAE Prof. Antônio Simão dos Santos Figueira</p>
                        <p> <span>03/2016 - 10/2021</span></p>
                    </div>
                    <div className={styles.role}>
                        <p>Técnico em Informática  </p>
                        <p>Atuei como responsável técnico pela manutenção e operação de computadores, servidores e impressoras. Desempenhei um papel crucial no gerenciamento de contas de usuários, e-mails e toda a infraestrutura de telefonia, incluindo ramais. Durante esse período, concentrei-me em garantir o pleno funcionamento dos sistemas, proporcionando suporte técnico essencial para a equipe e otimizando a eficiência operacional.
                        </p>
                 </div>

                 <div className={styles.period}>
                        <p>Doctor Finder: Apple Service Center</p>
                        <p><span>05/2012 - 01/2014</span></p>
                    </div>
                    <div className={styles.role}>
                        <p>HelpDesk/Auxiliar técnico em informático </p>
                        <p>Minhas responsabilidades incluíam atendimento técnico, manutenção de máquinas Macintosh e servidores. Durante esse período, concentrei-me em oferecer suporte técnico eficaz, garantindo o funcionamento contínuo dos sistemas e a satisfação dos usuários.
                        </p>
                 </div>
            </div>
            <h1>Trabalho voluntário:</h1>
            <div className={styles.professional}>
                    <div className={styles.period}>
                        <p>10/2007 - 10/2007</p>
                        <p>Associação Brasileira de A.B.I.J.C.D.S.U.D.</p>
                    </div>
                    <div className={styles.role}>
                     
                        <p>Trabalho Social (Paraíba e Rio Grande do Norte) out/2007 a out/2009. </p>
                        <p>Participação ativa no programa “Mãos que Ajudam" Aprimoramento a comunidades carentes” e Professor Dominical.

                        </p>
                 </div>   
                
            </div>
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