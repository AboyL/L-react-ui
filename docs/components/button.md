## Button

#### 基本用法

```tsx
import React from 'react';
import { Button } from 'convection';
import 'convection/styles/index.less';

export default () => (
  <div>
    <Button>普通按钮</Button>
    <Button
      onClick={() => {
        alert(1);
      }}
    >
      按钮事件
    </Button>
    <Button btnType="dashed">虚线按钮</Button>
    <Button
      btnType="link"
      href="http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool"
    >
      标签按钮
    </Button>
    <Button btnType="link" disabled>
      标签按钮禁用
    </Button>
    <Button disabled>禁用按钮</Button>
    <Button btnType="primary">主要按钮</Button>
    <Button btnType="primary" disabled>
      主要按钮禁用
    </Button>
    <Button danger>危险按钮</Button>
    <Button danger disabled>
      危险按钮禁用
    </Button>
  </div>
);
```

## API 文档

| 参数     | 说明                               | 类型    | 默认值  |
| -------- | ---------------------------------- | ------- | ------- |
| btnType  | 按钮类型 primary \| dashed \| link | string  | default |
| disabled | 按钮失效状态                       | boolean | false   |
| danger   | 设置危险按钮                       | boolean | false   |

支持原生 button 的其他所有属性。
