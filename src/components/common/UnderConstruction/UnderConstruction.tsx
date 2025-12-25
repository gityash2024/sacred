import React from 'react'
import styles from './UnderConstruction.module.css'

interface UnderConstructionProps {
    pageName?: string
}

export const UnderConstruction: React.FC<UnderConstructionProps> = ({ pageName }) => {
    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <div className={styles.gradientOrb1}></div>
                <div className={styles.gradientOrb2}></div>
                <div className={styles.gradientOrb3}></div>
            </div>

            <div className={styles.content}>
                <div className={styles.iconWrapper}>
                    <div className={styles.icon}>🚧</div>
                </div>

                <h1 className={styles.title}>
                    {pageName ? `${pageName} - Under Construction` : 'Page Under Construction'}
                </h1>

                <p className={styles.description}>
                    We're working hard to bring you something amazing. This page is currently being built
                    and will be available soon.
                </p>

                <div className={styles.progressBar}>
                    <div className={styles.progressFill}></div>
                </div>

                <p className={styles.subtext}>
                    Thank you for your patience. Check back soon!
                </p>
            </div>
        </div>
    )
}
