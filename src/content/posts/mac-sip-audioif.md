---
title: "最近のmacOSで古いオーディオインターフェースが使えない時"
pubDate:  2021-02-09T14:34:00+09:00
---

以前 macOS High Sierra にて、Roland の UA-25EX を使おうと思った際にハマったのでメモ。

### サポート外のオーディオインターフェースを使いたい

そもそも、UA-25EX は公式には macOS 10.11 までしか対応しておらず、ドライバをインストールしてもインターフェースを mac に認識させることができない。諦めて新しいのを買えと言われたらそれまでだが、UA-25EX は別として、高い金出して買ったオーディオインターフェースを安値で手放したくないという人も多いだろう。

### なぜ認識しないのか

macOS ではデバイスのドライバを Kext(Kernel Extension)というファイルで管理しているが、その Kext の署名が無効であったり、Kext に対応 OS の制限がかけられていたりすると、最新の OS ではデバイスを認識できなくなる。

### 解決策

この問題を解決するにあたって、[SIP(システム整合性保護)](https://support.apple.com/ja-jp/HT204899)を無効化すれば簡単に解決できるのだが、この行為には大きなセキュリティリスクが伴う(システムの改竄などから守る術がなくなるため、ランサムウェア等のウイルスからの攻撃に著しく脆弱になる)。

SIP には機能別に保護を無効化できる仕組みが用意されているため、それを使ってオーディオインターフェースを認識させるために取り払わなければならない保護(Kext の署名チェック)のみを無効化する。

```sh
csrutil enable --without kext
```

というコマンドをリカバリーモードから実行することで、NVRAM 内に保存されている csr-active-config の値が書きかわり、保護が一部緩和される。

その上で、オーディオインターフェースの公式サイトから配布されているドライバをインストールすると大抵の場合は問題なく使用することができるようになる。