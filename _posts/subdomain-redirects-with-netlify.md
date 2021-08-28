---
path: '/blog/vanity-subdomain-redirects-with-netlify'
date: '2021-08-27T00:00:00.000Z'
title: 'Vanity subdomain redirects with Netlify'
description: 'Such vanity subdomaining could be interesting for many use cases beyond just crypto addresses. The point of subdomains is to be short and easy to remember, especially in world of mobile browsing being about to setup a simple redirect from `*.mydomain.com` to any other url makes a lot of sense. Effectively it would be a personalised link-shortener'
tags: '#tutorial'
---

I've recently been fascinated and learning about the Web3 space. Particularly a project called [Ethereum Name Service](https://ens.domains/) has a highly intuitive approach to resolving domains and subdomains to separate wallet addresses. For example, `mydomain.eth` might point to one address while `anotherwallet.mydomain.eth` could point to another. They recently added full DNS integration beyond just `*.eth` domains meaning that `wallet.mydomain.com` can resolve to an address.

That's insanely cool but it got me thinking that such vanity subdomaining could be interesting for many use cases beyond just crypto. The point of subdomains is to be short and easy to remember, especially in world of mobile browsing. Being able to setup a simple redirect from `*.mydomain.com` to any other url makes a lot of sense, ffectively it would be a personalised link-shortener

<figure>
  <img src="./subdomain-redirects-with-netlify/ss1.png">
  <figcaption>Personalised link-shortener</figcaption>
</figure>

## But how?

The big stumbling block when it comes to domain redirects is that DNS `CNAME` records do not support full urls only domains. So at the DNS level `dev.mydomain.com` can only point to `github.com` not a specific profile like `github.com/myusername`. Of course the majority of the stuff that is worth link-shortening is a long url.

Fortunately as this blog is hosted on Netlify, there is a convenient solution using [Netlify Redirects](https://docs.netlify.com/routing/redirects/). The main idea is to create subdomains that all point to Netlify and then setup Netlify Redirects to handle 301 redirects.

<figure>
  <img src="./subdomain-redirects-with-netlify/ss2.png">
  <figcaption>Netlify Magic</figcaption>
</figure>

## Step by Step

This guide assumes that you have a site is already setup with Netlify and a custom domain. The docs on how to do so can be found [here](https://docs.netlify.com/domains-https/custom-domains/). As an example use case, I want to setup a vanity redirect that points `dev.danieljkhoo.com` to my Github profile at `github.com/danielkhoo`.
<br>

### 1. Create Subdomain with your registrar

You will first need to create the new subdomain with your registrar, this could be Netlify or any other provider. Add a new CNAME record with the subdomain and point it to netlify. For example for this site it would be

`dev.danieljkhoo.com CNAME danieljkhoo.netlify.app`

### 2. Setup domain alias on Netlify

Next in the Netlify control panel under Settings -> Domain Management, add a new domain alias for the subdomain.

<figure>
  <img src="./subdomain-redirects-with-netlify/ss3.png">
  <figcaption>Adding domain alias</figcaption>
</figure>

After a minute or so the new subdomain should be accessible and point to the same place as your main site.

### 3. Setup redirection via netlify.toml

If your site is hosted on Netlify, you probably already have a `netlify.toml` file, if not create one in your root directory with the following Redirect rule which will a 301 redirect from the `from` url to the `to` url.

```
[[redirects]]
  from = "https://dev.danieljkhoo.com"
  to = "https://github.com/danielkhoo"
  status = 301
  force = true
```

<br>

### That's it!

And just like that you have a vanity link-shortener using subdomains, no need for any lambda functions or Heroku instances.
