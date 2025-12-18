import * as React from 'react';
type HamburgerMenuProps = {
    className?: string;
    isOpen: boolean;
    onClick: () => void;
    controlsId?: string;
};
declare function HamburgerMenu({ className, isOpen, onClick, controlsId }: HamburgerMenuProps): React.JSX.Element;
export { HamburgerMenu };
