# Java 服务模板

用于 Order Service、Ledger Service、状态机和幂等写入。建议复制为一个独立 Maven 模块，再替换包名和持久化实现。

## 目录

~~~text
src/main/java/App.java
src/main/java/domain/
src/main/java/service/
src/test/java/AppTest.java
pom.xml
~~~

## 最小入口

~~~java
public final class App {
  public static void main(String[] args) {
    System.out.println("coding-sprint-lab java template");
  }
}
~~~

## 命令

~~~bash
mvn test
mvn -q package
~~~

## 替换点

- 用不可变命令对象承载订单事件。
- 用唯一键实现 event_id 幂等，用事务写订单和账本。
- 账本只追加分录；每个凭证借贷合计必须相等。
- 为重复事件、超时和非法状态迁移补测试。
