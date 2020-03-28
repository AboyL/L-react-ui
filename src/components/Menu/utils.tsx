import React, { useContext, useState, HTMLAttributes } from 'react';
import { MENU_ITEM_DISPLAY_NAME, SUB_MENU_DISPLAY_NAME } from './constants';
import { MenuItemProps } from './MenuItem';
import { compact } from 'lodash';
export const renderChildren = (children: React.ReactNode) => {
  return React.Children.map(children, (child, index) => {
    const childElement = child as React.FunctionComponentElement<MenuItemProps>;
    const { displayName } = childElement.type;
    if (
      displayName === MENU_ITEM_DISPLAY_NAME ||
      displayName === SUB_MENU_DISPLAY_NAME
    ) {
      return React.cloneElement(childElement, {
        // 设置默认的key值
        activeKey: `${index}`,
        ...childElement.props,
      });
    } else {
      console.warn('Menu child must is MenuItem');
    }
  });
};

export const getChildrenActiveKeys = (children: React.ReactNode) => {
  const activeKeyList = React.Children.map(children, (child, index) => {
    const childElement = child as React.FunctionComponentElement<MenuItemProps>;
    const { displayName } = childElement.type;
    if (
      displayName === MENU_ITEM_DISPLAY_NAME ||
      displayName === SUB_MENU_DISPLAY_NAME
    ) {
      return childElement.props.activeKey || `${index}`;
    } else {
      return null;
    }
  });
  return compact(activeKeyList);
};
