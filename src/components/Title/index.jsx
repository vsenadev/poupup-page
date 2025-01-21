'use client';

import styles from './title.module.sass';
import { useGlobalState } from "@/context/globalState";
import { getNestedValue } from "@/functions/home.functions";

export default function Title({ title }) {
    const { language, text } = useGlobalState();

    const heading = text?.[language]
        ? getNestedValue(text[language], title)
        : "Título não disponível";

    return (
        <div className={styles.container}>
            <h1 className={styles.container__title}>{heading | "Título não disponível"}</h1>
        </div>
    );
}
