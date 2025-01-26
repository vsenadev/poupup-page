'use client';

import styles from './Paragraph.module.sass';
import { useGlobalState } from "@/context/globalState";
import { getNestedValue } from "@/functions/home.functions";

export default function Paragraph({ content, color }) {
    const { language, text } = useGlobalState();

    const paragraph = content && text?.[language]
        ? getNestedValue(text[language], content)
        : "Paragráfo não disponível";

    return (
        <div className={styles.container}>
            <h1 style={{color: color}} className={styles.container__content}>{paragraph}</h1>
        </div>
    );
}
