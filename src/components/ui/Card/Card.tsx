import React from 'react';
import styles from './Card.module.scss';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'elevated' | 'outlined';
    interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({
        children,
        className = '',
        variant = 'default',
        interactive = false,
        ...props
    }, ref) => {

        const rootClassName = [
            styles.card,
            styles[`card--${variant}`],
            interactive ? styles['card--interactive'] : '',
            className,
        ].filter(Boolean).join(' ');

        return (
            <div
                ref={ref}
                className={rootClassName}
                role={interactive ? 'button' : undefined}
                tabIndex={interactive ? 0 : undefined}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = 'Card';
