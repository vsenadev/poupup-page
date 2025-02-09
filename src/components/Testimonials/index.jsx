import styles from './Testimonials.module.sass';
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";
import Image from "next/image";
import ImageTest from '@/../public/img/gaming.svg'

export default function Testimonials() {
    return(
        <section className={styles.container}>
            <div className={styles.container__title}>
                <Title
                    title={'testimonials.title'}
                    color={'#FFF'}
                />
                <Paragraph
                    content={'testimonials.description'}
                    color={'#FFF'}
                />
            </div>
            <div className={styles.container__testimonials}>
                <div className={styles.container__testimonials_card}>
                    <div className={styles.container__testimonials_card_user}>
                        <div className={styles.container__testimonials_card_user_image}>
                            <div className={styles.container__testimonials_card_user_image_circle}>
                                <Image src={ImageTest} alt={'test'}/>
                            </div>
                        </div>
                        <div className={styles.container__testimonials_card_user_info}>
                            <h3>Bento Silva</h3>
                            <p>30/01/2025</p>
                        </div>
                    </div>
                    <div className={styles.container__testimonials_card_text}>
                        <p>Tenho avaliação em diversos apps do gênero. Esse até o momento é o melhor custo benefício. Tem todas as ferramentas essenciais, interface amigável, intuitivo, objetivo, enfim, ajuda a controlar o orçamento pessoal mais assertivamente do que todos os outros apps que já testei.</p>
                    </div>
                </div>
                <div className={styles.container__testimonials_card}>
                    <div className={styles.container__testimonials_card_user}>
                        <div className={styles.container__testimonials_card_user_image}>
                            <div className={styles.container__testimonials_card_user_image_circle}>
                                <Image src={ImageTest} alt={'test'}/>
                            </div>
                        </div>
                        <div className={styles.container__testimonials_card_user_info}>
                            <h3>Bento Silva</h3>
                            <p>30/01/2025</p>
                        </div>
                    </div>
                    <div className={styles.container__testimonials_card_text}>
                        <p>Tenho avaliação em diversos apps do gênero. Esse até o momento é o melhor custo benefício. Tem todas as ferramentas essenciais, interface amigável, intuitivo, objetivo, enfim, ajuda a controlar o orçamento pessoal mais assertivamente do que todos os outros apps que já testei.</p>
                    </div>
                </div>
                <div className={styles.container__testimonials_card}>
                    <div className={styles.container__testimonials_card_user}>
                        <div className={styles.container__testimonials_card_user_image}>
                            <div className={styles.container__testimonials_card_user_image_circle}>
                                <Image src={ImageTest} alt={'test'}/>
                            </div>
                        </div>
                        <div className={styles.container__testimonials_card_user_info}>
                            <h3>Bento Silva</h3>
                            <p>30/01/2025</p>
                        </div>
                    </div>
                    <div className={styles.container__testimonials_card_text}>
                        <p>Tenho avaliação em diversos apps do gênero. Esse até o momento é o melhor custo benefício. Tem todas as ferramentas essenciais, interface amigável, intuitivo, objetivo, enfim, ajuda a controlar o orçamento pessoal mais assertivamente do que todos os outros apps que já testei.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}