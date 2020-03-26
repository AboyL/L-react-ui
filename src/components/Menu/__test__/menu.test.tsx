import React from 'react';
import {
  render,
  fireEvent,
  RenderResult,
  cleanup,
} from '@testing-library/react';
import Menu, { MenuProps, menuMode } from '../index';
import MenuItem from '../MenuItem';
import { PRE_FIX } from '../../../utils/constants';

const defaultKey = 'default';
const disabledText = 'disabled';
const testSelectText = 'testSelectText';

const testClass = 'test';
const testId = 'testid';
const testVerticalId = 'testVerticalId';
const testProps: MenuProps = {
  defaultActiveKey: defaultKey,
  onSelect: jest.fn(),
  className: testClass,
};

const testVerticalProps: MenuProps = {
  defaultActiveKey: defaultKey,
  mode: menuMode.vertical,
  onSelect: jest.fn(),
  className: testClass,
};

const generateMenu = (props: MenuProps, testId: string) => {
  return (
    <Menu {...props} data-testid={testId}>
      <MenuItem activeKey={defaultKey}>{defaultKey}</MenuItem>
      <MenuItem activeKey={disabledText} disabled>
        {disabledText}
      </MenuItem>
      <MenuItem activeKey={testSelectText}>{testSelectText}</MenuItem>
    </Menu>
  );
};
let wrapper: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;
describe('test menu', () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps, testId));
    menuElement = wrapper.getByTestId(testId);
    activeElement = wrapper.getByText(defaultKey);
    disabledElement = wrapper.getByText(disabledText);
  });
  afterEach(cleanup);
  test('是否基于默认参数进行了 Menu 以及 MenuItem 的渲染', () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass(`${PRE_FIX}-menu ${testClass}`);
    expect(menuElement.getElementsByTagName('li').length).toBe(3);
    expect(activeElement).toHaveClass(
      `${PRE_FIX}-menu-item ${PRE_FIX}-menu-item-active`,
    );
    expect(disabledElement).toHaveClass(
      `${PRE_FIX}-menu-item ${PRE_FIX}-menu-item-disabled`,
    );
  });

  test('点击对应的MenuItem是否做出了正确的改变', () => {
    const selectElement = wrapper.getByText(testSelectText);
    fireEvent.click(selectElement);
    expect(activeElement).not.toHaveClass(
      `${PRE_FIX}-menu-item ${PRE_FIX}-menu-item-active`,
    );
    expect(selectElement).toHaveClass(
      `${PRE_FIX}-menu-item ${PRE_FIX}-menu-item-active`,
    );
    expect(testProps.onSelect).toHaveBeenCalledWith(testSelectText);
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass(
      `${PRE_FIX}-menu-item ${PRE_FIX}-menu-item-active`,
    );
    expect(selectElement).toHaveClass(
      `${PRE_FIX}-menu-item ${PRE_FIX}-menu-item-active`,
    );
    // 依旧会进行一次触发操作 存在问题 怎么清除上一次触发呢？
    expect(testProps.onSelect).not.toHaveBeenCalledWith(disabledText);
  });

  test('是否正确的进行了竖直渲染', () => {
    cleanup(); // cleanup 看起来没有什么作用
    const wrapper2 = render(generateMenu(testVerticalProps, testVerticalId));
    const menuElement2 = wrapper2.getByTestId(testVerticalId);
    expect(menuElement2).toHaveClass(`${PRE_FIX}-menu-vertical`);
  });
});
