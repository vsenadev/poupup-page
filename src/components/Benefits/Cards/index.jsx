import styles from './Cards.module.sass';
import Paragraph from "@/components/Paragraph";
import Image from "next/image";
import Title from "@/components/Title";
import PlanningIcon from '@/../public/img/planning.svg';
import ControlIcon from '@/../public/img/control.svg';
import InvestmentIcon from '@/../public/img/investment.svg';
import BudgetIcon from '@/../public/img/budget.svg';
import GamingIcon from '@/../public/img/gaming.svg';
import AlertIcon from '@/../public/img/alert.svg';

export default function Cards() {
    return (
        <div className={styles.container}>
            <div className={styles.container__card}>
                <div className={styles.container__card_header}>
                    <div className={styles.container__card_header_img}>
                        <div className={styles.container__card_header_img_content}>
                            <Image
                                src={PlanningIcon}
                                alt={'Planning Icon'}
                            />
                        </div>
                    </div>
                    <div className={styles.container__card_header_title}>
                        <Title
                            title={'benefits.cards.planning.title'}
                            color={'#FFF'}
                            fontSize={'0.85rem'}
                        />
                    </div>
                </div>
                <div className={styles.container__card_paragraph}>
                    <Paragraph
                        content={'benefits.cards.planning.description'}
                        color={'#FFF'}
                    />
                </div>
            </div>
            <div className={styles.container__card}>
                <div className={styles.container__card_header}>
                    <div className={styles.container__card_header_img}>
                        <div className={styles.container__card_header_img_content}>
                            <Image
                                src={ControlIcon}
                                alt={'Control Icon'}
                            />
                        </div>
                    </div>
                    <div className={styles.container__card_header_title}>
                        <Title
                            title={'benefits.cards.control.title'}
                            color={'#FFF'}
                            fontSize={'0.85rem'}
                        />
                    </div>
                </div>
                <div className={styles.container__card_paragraph}>
                    <Paragraph
                        content={'benefits.cards.control.description'}
                        color={'#FFF'}
                    />
                </div>
            </div>
            <div className={styles.container__card}>
                <div className={styles.container__card_header}>
                    <div className={styles.container__card_header_img}>
                        <div className={styles.container__card_header_img_content}>
                            <Image
                                src={InvestmentIcon}
                                alt={'Investment Icon'}
                            />
                        </div>
                    </div>
                    <div className={styles.container__card_header_title}>
                        <Title
                            title={'benefits.cards.investment.title'}
                            color={'#FFF'}
                            fontSize={'0.85rem'}
                        />
                    </div>
                </div>
                <div className={styles.container__card_paragraph}>
                    <Paragraph
                        content={'benefits.cards.investment.description'}
                        color={'#FFF'}
                    />
                </div>
            </div>
            <div className={styles.container__card}>
                <div className={styles.container__card_header}>
                    <div className={styles.container__card_header_img}>
                        <div className={styles.container__card_header_img_content}>
                            <Image
                                src={BudgetIcon}
                                alt={'Budget Icon'}
                            />
                        </div>
                    </div>
                    <div className={styles.container__card_header_title}>
                        <Title
                            title={'benefits.cards.budget.title'}
                            color={'#FFF'}
                            fontSize={'0.85rem'}
                        />
                    </div>
                </div>
                <div className={styles.container__card_paragraph}>
                    <Paragraph
                        content={'benefits.cards.budget.description'}
                        color={'#FFF'}
                    />
                </div>
            </div>
            <div className={styles.container__card}>
                <div className={styles.container__card_header}>
                    <div className={styles.container__card_header_img}>
                        <div className={styles.container__card_header_img_content}>
                            <Image
                                src={GamingIcon}
                                alt={'Gaming Icon'}
                            />
                        </div>
                    </div>
                    <div className={styles.container__card_header_title}>
                        <Title
                            title={'benefits.cards.gaming.title'}
                            color={'#FFF'}
                            fontSize={'0.85rem'}
                        />
                    </div>
                </div>
                <div className={styles.container__card_paragraph}>
                    <Paragraph
                        content={'benefits.cards.gaming.description'}
                        color={'#FFF'}
                    />
                </div>
            </div>
            <div className={styles.container__card}>
                <div className={styles.container__card_header}>
                    <div className={styles.container__card_header_img}>
                        <div className={styles.container__card_header_img_content}>
                            <Image
                                src={AlertIcon}
                                alt={'Alert Icon'}
                            />
                        </div>
                    </div>
                    <div className={styles.container__card_header_title}>
                        <Title
                            title={'benefits.cards.alert.title'}
                            color={'#FFF'}
                            fontSize={'0.85rem'}
                        />
                    </div>
                </div>
                <div className={styles.container__card_paragraph}>
                    <Paragraph
                        content={'benefits.cards.alert.description'}
                        color={'#FFF'}
                    />
                </div>
            </div>
        </div>
    )
}