import React from 'react';
import styles from './Button.module.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        children,
        className = '',
        variant = 'primary',
        size = 'md',
        fullWidth = false,
        isLoading = false,
        disabled,
        ...props
    }, ref) => {

        const rootClassName = [
            styles.button,
            styles[`button--${variant}`],
            styles[`button--${size}`],
            fullWidth ? styles[`button--full-width`] : '',
            className,
        ].filter(Boolean).join(' ');

        return (
            <button
                ref={ref}
                className={rootClassName}
                disabled={disabled || isLoading}
                aria-busy={isLoading}
                {...props}
            >
                {isLoading ? (
                    <span className={styles.spinner} aria-hidden="true">Loading...</span>
                ) : children}
            </button>
        );
    }
);

Button.displayName = 'Button';
