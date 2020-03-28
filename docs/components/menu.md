### 导航菜单

```tsx
import React from 'react';
import { Menu, MenuItem, SubMenu } from 'convection';
import 'convection/styles/index.less';

export default () => (
  <div>
    <Menu defaultActiveKey="1">
      <MenuItem activeKey="0">子菜单项0</MenuItem>
      <MenuItem activeKey="1" disabled>
        子菜单项1
      </MenuItem>
      <MenuItem activeKey="2">子菜单项2</MenuItem>
      <div>非MenuItem组件不会进行渲染</div>
      <MenuItem>默认key值为对应的index 此时为4</MenuItem>
      <SubMenu title="sub-menu">
        <MenuItem activeKey="sub-1">sub-1</MenuItem>
        <MenuItem activeKey="sub-2">sub-2</MenuItem>
      </SubMenu>
    </Menu>
    <Menu mode="vertical" defaultActiveKey="2" style={{ width: 256 }}>
      <MenuItem activeKey="0">子菜单项0</MenuItem>
      <MenuItem activeKey="1" disabled>
        子菜单项1
      </MenuItem>
      <SubMenu title="sub-menu">
        <MenuItem activeKey="sub-1">sub-1</MenuItem>
        <MenuItem activeKey="sub-2">sub-2</MenuItem>
      </SubMenu>
      <MenuItem activeKey="2">子菜单项2</MenuItem>
    </Menu>
  </div>
);
```

## API 文档

### Menu

| 参数       | 说明                        | 类型     | 默认值     |
| ---------- | --------------------------- | -------- | ---------- |
| mode       | 类型 vertical \| horizontal | string   | horizontal |
| defaultKey | 初始菜单对应的 key          | string   |            |
| onSelect   | 选择事件                    | function |            |
| className  |                             |          |            |
| style      |                             |          |            |

### Menu.Item

| 参数     | 说明           | 类型    | 默认值 |
| -------- | -------------- | ------- | ------ |
| key      | 唯一标识的 key | string  |        |
| disabled | 是否不可用     | boolean |        |

### Menu.SubMenu

| 参数     | 说明       | 类型    | 默认值 |
| -------- | ---------- | ------- | ------ |
| title    | 名称       | string  |        |
| disabled | 是否不可用 | boolean |        |
