'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon';
import { ReactElement } from 'react';

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
