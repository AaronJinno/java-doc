---
title: "   Java类库介绍 ->"
icon: a-gongjuxiang1
---
:::info
所有Java类库都是开发中常用的工具类。

以第三方类库（如hutool）为蓝本进行分类收集整理，开发时直接复制，改下包名就能用。

- 为了以后能看懂别人的源码，有些操作能手动实现就不必封装
- 有些功能有通用的解决jar包，就不再封装（如lombok）
:::


## 第三方类库
### Hutool
- [官网](https://www.hutool.cn/)
- [文档](https://doc.hutool.cn/pages/index/)
- [github](https://github.com/dromara/hutool/)

### commons-lang
apache推出的常用类库


## 类库分类

### 公共类
- Result：响应类
- exception：通用异常类
- constant：通用常量类
- properties：属性配置类


### 便捷开发
- Lombok

### 数据格式
- JSON操作

### 表达式
- 正则表达式

### 文件操作
- 文件操作
    - 文件类型判断
- 图片操作
- Excel操作

### 系统功能
- 日志
### 常用功能
- 验证码

## 备选组件
- 克隆
- 对象判断与操作：长度、是否相等、是否为空、序列化
- 命令行工具：用于执行命令后命令
- FTP、SFTP
- 缓存
- uuid
- IO基础工具
- 资源管理
- 数据类型转换
    - 常用数据类型转换
    - 进制、单位转换
    - 编码转换
- 日期和时间
- 字符串工具
- 数学工具：各种基本操作+数学公式
- Core表达式
- 随机内容：随机数字、随机文本
- 二维码