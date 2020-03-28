### Menu

1. 怎么处理 Menu 跟 MenuItem
   使用 context 进行通信

2. 如何限制 Menu 中的子组件只能是 MenuItem
   使用 children.type

3. 如何设置默认的属性？ 设置为 index
   借助 React.cloneElement 传递参数

4. 测试注意点
   在多次使用 fireEvent 处理回调函数的时候 可以使用**lastCalledWith**来判断最后一次的调用值
