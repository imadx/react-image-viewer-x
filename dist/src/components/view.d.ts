import { FC } from 'react';

interface State {
    scale: number;
}
interface ViewProps {
    src: string;
    state: State;
}
export declare const View: FC<ViewProps>;
export {};
