import styles from './Benefits.module.sass';
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";
import Cards from "@/components/Benefits/Cards";
import Button from "@/components/Button";

export default function Benefits() {
    return (
        <section className={styles.container}>
            <div className={styles.container_title}>
                <Title
                    title={'benefits.title'}
                    color={'#FFF'}
                />
            </div>
            <div className={styles.container_paragraph}>
                <Paragraph
                    content={'benefits.paragraph'}
                    color={'#FFF'}
                />
            </div>
            <div className={styles.container_cards}>
                <Cards/>
            </div>
            <div className={styles.container_button}>
                <Button
                    description={'header.button'}
                />
            </div>
        </section>
    )
}