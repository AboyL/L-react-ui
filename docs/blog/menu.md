### Menu

1. 怎么处理 Menu 跟 MenuItem
   使用 context 进行通信

2. 如何限制 Menu 中的子组件只能是 MenuItem
   使用 children.type

3. 如何设置默认的属性？ 设置为 index
   借助 React.cloneElement 传递参数

4. 测试注意点
   在多次使用 fireEvent 处理回调函数的时候 可以使用**lastCalledWith**来判断最后一次的调用值

5. SubMenu 开发
   梳理效果
   SubMenu 可以作为 Menu 的子组件
   SubMenu 的原生元素为 li
   SubMenu 内置了一个 Menu 元素
   SubMenu 平时是一个隐藏状态
   当横向的时候 hoverSubMenu 进行展示
   当竖向的时候 点击 SubMenu 进行展示
   点击一个展示的 SubMenu 会合起来
   当备选项为 SubMenu 中的元素的时候 SubMenu 处于被选中状态 颜色改变 即使此时是合着的状态

   流程

   1. 显示组件
