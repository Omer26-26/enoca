import React from 'react';
import styles from './Input.module.scss';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className = '', label, error, helperText, id, ...props }, ref) => {
        // Generate unique ID if not provided, for accessibility
        const uniqueId = React.useId();
        const inputId = id || uniqueId;
        const errorId = `${inputId}-error`;
        const helperId = `${inputId}-helper`;

        // Determine aria-describedby
        const describedBy = [
            error ? errorId : undefined,
            helperText ? helperId : undefined,
        ].filter(Boolean).join(' ') || undefined;

        return (
            <div className={`${styles.container} ${className}`}>
                {label && (
                    <label htmlFor={inputId} className={styles.label}>
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    id={inputId}
                    className={`${styles.input} ${error ? styles['input--error'] : ''}`}
                    aria-invalid={!!error}
                    aria-describedby={describedBy}
                    {...props}
                />
                {error && (
                    <span id={errorId} className={styles.error} role="alert">
                        {error}
                    </span>
                )}
                {!error && helperText && (
                    <span id={helperId} className={styles.helper}>
                        {helperText}
                    </span>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';
