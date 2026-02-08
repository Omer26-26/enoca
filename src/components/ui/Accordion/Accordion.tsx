import React, { useState, useRef, useEffect } from 'react';
import styles from './Accordion.module.scss';

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    isOpen?: boolean;
    onClick?: () => void;
    id: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
    title,
    children,
    isOpen = false,
    onClick,
    id
}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number | undefined>(isOpen ? undefined : 0);

    useEffect(() => {
        if (isOpen) {
            const scrollHeight = contentRef.current?.scrollHeight;
            setHeight(scrollHeight);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    return (
        <div className={styles.item}>
            <h3>
                <button
                    type="button"
                    className={styles.trigger}
                    onClick={onClick}
                    aria-expanded={isOpen}
                    aria-controls={`content-${id}`}
                    id={`trigger-${id}`}
                >
                    {title}
                    <svg
                        className={`${styles.icon} ${isOpen ? styles['icon--expanded'] : ''}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
            </h3>
            <div
                id={`content-${id}`}
                role="region"
                aria-labelledby={`trigger-${id}`}
                className={styles.content}
                style={{ height: height !== undefined ? `${height}px` : undefined }}
            >
                <div ref={contentRef} className={styles['content-inner']}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export interface AccordionProps {
    items: {
        id: string;
        title: string;
        content: React.ReactNode;
    }[];
    allowMultiple?: boolean;
    className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
    items,
    allowMultiple = false,
    className = ''
}) => {
    const [openItems, setOpenItems] = useState<Set<string>>(new Set());

    const toggleItem = (id: string) => {
        setOpenItems(prev => {
            const newSet = new Set(allowMultiple ? prev : []);
            if (prev.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    return (
        <div className={`${styles.accordion} ${className}`}>
            {items.map(item => (
                <AccordionItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    isOpen={openItems.has(item.id)}
                    onClick={() => toggleItem(item.id)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
};
