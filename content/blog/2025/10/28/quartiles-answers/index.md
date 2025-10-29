---
layout: post
title: Quartiles answers project
date: 2025-10-28
description: >-
  Automating solutions to one of my favorite word puzzles
categories: projects
---

Quartiles is a word-forming game that's available on Apple News. You're given a 4x5 grid of tiles containing several letters. There are five words that can be created combining four tiles together, known as a quartile.

And every day I've played this, I've thought to myself, "This could easily be solved programatically."

And it's true, this was easily solved programatically. In fact, it's not particularly challenging. Create every permutation of 4 tiles and check it against a dictionary.

And as all great projects go, I thought: "Typing in all the tiles is cumbersome, we could do better." And that, that's how you get sucked into a project that grows beyond its original aim.

This is where the interesting parts of this project began. I used the `sharp` library to do some post-processing on the screenshot and split each tile into its own image. Then I used `tesseract.js` to do optical character recogntion (OCR) on each individual tile.

An interesting takeaway from this is that OCR has drastic performance differences on light vs. dark mode. My macOS settings automatically switch between light/dark mode at day/night respectively. Sometimes when working in the evening it would just start giving bad results. And it took some time to realize that the difference was light or dark mode. I suspect that this is because most of the training data is in "light mode" if it's printed text.

And this worked well for some time. Until I thought: "You know, opening the app, clicking through, taking the screenshot and then running my CLI is cumbersome. I could do better." And so, the project continued some more.

So I set out to automate the navigation and screenshot portion of the project. Surprisingly, my biggest challenge here was finding an open-source JavaScript library for driving this automation. My research wasn't turning up a clear favorite that was well-supported, maintained, and free. Eventually I settled on RobotJS. I haven't fully explored all the capabilities but it's been perfect for this use case.

Next step: scheduling this in a cron job to run each day.

I post my solutions online. You can see [today's quartiles answer](https://dailyquartiles.com) or an [archive of quartiles solutions](https://dailyquartiles.com/answers).
