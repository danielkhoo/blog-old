---
path: '/blog/add-snippets-to-vscode'
date: '2021-05-26T00:00:00.000Z'
title: 'Adding Code Snippets to VSCode'
description: 'We all love the customisability of VSCode and the wide array of extensions available. But often there’s still repetitive boilerplate code that we find ourselves typing fifty times a day. That’s where custom code snippets come in.'
tags: '#snippets'
---

We all love the customisability of VSCode and the wide array of extensions available. But often there’s still repetitive boilerplate code that we find ourselves typing fifty times a day. That’s where custom code snippets come in.
Take the simple example of a console log. The default snippet is pretty good, filling the line and moving your cursor to the right place.

<figure>
  <img src="./add-snippets-to-vscode/ss1.png">
  <figcaption>Default log snippet</figcaption>
</figure>

But I often add line breaks to make debugging easier in a mass of logs. What if I could simply include that in the autofill?

<figure>
  <img src="./add-snippets-to-vscode/ss2.png">
  <figcaption>Custom log with line breaks</figcaption>
</figure>

With user snippets you can set up something like this in seconds:

1. Open the quick action menu with Cmd + Shift + P
2. Search for “snippets”
3. Select Preferences: Configure User Snippets

<figure>
  <img src="./add-snippets-to-vscode/ss3.png">
  <figcaption>Quick action menu</figcaption>
</figure>

Next, select your language of choice

<figure>
  <img src="./add-snippets-to-vscode/ss4.png">
  <figcaption>Snippets can be language specific or global</figcaption>
</figure>

And you should see the custom snippet json with an example snippet commented out

<figure>
  <img src="./add-snippets-to-vscode/ss5.png">
  <figcaption>Example snippet file</figcaption>
</figure>

Here you can add your snippet following the example syntax for tab stops and cursor position. Here’s the example for my fat console log.

<script src="https://gist.github.com/danielkhoo/0d1a2682f7416d098ebc3420d5e212ca.js"></script>

Here’s another example for generating arrow functions.

<script src="https://gist.github.com/danielkhoo/ee1d56523f91b944b4276ece0dd9ef40.js"></script>

<figure>
  <img src="./add-snippets-to-vscode/ss6.png">
  <figcaption>Custom arrow function snippet</figcaption>
</figure>

And that’s it! There’s no limit to all the boiler plate you can snippet away. Don’t type faster, type smarter.
