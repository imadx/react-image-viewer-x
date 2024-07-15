import { FC } from 'react';
import { Configuration } from '../types';

interface ViewerProps {
    src: string;
    alt: string;
    configuration?: Partial<Configuration>;
}
export declare const ImageViewer: FC<ViewerProps>;
export {};
