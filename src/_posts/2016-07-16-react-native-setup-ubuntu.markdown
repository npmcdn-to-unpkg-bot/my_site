---
layout: post
title: "React Native Setup (Ubuntu 16.04)"
date: 2016-07-16
---

# The React-Native Setup (Ubuntu 16.04)

Well, last weekend I decided that I was going to mess around a bit with React Native. (In [a previous post]({% post_url 2016-05-07-so-whats-the-plan %}), I said I wasn't going to dip into any JS frameworks until I was more comfortable with JS itself. After having heard several people say that learning React will make you a better JS developer, I thought, 'Hey. Two birds? One stone? Why not?') Starting a new task means setting up for a new task. And my goodness, was this a pain in the what's-it to set up. Not sure if I was just doing things wrong or if it's genuinely difficult to get things up and running in my environment. In this post, I'm going to talk about what all I had to do to get going. Hopefully, it'll be useful for someone else -- even if it's just for _future-me_.

## Just the Facts

If you just want a quick list of the sites on which I found all the information I'm going to be discussing, here you go:

- [Facebook's 'Getting Started' Page](https://facebook.github.io/react-native/docs/getting-started.html) - I went here first.
- That site sends you to [The Android Developer Site](https://developer.android.com/studio/install.html) to install Android Studio. From there, you're sent:
- To the actual link to download [Android Studio](https://developer.android.com/studio/index.html) to...well, to download Android Studio.
- JDK 1.8 or higher. Use WebUpd8 PPA: [Install Oracle Java 8 in Ubuntu or Linux Mint via PPA Repository [JDK8]](http://webupd8.org/2012/install-oracle-java-8-in-ubuntu-via-ppa.html)
- Recommended (by Fb 'Getting Started') install: [Watchman](https://facebook.github.io/watchman/)
- Recommended (by Fb 'Getting Started') install: [The Gradle Daemon](https://docs.gradle.org/2.9/userguide/gradle_daemon.html)
- This discussion at AskUbuntu.com: [Unable to locate package lib32bz2-1.0](https://askubuntu.com/questions/637113/unable-to-locate-package-lib32bz2-1-0)

## The Headache

**NB**: If you're going to follow along here, read the post completely **first**, as there are a few commands I discuss in the course of talking about the Headache which you should not actually bother running.

So, first thing's first. Head on over to Facebook's Getting Started page (linked above). As long as you've got Node (4 or higher) installed, you're good. There's an installer on the [Node Website](https://nodejs.org). Or, if you want to use `nvm`, go to [creationix's Github page](https://github.com/creationix/nvm), and follow the instructions to install `nvm`. Then, in your console, `nvm list-remote` to see available versions. Then `nvm install XXX`, where `XXX` is the version number you want to install. The version of `npm` that will be installed with `node` will likely not be up-to-date. So, you'll want to do `npm install -g npm@latest`.

NB:
- `npm i...` is the same as `npm install`.
- `npm i -S` is the same as `npm install --save`
- `npm i -D` is the same as `npm install --save-dev`

Install the React Native CLI (Command-Line Interface) by running `npm i -g react-native-cli`.

Next, you want to head on over to grab [Android Studio](https://developer.android.com/studio/index.html). The install instructions here are fairly straightforward. But this is where I got tripped up, I think. Before mucking about with Android Studio, make sure `javac -version` in your terminal returns >1.8 (a version number greater than 1.8). There's a video that demonstrates the install process on the Android Studio site. Unzip Android Studio - I put it straight into my `Downloads` folder. So there's an `android-studio` folder inside my `Downloads` folder. In your console, `sudo mv android-studio /usr/local`.

Next, in your terminal, `export PATH=$PATH:{{the path to android-studio/bin}}` -- for me it was `export PATH=$PATH:/home/my_user/android-studio/bin`. This makes it so that you can start Android Studio by typing `studio.sh` in your terminal (rather than having to type the whole path). The install wizard will guide you through the setup. You may need to install additional versions of the SDK depending on your development needs. I also had to install additional versions of the Build Tools. These options are available by opening Android Studio, going to Configure > SDK Manager > Launch Standalone SDK Manager. From here, the available packages are clearly displayed.

At this point, the instructions on the Android Studio website have a note.

![ screencap from android studio website](/src/assets/img/android-studio-note.png)

It says "If you are running a 64-bit version of Ubuntu, you need to install some 32-bit libraries with the following command:..." After which it gives a command:
`sudo apt-get install lib32z1 lib32ncurses5 lib32bz2-1.0 lib32stdc++6`. I run this command and more than one of these packages is not located in my repository. Thankfully, there's a discussion over at [AskUbuntu](https://askubuntu.com/questions/637113/unable-to-locate-package-lib32bz2-1-0) in which Bilal says a bunch of stuff, then
> sudo dpkg --add-architecture i386

> sudo apt-get update

> sudo apt-get install lib32z1 lib32ncurses5 lib32bz2-1.0 libstdc++6:i386...

>...

The key for me was that the package `lib32bz2-1.0` is in fact no longer called `lib32bz2-1.0`, but rather `libbz2-1.0:i386`. So! `sudo apt install libbz2-1.0:i386`.

After this, download [Watchman](https://facebook.github.io/watchman/) and configure [The Gradle Daemon](https://docs.gradle.org/2.9/userguide/gradle_daemon.html) by entering in your terminal:
`touch ~/.gradle/gradle.properties && echo "org.gradle.daemon=true" >> ~/.gradle/gradle.properties`

Now, the magic can begin. Nagivate to your project folder, in your terminal:
`react-native init SuperCoolProject` which will create a new folder called SuperCoolProject.

Then `cd` into that SuperCoolProject. Then, `react-native run-android`. Here, I got loads of errors.

The various things I tried and/or had to do to get going properly were the following:

1) Run `react-native start` if the packager doesn't start automatically when you run `react-native run-android`.

2) Add a file called `local.properties` to the `android` folder inside your project folder. Its contents should be a key, `sdk.dir` whose value is the path to your SDK (probably something like /home/user/Android/Sdk). So, `sdk.dir=/home/user/Android/Sdk`.

3) I also added `/home/user/Android/Sdk`, `/home/user/Android/Sdk/tools`, and `/home/user/Android/Sdk/platform-tools` to my `__PATH__`. I suspect the latter two might have been redundant, but I'm not certain. I added them all. One day I'll remove them one by one and see! Or, you know, you could just tell me.

4) __This was really important:__ Run `adb reverse tcp:8081 tcp:8081` in your terminal before running `react-native run-android`.

Finally, I connected my phone. Ran `react-native run-android` and _voila!_. There's __Welcome to React Native__ on my phone's screen. I edited `index.android.js`, shook the phone to bring up the menu, hit Reload, and Bob's your uncle. The menu also offers Live- and Hot-Reloading so that you don't have to manually reload each time you make a change.  

## That's all

Well, I don't know if this will prove useful for anyone. But if nothing else, I can come back to it again later when I inevitably have to do it all over again.

## Update

Since originally writing this post (though, I didn't post the post, so you wouldn't know anything about that), I installed the development build of android studio. You can change which build you're using in the Android Studio options/configuration. Running the dev version of Android Studio, I added a couple of emulators so that my project could be tested more extensively than just on my physical device. Once the emulators are setup -- give them simple names (e.g. Nexus6P) -- you can start them from a terminal with the command `emulator @Nexus6P`. You can see a list of what emulators you have installed with `emulator -list-avds`. Once the emulator is running, in another terminal `react-native start`, and in yet another terminal, `react-native run android`. And _now_ Bob's your uncle.

Please feel free to [contact me via twitter][938b8b68] if you'd like to discuss anything I talk about in this post. Please feel free especially if I've gotten something wrong or done something in an inefficient way.

  [938b8b68]: https://twitter.com/intent/tweet?screen_name=corderophi678 "Reach out via Twitter"
