import React from 'react';
import styles from './FAQ.module.scss';
import { Accordion } from '../../ui';

const faqItems = [
    {
        id: 'faq-1',
        title: 'Bu bileşen kütüphanesi ücretsiz mi?',
        content: 'Evet, bu proje tamamen açık kaynaklıdır ve MIT lisansı ile sunulmaktadır. Ticari ve kişisel projelerinizde özgürce kullanabilirsiniz.',
    },
    {
        id: 'faq-2',
        title: 'Hangi teknolojiler kullanıldı?',
        content: 'Proje React, TypeScript ve SCSS (Sass Modules) kullanılarak geliştirildi. Paketleyici olarak Vite tercih edildi.',
    },
    {
        id: 'faq-3',
        title: 'Bileşenleri nasıl özelleştirebilirim?',
        content: 'Tüm stil tanımları CSS değişkenleri (CSS Custom Properties) üzerinden yönetilmektedir. _variables.scss dosyasını düzenleyerek renkleri, fontları ve boşlukları kolayca değiştirebilirsiniz.',
    },
    {
        id: 'faq-4',
        title: 'Erişilebilirlik desteği var mı?',
        content: 'Kesinlikle! Tüm bileşenler WAI-ARIA standartlarına uygun olarak, klavye navigasyonu ve ekran okuyucu desteği düşünülerek tasarlandı.',
    },
];

export const FAQ: React.FC = () => {
    return (
        <section id="faq" className={styles.faq}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Sıkça Sorulan Sorular</h2>
                    <p className={styles.description}>
                        Aklınıza takılan soruların cevaplarını burada bulabilirsiniz.
                    </p>
                </div>

                <Accordion items={faqItems} allowMultiple />
            </div>
        </section>
    );
};
