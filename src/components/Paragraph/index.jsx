'use client';

import styles from './Paragraph.module.sass';
import { useGlobalState } from "@/context/globalState";
import { getNestedValue } from "@/functions/home.functions";

export default function Paragraph({ content, color, textAlign }) {
    const { language, text } = useGlobalState();

    const paragraph = content && text?.[language]
        ? getNestedValue(text[language], content)
        : "Paragráfo não disponível";

    return (
        <div className={styles.container}>
            <p style={{color: color, textAlign: textAlign}} className={styles.container__content}>{paragraph}</p>
        </div>
    );
}
