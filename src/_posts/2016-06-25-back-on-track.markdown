---
layout: post
title: Back on Track
date: 2016-05-21
---

After an unexpectedly long absence, I've gotten things up and running again. That is, I've finally uploaded this website at which you're reading these words. The reasons for the delay are many, but none are particularly good. It's the same old story (for me, at least). When I was writing my dissertation, I spent several months planning out the entire thing, and several more months trying to get the first chapter started. I've always had a problem with (at least) two things: 1) showing unfinished work and 2) starting in the middle.

While I was perfectly capable of throwing up a nonsense website (as I did), I wasn't terribly comfortable doing so. It was just a page to host links to various pieces of work. It didn't tell you who I was (so it didn't start at the beginning :wink:) and it was, let's be honest, a load of rubbish. The thing is, though, that if I don't just throw my work out there and get eyes on it, I'll never make it any better than only I can make it.

Aside: That's actually one of the things that I find most exciting about open-source software: the collaborative nature of it. Not only do the size and scale of many projects make it untenable to work on them alone, but by working with other people you're bound just to get *better*. And the work will be better.

So that's sort of the point here, with a few caveats. In various ways, since the way I'm learning is mostly unstructured (at least for the time being), this site will be built in a similarly unstructured way. That is, I'll do a little bit here, a little bit there, maybe the two will be related, maybe not. I'll, hopefully, be keeping track of the things I'm doing -- both by posting projects and by blogging about them. In large part, I suspect I'll be prioritizing what needs work in my skillset. If you're a naturally right-footed soccer player, you ought to be spending more time working on your left foot than your right. Don't ignore your weaknesses. Focus on them (in the right way!).

So, for instance, this website is currently garbage to look at on a mobile device. Despite the fact that, after building the initial iteration of it, I took steps to make it look quite good on mobile devices, I've since broken a few things. As I mentioned in [my first post]({% post_url 2016-05-07-my-first-post %}), this site was originally made by following along with Travis Neilson's DevTips YouTube Channel. It was built using Jekyll, Jade (now Pug), Sass, and it used Gulp as a task runner. Since building the first iteration of the site, though, I found myself intrigued by Webpack and wanted to learn more about it. I decided I would rebuild the site using Webpack instead of Gulp. That initially proved more difficult than I expected.

One problem I had was that, since I was following along with a tutorial, I was doing just what the tutorial was doing (at least, in large part. I'm in *no way* suggesting that anything wrong with my website is anyone else's fault but my own). For that reason, I was using Gulp to compile my Sass without realizing that Jekyll could do that. So, when I started integrating Webpack into the project, I had a heck of a time getting things going. It was a reminder to RTFM. If the docs are there, read 'em.

After doing some digging around, I found this [tutorial](http://allizad.com/2016/05/02/using-webpack-with-jekyll/index.html) by Allison H. Zadrozny on integrating Jekyll, Webpack (which is all I was after), and React (which I was trying to avoid until I had a better handle on JavaScript itself). Allison's tutorial was so super clear, that I immediately started mucking around with it trying to integrate it with what I already had.

At this point, all I had to do was get Webpack to eat and spit out my `pug` files so that I could stick that `html` where it needed to be (I'm pretty sure this isn't the technical way of describing what's happening.). I spent a solid few days trying to do this. Ultimately, I was able to get all of my `pug` files into one `html` file (I couldn't figure out how to split them up into individual files). Once I had that, I was able to cut, paste, and edit that `html` to make it `JSX` so I could stick it in my React components.

It's not perfect. It's probably not even good. But that's OK.
