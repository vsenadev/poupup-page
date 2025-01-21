'use client'

import styles from './title.module.sass';
import { useContext } from "react";
import { GlobalStateContext } from "@/context/globalState";
import {getNestedValue} from "@/functions/home.functions";


export default function Title(props) {
    const context = useContext(GlobalStateContext);
    const { language, text } = context;

    const title = getNestedValue(text[language], props.title);

    return (
        <div className={styles.container}>
            <h1 className={styles.container__title}>{title}</h1>
        </div>
    );
}
