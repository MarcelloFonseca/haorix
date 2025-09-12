'use client';
import { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons/faSun';

type Size = 'lg' | 'xl';

function LightModeIcon({
  className,
  size,
  onClick,
}: {
  className?: string;
  size?: Size;
  onClick?: () => void;
}): ReactElement {
  return (
    <FontAwesomeIcon icon={faSun} className={className} onClick={onClick} style={{ color: '#ffffff' }} size={size} />
  );
}

export { LightModeIcon };
