'use client'

import styles from './FAQ.module.sass';
import Title from "@/components/Title";
import Button from "@/components/Button";
import {useState} from "react";

const faq = [
    {
        id: 1,
        question: "O que é o PoupUp e qual problema ele resolve?",
        answer: "O PoupUp é um aplicativo de gestão financeira que ajuda indivíduos, famílias e pequenos negócios a controlarem seus orçamentos, evitarem gastos excessivos e integrarem investimentos de forma automatizada e inteligente."
    },
    {
        id: 2,
        question: "Quais são as principais funcionalidades do PoupUp?",
        answer: "O PoupUp oferece orçamentos inteligentes, controle de despesas categorizadas, investimentos integrados, integração com WhatsApp, além de análise financeira baseada em IA e gamificação para engajamento."
    },
    {
        id: 3,
        question: "O PoupUp é gratuito?",
        answer: "O PoupUp utiliza um modelo Freemium, oferecendo funcionalidades básicas gratuitamente. Recursos avançados, como IA personalizada e integração com APIs financeiras, estão disponíveis no plano Premium por assinatura."
    }
];

export default function FAQ(){
    const [facSelected, setFacSelected] = useState(0);
    return(
        <section className={styles.container}>
            <div>
                <Title title={'faq.title'} />
            </div>
            <div className={styles.faqList}>
                {
                    faq.map((faq) => (
                        <div
                            className={`${styles.faqItem} ${faq.id === facSelected ? styles.active : ''}`}
                            onClick={() => setFacSelected(faq.id === facSelected ? 0 : faq.id)}
                            key={faq.id}
                        >
                            <p className={styles.faqQuestion}>
                                {faq.question}
                                <span className={styles.icon}>{faq.id === facSelected ? "▲" : "▼"}</span>
                            </p>
                            {
                                faq.id === facSelected &&
                                <p className={styles.faqAnswer}>{faq.answer}</p>
                            }
                        </div>
                    ))
                }
            </div>
            <div  className={styles.button}>
                <Button description={'header.button'} />
            </div>
        </section>
    )
}
