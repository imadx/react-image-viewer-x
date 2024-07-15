import { FC } from 'react';
import { Configuration } from '../types';

type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};
interface ViewerProps {
    src: string;
    alt: string;
    configuration?: DeepPartial<Configuration>;
}
export declare const ImageViewer: FC<ViewerProps>;
export {};
