import React from 'react';
import styles from './Pricing.module.scss';
import { Card, Button } from '../../ui';

const plans = [
    {
        id: 1,
        name: 'Başlangıç',
        price: '₺0',
        frequency: '/ay',
        description: 'Bireysel kullanım ve hobi projeleri için mükemmel.',
        features: [
            { text: '5 Proje', included: true },
            { text: 'Topluluk Desteği', included: true },
            { text: 'Temel Bileşenler', included: true },
            { text: 'Özel Domain', included: false },
            { text: 'Analitik Araçları', included: false },
        ],
        cta: 'Ücretsiz Başla',
        variant: 'outlined' as const,
    },
    {
        id: 2,
        name: 'Pro',
        price: '₺199',
        frequency: '/ay',
        description: 'Büyüyen ekipler ve işletmeler için gelişmiş özellikler.',
        features: [
            { text: 'Sınırsız Proje', included: true },
            { text: 'Öncelikli Destek', included: true },
            { text: 'Tüm Bileşenler', included: true },
            { text: 'Özel Domain', included: true },
            { text: 'Analitik Araçları', included: true },
        ],
        cta: 'Satın Al',
        popular: true,
        variant: 'default' as const,
    },
    {
        id: 3,
        name: 'Kurumsal',
        price: '₺499',
        frequency: '/ay',
        description: 'Büyük ölçekli organizasyonlar için tam kontrol.',
        features: [
            { text: 'Sınırsız Proje', included: true },
            { text: '7/24 Canlı Destek', included: true },
            { text: 'Özel Geliştirme', included: true },
            { text: 'SSO Entegrasyonu', included: true },
            { text: 'SLA Garantisi', included: true },
        ],
        cta: 'İletişime Geç',
        variant: 'outlined' as const,
    },
];

export const Pricing: React.FC = () => {
    return (
        <section id="pricing" className={styles.pricing}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Basit ve Şeffaf Fiyatlandırma</h2>
                    <p className={styles.description}>
                        İhtiyacınıza en uygun planı seçin. Gizli ücret yok, istediğiniz zaman iptal edin.
                    </p>
                </div>

                <div className={styles.grid}>
                    {plans.map((plan) => (
                        <Card
                            key={plan.id}
                            className={`${styles.card} ${plan.popular ? styles['card--popular'] : ''}`}
                            variant={plan.variant}
                        >
                            {plan.popular && <div className={styles.badge}>Popüler</div>}

                            <h3 className={styles['plan-name']}>{plan.name}</h3>
                            <div className={styles.price}>
                                {plan.price}<span>{plan.frequency}</span>
                            </div>

                            <ul className={styles['features-list']}>
                                {plan.features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className={`${styles.feature} ${!feature.included ? styles['feature--disabled'] : ''}`}
                                    >
                                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature.text}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.popular ? 'primary' : 'outline'}
                                fullWidth
                            >
                                {plan.cta}
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
