import classNames from 'classnames';
import classes from './button.less';
import React from 'react';

export enum ButtonStyle {
  Primary = 'primary',
  Secondary = 'secondary',
}

const styleMap = {
  [ButtonStyle.Primary]: classes.primary,
  [ButtonStyle.Secondary]: classes.secondary,
}
interface Props {
  className?: string;
  style: ButtonStyle;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

export function Button(props: React.PropsWithChildren<Props>) {
  const {className, style, onClick, children} = props;
  
  return (
    <span className={classNames(classes.button, styleMap[style], className)} onClick={onClick}>
      {children}
    </span>
  )
}
