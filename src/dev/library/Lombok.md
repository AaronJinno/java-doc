---
title: Lombok
date: 2023-07-12
---
Lombok是用来加快项目开发的。可以使用注解为Javabean创建 getter、setter、toString、equal、构造函数等。

常用于POJO模块。
#### pom中引入Lombok
```xml
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.28</version>
</dependency>
```
有个小bug，虽然spring boot已经有了Lombok的依赖，但是还是需要指定版本。

#### 常用注解
在JavaBean中使用一系列注解来实现对应的功能，以下注解都用在类上：
- @Data：自动对每个属性生成setter、getter。
    - 外加toString方法、equals方法和hashCode方法
- @NoArgsConstructor：自动生成无参构造
- @AllArgsConstructor：自动生成全参构造

还有很多其他注解，不过不常用，有需求自己写，不用记。

#### 使用示例
```java
@Data
@NoArgsConstructor
@AllArgsContructor //可选
public class User{
    private String uname;
    private int age;
}
```

#### LomBok的缺点
- 可读性降低：getter、setter、构造函数等都被隐藏了。
- 调试困难：注解创建的代码调试的时候看不到。
- 侵入性强：代码运行将依赖Lombok。

很多项目都是严格进制使用Lombok，使用IDEA插入getter、setter等代码很方便，没必要为了一点点便利性，造成这么多麻烦。