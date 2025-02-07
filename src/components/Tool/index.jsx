import styles from './Tool.module.sass';
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";
import StrongText from "@/components/StrongText";
import Button from "@/components/Button";

export default function Tool(){
    return (
        <section className={styles.container}>
            <div className={styles.container__content}>
                <div className={styles.container__content_header}>
                    <Title
                        title={'tools.title'}
                        textAlign={'left'}
                    />
                    <Paragraph
                        content={'tools.description'}
                    />
                </div>
                <div className={styles.container__content_differences}>
                    <div className={styles.container__content_differences_item}>
                        <StrongText
                            content={'tools.tool.title'}
                        />
                        <Paragraph
                            content={'tools.tool.description'}
                            text={'left'}
                        />
                    </div>
                    <div className={styles.container__content_differences_item}>
                        <StrongText
                            content={'tools.tool.title1'}
                        />
                        <Paragraph
                            content={'tools.tool.description1'}
                        />
                    </div>
                    <div className={styles.container__content_differences_item}>
                        <StrongText
                            content={'tools.tool.title2'}
                        />
                        <Paragraph
                            content={'tools.tool.description2'}
                        />
                    </div>
                    <div className={styles.container__content_differences_item}>
                        <StrongText
                            content={'tools.tool.title3'}
                        />
                        <Paragraph
                            content={'tools.tool.description3'}
                        />
                    </div>
                    <div className={styles.container__content_differences_item}>
                        <StrongText
                            content={'tools.tool.title4'}
                        />
                        <Paragraph
                            content={'tools.tool.description4'}
                        />
                    </div>
                </div>
                <div className={styles.container__content_differences} style={{paddingTop: '0'}}>
                    <div className={styles.container__content_header}>
                        <Title
                            title={'tools.differences.title'}
                        />
                    </div>
                    <div className={styles.container__content_differences}>
                        <div className={styles.container__content_differences_item}>
                            <StrongText
                                content={'tools.differences.tool.title'}
                            />
                            <Paragraph
                                content={'tools.differences.tool.description'}
                            />
                        </div>
                        <div className={styles.container__content_differences_item}>
                            <StrongText
                                content={'tools.differences.tool.title1'}
                            />
                            <Paragraph
                                content={'tools.differences.tool.description1'}
                            />
                        </div>
                        <div className={styles.container__content_differences_item}>
                            <StrongText
                                content={'tools.differences.tool.title2'}
                            />
                            <Paragraph
                                content={'tools.differences.tool.description2'}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.container__content_differences}>
                    <Title
                        title={'tools.for.title'}
                    />
                    <div  className={styles.container__content_differences_item}>
                        <StrongText
                            content={'tools.for.description'}
                        />
                        <StrongText
                            content={'tools.for.description1'}
                        />
                        <StrongText
                            content={'tools.for.description2'}
                        />
                    </div>
                </div>
                <div  className={styles.container__content_differences_button} >
                    <Button
                        description={'header.button'}
                    />
                </div>
            </div>
            <div className={styles.container__application}>
                <p>CELULAR</p>
            </div>
        </section>
    )
}