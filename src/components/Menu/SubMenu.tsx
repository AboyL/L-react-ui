import React, { useContext, useState, useEffect, MouseEvent } from 'react';
import classnames from 'classnames';
import { ConfigContext } from '../Config-provider';
import MenuContext from './menuContext';
import { renderChildren, getChildrenActiveKeys } from './utils';

import { SUB_MENU_DISPLAY_NAME } from './constants';

export interface BaseSubMenuProps {
  title?: string;
  prefixCls?: string;
}

type SubMenuProps = BaseSubMenuProps & React.LiHTMLAttributes<HTMLElement>;

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { title, prefixCls, className, children } = props;
  const menuContext = useContext(MenuContext);
  const { mode } = menuContext;
  const [activeKeyList, setActiveKeyList] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    // 处理最外面的点击事件
    const closeOpen = (e: globalThis.MouseEvent) => {
      console.log('closeOpen', e);
      setIsOpen(false);
    };
    document.addEventListener('click', closeOpen);
    return () => {
      document.removeEventListener('click', closeOpen);
    };
  }, []);

  useEffect(() => {
    const list = getChildrenActiveKeys(children);
    setActiveKeyList(list);
  }, [children]);

  const configContext = useContext(ConfigContext);
  const { getPrefixCls } = configContext;
  const prefix = getPrefixCls('menu-sub-menu', prefixCls);
  const classNames = classnames(prefix, className, {
    [`${prefix}-active`]: activeKeyList.find(
      (v) => v === menuContext.activeKey,
    ),
    [`${prefix}-${mode}`]: mode,
  });
  const subMenuContentClassPre = getPrefixCls(
    'menu-sub-menu-content',
    prefixCls,
  );
  const subMenuContentClass = classnames(subMenuContentClassPre, {
    [`${subMenuContentClassPre}-open`]: isOpen,
  });

  const handleClick = (e: React.MouseEvent) => {
    stopPropagation(e);
    setIsOpen(!isOpen);
  };
  const stopPropagation = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };
  return (
    <li className={classNames} onClick={handleClick}>
      <span>{title}</span>
      <ul className={subMenuContentClass} onClick={stopPropagation}>
        {children}
      </ul>
    </li>
  );
};
SubMenu.displayName = SUB_MENU_DISPLAY_NAME;
export default SubMenu;
