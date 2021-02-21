---
path: '/blog/check-stocks-from-terminal'
date: '2021-02-21T00:00:00.000Z'
title: 'Check stocks from your terminal 🚀🚀🚀 '
description: 'I built an micro npm package to check stock prices from an command line'
tags: '#demo'
---

## The idea

I've always loved the idea of tiny modules (best explained by [Sindre](https://github.com/sindresorhus/ama/issues/10#issuecomment-117766328)). But it often feels like everything that is interesting has already been done.

I've been looking for new interesting tiny module ideas ever since releasing [NRIC](https://www.npmjs.com/package/nric). Rather than go out looking for problems to solve, I wanted to scatch my own itch.

![STONKS](./stonk1.png)

In this case, I found myself checking the prices of stocks whenever I had to wait for something (e.g. CI to build/deploy). Yahoo finance is an amazing free tool. But opening a tab / pull out my phone always resulted in me getting side tracked in messages / memes.

> ## _"Wouldn't it be cool see prices in the terminal?"_

It would need to be ashort, memorable 1 line command that could be invoked anytime. The idea was simple, an npx-able module to fetch prices.

## Demo

The command is simple

```bash
npx stonk gbtc
```

![npx stonk gbtc](./stonk2.png)

It even supports multiple tickers, so you can monitor your whole portfolio

![npx stonk gbtc](./stonk3.png)

## Wrap

See the code on [github](https://github.com/danielkhoo/stonk). All the module does is make a call to the Yahoo Finance API for your ticker symbol. It returns a bunch more stuff like trading volume, high, low and indicators. But for simplicity we display just a single price.

> ## _Diamond hands 💎 ✋ 💎 ✋ from our terminals 🚀🚀🚀_
