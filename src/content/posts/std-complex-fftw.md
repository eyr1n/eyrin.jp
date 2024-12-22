---
title: 'std::complexをfftw_complexとして扱っていいっていう話(C++11~)'
pubDate: '2024-05-17 16:29'
---

過去の自分への戒め．

https://www.fftw.org/fftw3_doc/Complex-numbers.html

上記ページに書いてある通り，C++の `std::complex` と `fftw_complex` はメモリレイアウトが同じ型なので，

```cpp
std::complex<double> a(1, 2);
fftw_complex *b = reinterpret_cast<fftw_complex *>(&a);
```

してOKだそう．

一応C++11の[Working Draft](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2011/n3242.pdf)を確認してみると，§26.4に

> If z is an lvalue expression of type cv std::complex<T> then:  
> — the expression reinterpret_cast<cv T(&)[2]>(z) shall be well-formed,  
> — reinterpret_cast<cv T(&)[2]>(z)[0] shall designate the real part of z, and  
> — reinterpret_cast<cv T(&)[2]>(z)[1] shall designate the imaginary part of z.  
> Moreover, if a is an expression of type cv std::complex<T>_ and the expression a[i] is well-defined for an integer expression i, then:  
> — reinterpret_cast<cv T_>(a)[2*i] shall designate the real part of a[i], and  
> — reinterpret_cast<cv T*>(a)[2*i + 1] shall designate the imaginary part of a[i].

ということでFFTWの複素数型と同じメモリレイアウトであることが規定されていることが確認できる．

C++11以前にはこの仕様が規定されていなかったらしいのでISO/IEC C++03に対応するJIS X3014(タダで読める)を読んでると，確かに `std::complex` についてこの仕様が明記されていなかった(とはいえ実部，虚部の順に並んでいない実装があったらそれはそれで驚きだが)．
