# 代码结构

我们将要学习的第一个内容就是构建代码块。

## 语句

语句是执行行为（action）的语法结构和命令。

我们已经见过了 `alert('Hello, world!')` 这样可以用来显示消息的语句。

我们可以在代码中编写任意数量的语句。语句之间可以使用分号进行分割。

例如，我们将 “Hello World” 这条信息一分为二：

```javascript
alert('Hello'); alert('World');
```

通常，每条语句独占一行，以提高代码的可读性：

```javascript
alert('Hello');
alert('World');
```

## 分号

当存在换行符（line break）时，在大多数情况下<u>可以省略分号</u>。

下面的代码也是可以运行的：

```javascript
alert('Hello')
alert('World')
```

在这，JavaScript 将换行符理解成“隐式”的分号。这也被称为 [自动分号插入](https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion)。

**在大多数情况下，换行意味着一个分号。但是“大多数情况”并不意味着“总是”！**

有很多换行并不是分号的例子，例如：

```javascript
alert(3 +
1
+ 2);
```

代码输出 `6`，因为 JavaScript 并没有在这里插入分号。显而易见的是，如果一行以加号 `"+"` 结尾，那么这是一个“不完整的表达式”，不需要分号。所以，这个例子得到了预期的结果。

**但存在 JavaScript 无法确定是否真的需要自动插入分号的情况。**

这种情况下发生的错误是很难被找到和解决的。

:::info 一个错误的例子

如果你好奇地想知道一个这种错误的具体例子，那你可以看看下面这段代码：

```javascript
alert("Hello");

[1, 2].forEach(alert);
```

你不需要考虑方括号 `[]` 和 `forEach` 的含义，现在它们并不重要，之后我们会学习它们。让我们先记住这段代码的运行结果：先显示 `Hello`，然后显示 `1`，然后 `2`。

现在，让我们删除 `alert` 语句后的分号：

```javascript
alert("Hello")

[1, 2].forEach(alert);
```

与上面的代码相比只有一个字符的区别：第一行末尾的分号不见了。

如果我们运行这段代码，只有第一个 `Hello` 会被显示出来（并且有一个报错，你可能需要打开控制台才能看到它）。并且不会再有数字被显示出来。

这是因为，JavaScript 引擎并没有假设在方括号 `[...]` 前有一个分号。因此，最后一个示例中的代码被视为了单个语句。

对于引擎来说，它是这样的：

```javascript
alert("Hello")[1, 2].forEach(alert);
```

看起来很奇怪，对吧？在这种情况下，这样将两行代码合并到一起是不对的。我们需要在 `alert` 后面加一个分号，代码才能正常运行。

这也可能发生在其他情况下。

:::

即使语句被换行符分隔了，我们依然建议在它们之间加分号。这个规则被社区广泛采用。我们再次强调一下 —— 大部分时候可以省略分号，但是最好不要省略分号，尤其对新手来说。

## 注释

随着时间推移，程序变得越来越复杂。为代码添加 **注释** 来描述它做了什么和为什么要这样做，变得非常有必要了。

你可以在脚本的任何地方添加注释，它们并不会影响代码的执行，因为引擎会直接忽略它们。

**单行注释以两个正斜杠字符 `//` 开始。**

这一行的剩余部分是注释。它可能独占一行或者跟随在一条语句的后面。

就像这样：

```javascript
// 这行注释独占一行
alert('Hello');

alert('World'); // 这行注释跟随在语句后面
```

**多行注释以一个正斜杠和星号开始 `“/\*”` 并以一个星号和正斜杠结束 `“\*/”`。**

就像这样:

```javascript
/* 两个消息的例子。
这是一个多行注释。
*/
alert('Hello');
alert('World');
```

注释的内容被忽略了，所以如果我们在 `/* … */` 中放入代码，并不会执行。

有时候，可以很方便地临时禁用代码：

```javascript
/* 注释代码
alert('Hello');
*/
alert('World');
```

:::info 使用快捷键！

在大多数的编辑器中，一行代码可以使用 Ctrl+/ 快捷键进行单行注释，诸如 Ctrl+Shift+/ 的快捷键可以进行多行注释（选择代码，然后按下快捷键）。对于 Mac 电脑，应使用 Cmd 而不是 Ctrl，使用 Option 而不是 Shift。

:::

::: danger 不支持注释嵌套！

不要在 `/*...*/` 内嵌套另一个 `/*...*/`。

下面这段代码报错而无法执行：

```javascript
/*
  /* 嵌套注释 ?!? */
*/
alert( 'World' );
```

:::

对你的代码进行注释，这还有什么可犹豫的！

注释会增加代码总量，但这一点也不是什么问题。有很多工具可以帮你在把代码部署到服务器之前缩减代码。这些工具会移除注释，这样注释就不会出现在发布的脚本中。所以，注释对我们的生产没有任何负面影响。

在后面的教程中，会有一章 [代码质量](https://zh.javascript.info/code-quality) 的内容解释如何更好地写注释。