---
title: "AbortControllerで任意のPromiseをrejectしてみる"
pubDate:  "2024-05-15 08:01"
---

## AbortControllerとは

AbortControllerというものがある．

https://developer.mozilla.org/ja/docs/Web/API/AbortController

これは主にFetch APIを中断する目的で用いられるオブジェクトだが，このオブジェクトの挙動自体は至極単純で，abortメソッドを呼ぶことでAbortControllerオブジェクトが持つAbortSignalに中断したいことを示すイベントが通知されるだけである．

```js
const controller = new AbortController();
controller.signal.addEventListener(
  "abort",
  () => {
    console.log("aborted");
  },
  { once: true }
);
controller.abort();
```

### result

```
aborted
```

これを使って，任意のPromiseをthenやawaitで待機している状態から離脱できるようなものを作ってみる

## 実装

### abort可能なPromiseを生成する関数

```ts
function abortable<T>(promise: Promise<T>, signal: AbortSignal) {
  return new Promise<T>((resolve, reject) => {
    signal.addEventListener("abort", reject, { once: true });
    promise.then(resolve, reject);
  });
}
```

### 使い方

```ts
function sleep(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

const controller = new AbortController();
const promise = abortable(sleep(10000), controller.signal);
await sleep(5000);
controller.abort();
await promise;
```

上記コードにおいて `controller.abort()` を行わなければ10秒待機して正常終了するが，5秒時点でabortすることによってPromiseがrejectされエラーを投げる．

なお，一度生成されたPromiseの履行を止めることそのものはできないため， `sleep(10000)` は10秒経過後にresolveを呼び出している．

あくまでPromiseが実行するコールバックが外部に副作用を持たない場合には簡単に処理を中断できる．
