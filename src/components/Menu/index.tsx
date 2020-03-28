import React, { useContext, useState, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { ConfigContext } from '../Config-provider';
import menuContext from './menuContext';
import { isFunction } from 'lodash';
import { MENU_ITEM_DISPLAY_NAME } from './constants';
import { MenuItemProps } from './MenuItem';
export type selectFunc = (key: string) => void;
export enum menuMode {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

interface baseMenuProps {
  mode?: menuMode;
  defaultActiveKey?: string;
  onSelect: selectFunc;
  prefixCls?: string;
}
export type MenuProps = baseMenuProps & HTMLAttributes<HTMLElement>;

const Menu: React.FC<MenuProps> = props => {
  const {
    mode = menuMode.horizontal,
    defaultActiveKey = '',
    onSelect = () => {},
    prefixCls,
    className,
    children,
    ...rest
  } = props;

  const context = useContext(ConfigContext);
  const [activeKey, setActiveKey] = useState(defaultActiveKey);
  const { getPrefixCls } = context;
  const prefix = getPrefixCls('menu', prefixCls);
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<
        MenuItemProps
      >;
      if (childElement.type.displayName === MENU_ITEM_DISPLAY_NAME) {
        return React.cloneElement(childElement, {
          // 设置默认的key值
          activeKey: `${index}`,
          ...childElement.props,
        });
      } else {
        console.error('Menu child must is MenuItem');
      }
    });
  };
  const classNames = classnames(prefix, className, {
    [`${prefix}-${mode}`]: mode,
  });

  const menuContextValue = {
    activeKey,
    onSelect(key: string) {
      setActiveKey(key);
      isFunction(onSelect) && onSelect(key);
    },
  };

  return (
    <menuContext.Provider value={menuContextValue}>
      <ul {...rest} className={classNames}>
        {renderChildren()}
      </ul>
    </menuContext.Provider>
  );
};

export default Menu;
