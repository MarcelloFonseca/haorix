'use client';

import { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon';

function DarkModeIcon({
  className,
  size,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
  size?: 'lg' | 'xl';
}): ReactElement {
  return (
    <FontAwesomeIcon icon={faMoon} style={{ color: '#000000' }} size={size} className={className} onClick={onClick} />
  );
}

export { DarkModeIcon };
