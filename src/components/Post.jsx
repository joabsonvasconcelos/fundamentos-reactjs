import styles from './Post.module.css';
import {  Code } from 'phosphor-react';

export function Post(){
    return(
        <main className={styles.post}>
         
            <h1>Histórico Professional:</h1>
                <div className={styles.professional}>
                    <div className={styles.period}>
                        <h4>Oftalmo PE - Instituto de saúde do brasil LTDA</h4>
                        <p> <span>10/2021 - Atual</span></p>
                    </div>
                    <div className={styles.role}>
                        <p> <span>Analista de desenvolvimento de sistemas </span> </p>
                        <p>Como Analista de Desenvolvimento de Sistemas, tive a responsabilidade de implementar com sucesso o sistema integrado SQL com o SUS (Sistema Único de Saúde) em todas as unidades. Além disso, desempenhei um papel crucial na implementação do setor de TI, coordenando a implantação da infraestrutura, o que incluiu a configuração e gerenciamento de servidores.
                        </p>
                 </div>

                 <div className={styles.period}>
                        <h4>IMIP Hospitalar /UPAE Prof. Antônio Simão dos Santos Figueira</h4>
                        <p> <span>03/2016 - 10/2021</span></p>
                    </div>
                    <div className={styles.role}>
                        <p> <span>Técnico em Informática </span> </p>
                        <p>Atuei como responsável técnico pela manutenção e operação de computadores, servidores e impressoras. Desempenhei um papel crucial no gerenciamento de contas de usuários, e-mails e toda a infraestrutura de telefonia, incluindo ramais. Durante esse período, concentrei-me em garantir o pleno funcionamento dos sistemas, proporcionando suporte técnico essencial para a equipe e otimizando a eficiência operacional.
                        </p>
                 </div>

                 <div className={styles.period}>
                        <h4>Doctor Finder: Apple Service Center</h4>
                        <p><span>05/2012 - 01/2014</span></p>
                    </div>
                    <div className={styles.role}>
                        <p> <span>HelpDesk/Auxiliar técnico em informático</span></p>
                        <p>Minhas responsabilidades incluíam atendimento técnico, manutenção de máquinas Macintosh e servidores. Durante esse período, concentrei-me em oferecer suporte técnico eficaz, garantindo o funcionamento contínuo dos sistemas e a satisfação dos usuários.
                        </p>
                 </div>
            </div>
            <h1>Trabalho voluntário:</h1>
            <div className={styles.professional}>
                    <div className={styles.period}>
                        <h4>Associação Brasileira de A.B.I.J.C.D.S.U.D.</h4>
                        <p> <span>10/2007 - Atual</span></p>
                    </div>
                    <div className={styles.role}>
                     
                        <p>Trabalho Social (Paraíba e Rio Grande do Norte) out/2007 a out/2009. </p>
                        <p>Participação ativa no programa “Mãos que Ajudam" Aprimoramento a comunidades carentes” e Professor Dominical.

                        </p>
                 </div>   
                
            </div>
            
        
        </main>
    )
}