---
layout: post
author: David Collini
authorsite: https://davidcollini.dev
permalink: /blog/tor-a-spy-proof-gift-from-the-navy
coverimage: /images/blog/history-of-tor/tor-preview.jpg
brief: Tor has been a tool that protects people across the world. It comes with a unique history as a tool used to hide Navy communications and has evolved into a non-profit focused on protecting the privacy of everyone.
---

## The Paradox of Tor
Tor is a tool marketed to protect a user’s privacy, but would you believe that it was created by one of the governments [most infamous for spying on citizens](https://en.wikipedia.org/wiki/PRISM)? Tor was created and funded in large part by the United States government, yet it remains one of the most private ways to route your traffic through the internet today.

Many people may be turned away by this seemingly paradoxical statement. Why would a government that has historically tracked its own citizens, as well as [citizens of other countries](https://en.wikipedia.org/wiki/Mass_surveillance_in_the_United_States) give the public such a powerful tool for avoiding government surveillance? 

The answer, of course, is not that the United States wants everyone to have privacy, but rather that the technology would simply not work as intended if they kept it to themselves. 

## Start of Onion Routing
Onion Routing, the technology that gave Tor its name (The Onion Router), was conceived in the mid-1990s by employees [Paul Syverson, Michael G. Reed, and David Goldschlag at the U.S. Naval Research Laboratory](https://en.wikipedia.org/wiki/Onion_routing). It works by encrypting the user's traffic and routing it through three volunteer-run servers, also known as nodes. The traffic is decrypted in layers (like an onion) every time it passes through a node, so each node can only see where the traffic came from and where it's going. This approach is powerful as it separates who connected to the network from what they're doing.

The network worked great for the Navy since it met the goal of building a method to secure their communications online, but it had another problem that couldn't be solved alone. While the network was great for sending encrypted messages, it was not great at hiding itself as anything other than a network for the United States military.

## Why a Military-Only Network Doesn't Work
Imagine you are a foreign adversary of the U.S. in the mid-1990s, and a Tor IP address connects to one of your servers. Since this network is only used by U.S. federal agents, you immediately become suspicious of the traffic. Instead of blocking the network outright, you choose to passively monitor the traffic and slowly learn what information your enemy finds important to collect.

Since the network is used for highly confidential tasks, such as communicating in the Middle East, surveilling websites and additional security during sting operations, even the smallest leak can have major consequences. 

This brings us to the reason why Tor had to be shared with the world. Since onion-routing separates the user from their online activity, the network has to be designed to ensure that correlating these two data points is exceedingly difficult. The most effective way to achieve this goal is by attracting a large, diverse group of users. For instance, if a website owner saw Tor on their network, they can track the pages they visited, but won't be able to deduce who connected or where they connected from. This design creates a privacy tool that becomes more resistant to tracking as it gains more users.

## The Start of Tor
We have now reached the start of Tor. In the early 2000s, MIT graduate Roger Dingledine began working with one of the original pioneers of Onion Routing, Paul Syverson on a project they called Tor. The project allowed the team at the Naval Research Lab to begin realizing the power of Onion Routing in a piece of software. 

The project slowly began moving away from the Naval Research Academy, and towards a more independent and community-focused organization structure. In October 2002, [the code was released as open-source](https://opencollective.com/thetorproject), allowing anyone to contribute to and audit the project. In 2003, there were around a dozen nodes run by volunteers supporting the network.

A pivotal point for the project was in 2004, when the Electronic Frontier Foundation (EFF) stepped in to fund Tor. Founded in 1990, the organization fights against [surveillance laws in court](https://www.eff.org/victories?issue=privacy), [defends free speech](https://www.eff.org/victories?issue=free-speech), and [educates the public on how to protect their privacy](https://www.eff.org/pages/surveillance-self-defense). With both project's goals aligned, the partnership accelerated Tor's development, and ultimately helped the project attain nonprofit status in 2006. 

## The Tor Project: An Independent Organization
With Tor being developed for the public, it makes sense that it should be funded by them. Without the pressure of any outside interests, such as shareholders or the Navy, the Tor Project can focus on creating a tool to serve the public good instead of any commercial purpose.

The Tor Project continues to fight for privacy and build products today. After securing nonprofit status, the organization rolled out a series of landmark releases: Tor Bridges (2007) opened the network to users in censored regions, the [Tor Browser Bundle](https://en.wikipedia.org/wiki/Tor_(network)#Tor_Browser) (2008) made anonymous browsing accessible to anyone with a computer, and [Tails](https://en.wikipedia.org/wiki/Tails_(operating_system)) (2009) delivered a portable operating system that leaves no trace after use. Each of these products showcases the nonprofit's enduring resilience and its unwavering commitment to its mission.

## Looking Ahead: The Future of Tor
As state‑run surveillance expands across the globe, authoritarian regimes are increasingly [outlawing the very tools](https://en.wikipedia.org/wiki/VPN_blocking#Government_use)—VPNs, Tor, and other anti‑surveillance technologies—that keep citizens safe from pervasive monitoring. While obfuscation protocols and Tor bridges allow citizens in those closed societies to access the open internet, the development of those technologies depends on the freedoms provided by democratic nations.

To preserve a future where privacy tools can be created, distributed, and used without fear, we must defend the right to privacy everywhere, not only for those living under oppressive regimes, but also for the open societies that act as a catalyst for many digital freedoms. Protecting these freedoms today keeps the world safe, and allows us to exercise our fundamental freedoms such as speak, browse, and gather freely. Safeguarding these freedoms today protects the world and lets us exercise our fundamental rights—to speak, browse, and gather without restriction.