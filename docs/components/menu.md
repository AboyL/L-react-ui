### 导航菜单

```tsx
import React from 'react';
import { Menu, MenuItem } from 'convection';
import 'convection/styles/index.less';

export default () => (
  <div>
    <Menu defaultActiveKey="1">
      <MenuItem activeKey="1">子菜单项0</MenuItem>
      <MenuItem activeKey="2" disabled>
        子菜单项1
      </MenuItem>
      <MenuItem activeKey="3">子菜单项2</MenuItem>
    </Menu>
    <Menu mode="vertical" defaultActiveKey="2">
      <MenuItem activeKey="1">子菜单项0</MenuItem>
      <MenuItem activeKey="2" disabled>
        子菜单项1
      </MenuItem>
      <MenuItem activeKey="3">子菜单项2</MenuItem>
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
