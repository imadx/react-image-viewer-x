import { ReactNode } from 'react';

export interface Configuration {
    viewer: {
        maxScale: number;
        minScale: number;
        scaleStep: number;
    };
    controllers: {
        hasZoomIn: boolean;
        hasZoomOut: boolean;
        zoomInIcon?: ReactNode;
        zoomOutIcon?: ReactNode;
    };
    options: {
        hasNoBackdrop?: boolean;
    };
}
