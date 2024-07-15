import { FC } from 'react';
import { Configuration } from '../types';

interface ControlsProps {
    onZoomIn?: () => void;
    onZoomOut?: () => void;
    configuration: Configuration["controllers"];
}
export declare const Controls: FC<ControlsProps>;
export {};
