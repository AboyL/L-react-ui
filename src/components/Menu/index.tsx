import React, { useContext, useState } from 'react';
import classnames from 'classnames';
import { ConfigContext } from '../Config-provider';
import menuContext from './menuContext';
import { isFunction } from 'lodash';

export type selectFunc = (key: string) => void;
export enum menuMode {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

interface MenuProps {
  mode?: menuMode;
  defaultActiveKey?: string;
  onSelect: selectFunc;
  prefixCls?: string;
  className?: string;
}

const Menu: React.FC<MenuProps> = props => {
  const {
    mode = menuMode.horizontal,
    defaultActiveKey = '',
    onSelect = () => {},
    prefixCls,
    className,
  } = props;

  const context = useContext(ConfigContext);
  const [activeKey, setActiveKey] = useState(defaultActiveKey);
  const { getPrefixCls } = context;
  const prefix = getPrefixCls('menu', prefixCls);

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
      <ul className={classNames}>{props.children}</ul>
    </menuContext.Provider>
  );
};

export default Menu;
