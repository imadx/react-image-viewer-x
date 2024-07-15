import { FC, ReactNode } from 'react';

interface ControlButtonProps {
    children: ReactNode;
    onClick?: () => void;
}
export declare const ControlButton: FC<ControlButtonProps>;
export {};
