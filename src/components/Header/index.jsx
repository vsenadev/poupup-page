import styles from './Header.module.sass'
import Image from 'next/image';
import PoupUpLogo from '@/../public/img/poupup-green-logo-c.svg';
import Title from '@/components/Title';
import Button from "@/components/Button";


export default function Header(){

    return (
        <div className={styles.container}>
            <div className={styles.container__header}>
                <div className={styles.container__header_image}>
                    <Image
                        src={PoupUpLogo}
                        alt='PoupUp Logo'
                        priority={true}
                    />
                </div>
                <div className={styles.container__header_title}>
                    <Title
                        title={'header.title'}
                    />
                </div>
                <div className={styles.container__header_button}>
                    <Button
                        description={'header.button'}
                    />
                </div>
            </div>
        </div>
    )
}