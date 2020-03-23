import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps, BtnType } from './index'
import { PRE_FIX } from '../../utils/constants'
describe('test button', () => {
  const text = 'text'

  test('test button is default', () => {
    const btnProps: ButtonProps = {
      onClick: jest.fn()
    }

    const wrapper = render(<Button {...btnProps}>{text}</Button>)
    const element = wrapper.getByText(text) as HTMLButtonElement
    expect(element).toBeTruthy()
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass(`${PRE_FIX}-btn-${BtnType.default}`)
    expect((element).disabled).toBeFalsy()
    expect(element.tagName).toBe('BUTTON')
    // 是否被点击
    fireEvent.click(element)
    expect(btnProps.onClick).toHaveBeenCalled()
  })

  test('test button is disabled', () => {
    const btnProps: ButtonProps = {
      disabled: true,
      onClick: jest.fn()
    }
    const wrapper = render(<Button {...btnProps}>{text}</Button>)
    const element = wrapper.getByText(text) as HTMLButtonElement
    // 是否存在disabled类
    expect(element).toHaveClass(`${PRE_FIX}-btn-disabled`)
    // 是否是disable属性
    expect(element.disabled).toBeTruthy()
    // 是否没有被点击
    fireEvent.click(element)
    expect(btnProps.onClick).not.toHaveBeenCalled()
  })

  test('test button is link', () => {
    const wrapper = render(<Button btnType={BtnType.link}>{text}</Button>)
    const element = wrapper.getByText(text) as HTMLAnchorElement
    expect(element.tagName).toBe('A')
  })
  test('test button pre-fix', () => {
    const prefix = 'hh'
    const wrapper = render(<Button prefixCls={prefix}>{text}</Button>)
    const element = wrapper.getByText(text) as HTMLAnchorElement
    expect(element).toHaveClass(`${prefix}-${BtnType.default}`)
  })
})