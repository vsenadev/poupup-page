'use client';

import styles from './Button.module.sass';
import { useGlobalState } from "@/context/globalState";
import { getNestedValue } from "@/functions/home.functions";

export default function Button({ description }) {
    const { language, text } = useGlobalState();

    const desc = text?.[language]
        ? getNestedValue(text[language], description)
        : "Descrição não disponível";

    return (
        <div className={styles.container}>
            <button className={styles.container_button}>{desc}</button>
        </div>
    );
}
