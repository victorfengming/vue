
# [#](https://24kcs.github.io/vue3_study/chapter1/03_HelloWorld.html#_3-第一个-typescript-程序)3. 第一个 TypeScript 程序

## [#](https://24kcs.github.io/vue3_study/chapter1/03_HelloWorld.html#编写-ts-程序)编写 TS 程序

src/helloworld.ts

```typescript
function greeter (person) {
  return 'Hello, ' + person
}

let user = 'Yee'

console.log(greeter(user))
```

## [#](https://24kcs.github.io/vue3_study/chapter1/03_HelloWorld.html#手动编译代码)手动编译代码

我们使用了 `.ts` 扩展名，但是这段代码仅仅是 JavaScript 而已。

在命令行上，运行 TypeScript 编译器：

```bash
tsc helloworld.ts
```

输出结果为一个 `helloworld.js` 文件，它包含了和输入文件中相同的 JavsScript 代码。

在命令行上，通过 Node.js 运行这段代码：

```bash
node helloworld.js
```

控制台输出：

```text
Hello, Yee
```
