## Icon

#### 基本用法

```tsx
import React from 'react';
import { Icon } from 'convection';
import 'convection/styles/index.less';

export default () => (
  <div>
    <Icon icon="coffee" theme="primary">
      普通按钮
    </Icon>
  </div>
);
```

## API 文档

| 参数  | 说明                                  | 类型   | 默认值  |
| ----- | ------------------------------------- | ------ | ------- |
| theme | 按钮类型 primary \| success \| danger | string | default |
| icon  | 同 react-fontawesome                  | string | default |
