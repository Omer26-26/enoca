import React, { useState } from 'react';
import styles from './Contact.module.scss';
import { Input, Button } from '../../ui';

interface FormState {
    name: string;
    email: string;
    message: string;
}

interface Errors {
    name?: string;
    email?: string;
    message?: string;
}

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormState>({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState<Errors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validate = (): boolean => {
        const newErrors: Errors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Lütfen adınızı ve soyadınızı giriniz.';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'E-posta adresi boş bırakılamaz.';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Lütfen geçerli bir e-posta adresi giriniz (örn: ornek@email.com).';
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Lütfen mesajınızı yazınız.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (validate()) {
            setIsSubmitting(true);

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({ name: '', email: '', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => setIsSuccess(false), 5000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name as keyof Errors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>İletişime Geçin</h2>
                    <p className={styles.description}>
                        Projeleriniz için özel bir çözüme mi ihtiyacınız var? Bize yazın.
                    </p>
                </div>

                {isSuccess ? (
                    <div className={styles['success-message']}>
                        Mesajınız başarıyla gönderildi! Size en kısa sürede dönüş yapacağız.
                    </div>
                ) : (
                    <form className={styles.form} onSubmit={handleSubmit} noValidate>
                        <Input
                            name="name"
                            label="Ad Soyad"
                            placeholder="Adınız ve Soyadınız"
                            value={formData.name}
                            onChange={handleChange}
                            error={errors.name}
                            disabled={isSubmitting}
                        />
                        <Input
                            name="email"
                            type="email"
                            label="E-posta Adresi"
                            placeholder="ornek@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            error={errors.email}
                            disabled={isSubmitting}
                        />
                        <Input
                            name="message"
                            label="Mesajınız"
                            placeholder="Bize ne söylemek istersiniz?"
                            value={formData.message}
                            onChange={handleChange}
                            error={errors.message}
                            disabled={isSubmitting}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            size="lg"
                            isLoading={isSubmitting}
                        >
                            Gönder
                        </Button>
                    </form>
                )}
            </div>
        </section>
    );
};
