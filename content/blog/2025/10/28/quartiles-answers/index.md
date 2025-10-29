---
layout: post
title: 'Daily Quartiles Answers: Building an Automated Puzzle Solver'
date: 2025-10-28
description: >-
  How I built dailyquartiles.com - an automated solution finder for today's Quartiles puzzle using OCR, image processing, and scheduled automation. Find quartiles answers today and explore the technical journey.
categories: projects
---

Looking for today's quartiles answers? I built [dailyquartiles.com](https://dailyquartiles.com) to automatically solve and publish the daily Quartiles puzzle. But more than just providing quartiles answers today, this project became a fascinating exploration in automation, image processing, and full-stack development.

## What is Quartiles?

Quartiles is a popular word-forming game available on Apple News. Each day, players receive a 4x5 grid of tiles containing letter combinations. The challenge is to identify five words that can be created by combining exactly four tiles together—each solution is called a "quartile."

As someone who played this puzzle daily, I couldn't help but think: "This could easily be solved programmatically."

## The Technical Challenge

### Phase 1: Core Algorithm

The initial solution was straightforward from an algorithmic perspective: generate every permutation of 4 tiles from the 20 available, then validate each combination against a comprehensive dictionary. This brute-force approach works perfectly for the puzzle's constraints—with 20 tiles, we're looking at a manageable search space.

It was true—this was easily solved programmatically. In fact, it wasn't particularly challenging at all.

### Phase 2: Image Processing & OCR

And this is where we encounter the universal marker of all projects destined to balloon far beyond their original scope: "You know what would be cool?"

I'd solved the puzzle. Mission accomplished. But typing in 20 tiles every single day? That was getting tedious. I thought to myself, "We could do better." And just like that, the project escalated.

I implemented an image processing pipeline using:

- **Sharp** for screenshot post-processing and tile extraction
- **Tesseract.js** for optical character recognition (OCR) on individual tiles

The pipeline segments each tile into its own image, then runs OCR to identify the letters automatically. This reduced the manual effort from minutes to seconds.

### Key Technical Learning: OCR Performance Variability

Here's where things got weird. One fascinating discovery: OCR performance showed dramatic differences between light and dark mode.

My macOS automatically switches themes at sunrise/sunset. Some evenings I'd run the script and suddenly it would just... fail. Tiles misidentified. Nonsense letters everywhere. I spent an embarrassing amount of time debugging before I realized the pattern: it was happening when I worked late.

The culprit? Dark mode screenshots produced significantly worse OCR results. This makes sense in hindsight—most OCR training data consists of dark text on light backgrounds (think: every printed book ever made). Dark mode inverts this, and apparently Tesseract gets confused.

**Solution:** Normalized images to a consistent light background before OCR processing, ensuring reliable accuracy regardless of system theme.

### Phase 3: Full Automation

The project worked great for a few weeks. I'd take a screenshot, run my script, get the answers. Easy.

But then, inevitably, the thought crept in: "We could do better."

Opening the app. Navigating to the puzzle. Taking the screenshot. Running the CLI. It was all so... manual. And so I went, further down the rabbit hole.

The goal: full automation of the entire workflow. The challenge: doing it on macOS without resorting to paid tools or AppleScript.

**Challenges:**

- Finding a suitable open-source automation library for macOS GUI interaction
- Researching options for well-maintained, free JavaScript automation tools
- Implementing reliable screenshot capture

**Solution:** After more research than I'd care to admit, I landed on RobotJS. It's not perfect, but it handles GUI automation surprisingly well—programmatic navigation to the Quartiles game, screenshot capture, and triggering the solver pipeline. All in JavaScript, which kept the tech stack consistent.

### Phase 4: Scheduled Publishing

At this point, the logical conclusion was clear: why run it manually at all?

I configured a cron job to:

- Launch the automation script daily
- Process the puzzle
- Update the website with fresh quartiles answers
- Maintain an archive of previous solutions

Now it just... runs. Every morning. Without me.

## The Result

[dailyquartiles.com](https://dailyquartiles.com) now provides today's quartiles answers automatically, with zero manual intervention. The site features:

- **[Today's quartiles answer](https://dailyquartiles.com)** updated daily
- **[Archive of all quartiles solutions](https://dailyquartiles.com/answers)** for reference
- Fast, reliable solving using optimized algorithms

## What I Learned

This project perfectly captures how side projects evolve. You start with a simple idea—"I can solve this puzzle programmatically"—and before you know it, you're deep into image processing, debugging OCR accuracy by time of day, and researching obscure GUI automation libraries.

Each phase revealed new challenges that made the project more interesting:

- Algorithm design and optimization
- Real-world OCR challenges and solutions
- GUI automation with open-source tools
- Building reliable, scheduled automation

If you're stuck on today's quartiles answers or just want to see how the puzzle can be solved programmatically, check out [dailyquartiles.com](https://dailyquartiles.com). And if you're curious about the technical implementation (or want to commiserate about scope creep), feel free to reach out!
