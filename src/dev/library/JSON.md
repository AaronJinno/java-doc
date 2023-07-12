---
title: JSON
date: 2023-07-12
---
:::info
各种数据类型（Java对象）转JSON和JSON转各种数据类型（Java对象）是很常用的操作

常用的JSON库有：Jackson（Spring内置）、fastjson（阿里）、gson（Google）。
:::

## Jackson
Jackson是SpringBoot默认支持的JSON库，可以自动装配。

Jackson的主要用于Java对象与JSON间的互相转换（序列号与反序列化）。
- 从Java对象生成JSON的过程称为 [ 序列化Java对象到JSON ]
- 将JSON解析为Java对象的过程称为 [ 从JSON反序列化Java对象 ]
### 1. 引入Jackson
如果引入了`spring-boot-starter-web`模块，将自动引入`spring-boot-starter-json`（他就是Jackson）。

如果当前模块部署web模块，或未使用SpringBoot，就需要手动引入了。

#### 手动引入spring-boot-starter-json
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-json</artifactId>
</dependency>
```
#### 手动引入Jackson
```xml
<dependency> 
    <groupId>com.fasterxml.jackson.core</groupId> 
    <artifactId>jackson-databind</artifactId> 
    <version>2.9.1</version> 
</dependency>
```
### 2. 基本使用
最简单也是最常用的方法：将Object 转为 JSON 以及将Json转为Object

创建一个实体类作为测试：
```java
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Person {
    private String username;
    private int age;
    //注意这是Date格式
    private Date birthday;
}
```

#### 2.1 序列化：对象->JSON
创建对象，并将对象转为JSON字符串
```java
@Test
    void jsonTest() throws JsonProcessingException {
        //创建Java对象
        Person person = new Person("Jinno",12,new Date());

        //创建ObjectMapper对象
        ObjectMapper objectMapper = new ObjectMapper();
        // 调用writeValueAsString方法将Java对象序列号成JSON字符串
        String jsonString = objectMapper.writeValueAsString(person);
        System.out.println(jsonString);
    }
```
打印结果为：
```json
{"username":"Jinno","age":12,"birthday":1689155390494}
```

#### 2.2 反序列化：JSON->对象
```java
@Test
void jsonTest() throws JsonProcessingException {

    String s = "{\"username\":\"Aaron\",\"age\":20,\"birthday\":1689155390494}";

    //创建ObjectMapper对象
    ObjectMapper objectMapper = new ObjectMapper();
    //调用readValue方法，将字符串反序列化为Java对象
    Person person = objectMapper.readValue(s, Person.class);
    System.out.println(person);
}
```
打印结果为：(这是Lombok重写toString()的返回结果)
```java
Person(username=Aaron, age=20, birthday=Wed Jul 12 17:49:50 CST 2023)
```

### 3. ObjectMapper

### 4. 日期处理

### 5. 高级用法
#### 使用注解
#### 对象集合

### 6. 统一配置

### 7. 封装ObjectMapper
创建一个类，继承ObjectMapper，在类的构造函数中将常用的配置项都配置好，以后使用的时候就使用封装好的ObjectMapper，省的每次使用都要配置。
```java
public class JacksonObjectMapper extends ObjectMapper {

    // 定义日期格式
    public static final String DEFAULT_DATE_FORMAT = "yyyy-MM-dd";
    // 定义日期时间格式
    // public static final String DEFAULT_DATE_TIME_FORMAT = "yyyy-MM-dd HH:mm:ss";
    public static final String DEFAULT_DATE_TIME_FORMAT = "yyyy-MM-dd HH:mm";
    // 定义时间格式
    public static final String DEFAULT_TIME_FORMAT = "HH:mm:ss";

    // 在构造函数中进行初始化配置
    public JacksonObjectMapper() {
        super();
        //收到未知属性时不报异常
        this.configure(FAIL_ON_UNKNOWN_PROPERTIES, false);

        //反序列化时，属性不存在的兼容处理
        this.getDeserializationConfig().withoutFeatures(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);

        //创建功能模块：处理日期时间格式
        SimpleModule simpleModule = new SimpleModule()
                .addDeserializer(LocalDateTime.class, new LocalDateTimeDeserializer(DateTimeFormatter.ofPattern(DEFAULT_DATE_TIME_FORMAT)))
                .addDeserializer(LocalDate.class, new LocalDateDeserializer(DateTimeFormatter.ofPattern(DEFAULT_DATE_FORMAT)))
                .addDeserializer(LocalTime.class, new LocalTimeDeserializer(DateTimeFormatter.ofPattern(DEFAULT_TIME_FORMAT)))
                .addSerializer(LocalDateTime.class, new LocalDateTimeSerializer(DateTimeFormatter.ofPattern(DEFAULT_DATE_TIME_FORMAT)))
                .addSerializer(LocalDate.class, new LocalDateSerializer(DateTimeFormatter.ofPattern(DEFAULT_DATE_FORMAT)))
                .addSerializer(LocalTime.class, new LocalTimeSerializer(DateTimeFormatter.ofPattern(DEFAULT_TIME_FORMAT)));

        //注册功能模块 例如，可以添加自定义序列化器和反序列化器
        this.registerModule(simpleModule);
    }
}

```



#### Jackson配置



## FastJson




