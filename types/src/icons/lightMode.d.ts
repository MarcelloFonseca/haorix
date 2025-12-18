import { ReactElement } from 'react';
type Size = 'lg' | 'xl';
declare function LightModeIcon({ className, size, onClick, }: {
    className?: string;
    size?: Size;
    onClick?: () => void;
}): ReactElement;
export { LightModeIcon };
