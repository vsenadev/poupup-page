'use client';

import styles from './StrongText.module.sass';
import { useGlobalState } from "@/context/globalState";
import { getNestedValue } from "@/functions/home.functions";

export default function StrongText({ content, color }) {
    const { language, text } = useGlobalState();

    const paragraph = content && text?.[language]
        ? getNestedValue(text[language], content)
        : "Paragráfo não disponível";

    return (
        <div className={styles.container}>
            <strong style={{color: color}} className={styles.container__content}>{paragraph}</strong>
        </div>
    );
}
