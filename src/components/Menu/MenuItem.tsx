import React, { useContext } from 'react';
import classnames from 'classnames';
import { ConfigContext } from '../Config-provider';
import MenuContext from './menuContext';
import { isFunction } from 'lodash';
import { MENU_ITEM_DISPLAY_NAME } from './constants';
export interface MenuItemProps {
  activeKey?: string;
  disabled?: boolean;
  prefixCls?: string;
  className?: string;
}

const MenuItem: React.FC<MenuItemProps> = props => {
  const {
    disabled = false,
    activeKey: activeKey,
    prefixCls,
    className,
  } = props;

  const configContext = useContext(ConfigContext);
  const menuContext = useContext(MenuContext);

  const handleClick = () => {
    if (!disabled && isFunction(menuContext.onSelect)) {
      menuContext.onSelect(activeKey);
    }
  };

  const { getPrefixCls } = configContext;
  const prefix = getPrefixCls('menu-item', prefixCls);
  const classNames = classnames(prefix, className, {
    [`${prefix}-disabled`]: disabled,
    [`${prefix}-active`]: menuContext.activeKey === activeKey,
  });

  return (
    <li className={classNames} onClick={handleClick}>
      {props.children}
    </li>
  );
};
MenuItem.displayName = MENU_ITEM_DISPLAY_NAME;
export default MenuItem;
