'use client'

import styles from './Button.module.sass';
import {useContext} from "react";
import {GlobalStateContext} from "@/context/globalState";
import {getNestedValue} from "@/functions/home.functions";

export default function Button(props) {
    const context = useContext(GlobalStateContext);
    const { language, text } = context;

    const description = getNestedValue(text[language], props.description);

    return(
        <div className={styles.container}>
            <button className={styles.container_button}>{description}</button>
        </div>
    )
}