import classNames from 'classnames';
import classes from './button.less';
import React from 'react';

export enum ButtonStyle {
  Primary = 'primary',
}

const styleMap = {
  [ButtonStyle.Primary]: classes.primary,
}
interface Props {
  style: ButtonStyle;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

export function Button(props: React.PropsWithChildren<Props>) {
  const {style, onClick, children} = props;
  
  return (
    <span className={classNames(classes.button, styleMap[style])} onClick={onClick}>
      {children}
    </span>
  )
}
