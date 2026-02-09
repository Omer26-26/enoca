import React from 'react';
import styles from './Hero.module.scss';
import { Button } from '../../ui';

export const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Modern Web İçin <br />
                        <span>Güçlü Bileşenler</span>
                    </h1>
                    <p className={styles.description}>
                        React ve SCSS ile hazırlanmış, erişilebilir ve özelleştirilebilir bileşen kütüphanesi.
                        Projelerinizi daha hızlı ve standartlara uygun geliştirin.
                    </p>
                    <div className={styles.actions}>
                        <Button size="lg">Hemen Başla</Button>
                        <Button size="lg" variant="outline">Daha Fazla Bilgi</Button>
                    </div>
                </div>
                <div className={styles['image-container']}>
                    <img
                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80&fm=webp"
                        alt="Kodlama yapan geliştirici"
                        width="600"
                        height="400"
                        loading="eager"
                        fetchPriority="high"
                    />
                </div>
            </div>
        </section>
    );
};
