import React from 'react';
import styles from './Features.module.scss';
import { Card } from '../../ui';

const featuresData = [
    {
        id: 1,
        title: 'Tamamen Özelleştirilebilir',
        description: 'SCSS değişkenleri sayesinde renkler, fontlar ve boşluklar kolayca markanıza göre uyarlanabilir.',
        icon: (
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
        )
    },
    {
        id: 2,
        title: 'Erişilebilirlik Odaklı',
        description: 'WAI-ARIA standartlarına uygun, klavye dostu ve ekran okuyucularla tam uyumlu bileşenler.',
        icon: (
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        )
    },
    {
        id: 3,
        title: 'Ultra Hızlı & Hafif',
        description: 'Harici kütüphane bağımlılığı olmadan, sadece React ve SCSS ile geliştirilmiş performanslı yapı.',
        icon: (
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    }
];

export const Features: React.FC = () => {
    return (
        <section id="features" className={styles.features}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Neden Bizi Seçmelisiniz?</h2>
                    <p className={styles.description}>
                        Modern web standartlarına uygun, performanslı ve kullanıcı dostu arayüzler tasarlamanız için gereken her şey.
                    </p>
                </div>

                <div className={styles.grid}>
                    {featuresData.map(feature => (
                        <Card key={feature.id} interactive className={styles.card}>
                            <div className={styles.icon}>{feature.icon}</div>
                            <h3 className={styles['card-title']}>{feature.title}</h3>
                            <p className={styles['card-text']}>{feature.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
