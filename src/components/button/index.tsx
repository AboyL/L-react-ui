import React, {
  useContext,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from 'react';
import classnames from 'classnames';
import { ConfigContext } from '../Config-provider';

export enum BtnType {
  default = 'default',
  primary = 'primary',
  dashed = 'dashed',
  link = 'link',
}

interface BaseButtonProps {
  disabled?: boolean;
  className?: string;
  btnType?: BtnType;
  danger?: boolean;
  href?: string;
  prefixCls?: string;
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const context = useContext(ConfigContext);
  const { getPrefixCls } = context;

  const {
    disabled = false,
    className,
    btnType = BtnType.default,
    danger = false,
    href,
    children,
    prefixCls,
    ...restProps
  } = props;
  const prefix = getPrefixCls('btn', prefixCls);

  const classNames = classnames(prefix, className, {
    [`${prefix}-${btnType}`]: btnType,
    [`${prefix}-disabled`]: disabled,
    [`${prefix}-danger`]: danger,
  });
  if (btnType === BtnType.link) {
    return (
      <a className={classNames} href={href} {...restProps}>
        {children}
      </a>
    );
  }
  return (
    <button className={classNames} disabled={disabled} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
