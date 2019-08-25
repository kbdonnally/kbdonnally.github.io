---
layout: post
title: Styling text, from start to finish
categories: [meta, design]
date: 2019-08-25
---

In building a new website, none of the text is styled for you. You get two choices, if you're not adding your own stylesheets: would you like Times New Roman with no margins, or bold-and-slightly-larger Times New Roman with no margins?

Clearly, this won't do.

This blog post is meant to act as both a guide for myself as I write the style rules in this website's CSS documents, as well as a guide for the audience as to how the sausage gets made in making sure every type of text formatting one might need to use gets addressed.

To do this, we'll need significant portions of "dummy text" to imitate what it would look like if we were actually, say, writing pieces of text containing block quotes or numbered lists. We could use the old fashioned [Lorem Ipsum](https://www.lipsum.com/) option... or, we could grab text from something a little more fun. For this function, I'll be using excerpts from Jonathan Swift's ["A Modest Proposal"](https://art-bin.com/art/omodest.html), a satirical (satirical!) piece from 1729 suggesting a more useful function for poor Irish infants and children, such that they won't be a burden on the Commonwealth (of England)&mdash;eating them.

The first type of text formatting we anticipate running into is the use of block quotes. Let's grab a couple of Jonathan Swift paragraphs to see how it looks:

> It is a melancholy object to those who walk through this great town or travel in the country, when they see the streets, the roads, and cabin doors, crowded with beggars of the female sex, followed by three, four, or six children, all in rags and importuning every passenger for an alms. These mothers, instead of being able to work for their honest livelihood, are forced to employ all their time in strolling to beg sustenance for their helpless infants: who as they grow up either turn thieves for want of work, or leave their dear native country to fight for the Pretender in Spain, or sell themselves to the [Barbadoes](#1).
>
> I think it is agreed by all parties that this prodigious number of children in the arms, or on the backs, or at the heels of their mothers, and frequently of their fathers, is in the present deplorable state of the kingdom a very great additional grievance; and, therefore, whoever could find out a fair, cheap, and easy method of making these children sound, useful members of the commonwealth, would deserve so well of the public as to have his statue set up for a preserver of the nation.