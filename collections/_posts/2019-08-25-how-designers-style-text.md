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

Great! Now, let's style some lists. Some more Jonathan Swift to accompany us in our task:

- "As to my own part, having turned my thoughts for many years upon this important subject, and maturely weighed the several schemes of other projectors, I have always found them grossly mistaken in the computation."
- "It is true, a child just dropped from its dam may be supported by her milk for a solar year, with little other nourishment; at most not above the value of 2s., which the mother may certainly get, or the value in scraps, by her lawful occupation of begging; and it is exactly at one year old that I propose to provide for them in such a manner as instead of being a charge upon their parents or the parish, or wanting food and raiment for the rest of their lives, they shall on the contrary contribute to the feeding, and partly to the clothing, of many thousands."
- "There only remains one hundred and twenty thousand children of poor parents annually born. The question therefore is, how this number shall be reared and provided for, which, as I have already said, under the present situation of affairs, is utterly impossible by all the methods hitherto proposed."
	- "For we can neither employ them in handicraft or agriculture; we neither build houses (I mean in the country) nor cultivate land: they can very seldom pick up a livelihood by stealing, till they arrive at six years old"

From my behind-the-scenes perspective, which you, dear reader, cannot see, I need to make the font size match that of the remainder of the text, as well as adjust the color and placement of the little circles demarcating each individual list item. I also need to ensure that the indent used in the list items is equivalent to the indent used for block quotes, for visual consistency. All of this, thankfully, is now finished, from your perspective, in the blink of an eye (or, in fact, before you even started reading this page!).

Now, numbered lists. Swift himself helpfully includes a numbered list in his document, so we will be using excerpts from that section. As follows:

> I have too long digressed, and therefore shall return to my subject. I think the advantages by the proposal which I have made are obvious and many, as well as of the highest importance.

With styling, we want the numbering to match our page title font, and match the purple accent color used throughout the website. By default, it matches the font, color, and font weight used in the list itself, so we need to go in and change this. (To see how it's done, feel free to dig around in the CSS! Just right-click the document and hit "Inspect".)

1. "For first, as I have already observed, it would greatly lessen the number of papists, with whom we are yearly overrun, being the principal breeders of the nation as well as our most dangerous enemies; and who stay at home on purpose with a design to deliver the kingdom to the Pretender, hoping to take their advantage by the absence of so many good protestants, who have chosen rather to leave their country than stay at home and pay tithes against their conscience to an episcopal curate."
2. "Secondly, The poorer tenants will have something valuable of their own, which by law may be made liable to distress and help to pay their landlord's rent, their corn and cattle being already seized, and money a thing unknown."
3. "Thirdly, Whereas the maintenance of an hundred thousand children, from two years old and upward, cannot be computed at less than ten shillings a-piece per annum, the nation's stock will be thereby increased fifty thousand pounds per annum, beside the profit of a new dish introduced to the tables of all gentlemen of fortune in the kingdom who have any refinement in taste. And the money will circulate among ourselves, the goods being entirely of our own growth and manufacture."
4. Plus, some shorter list items...
5. Just to spice things up
	1. Nested
	2. List
	3. Items

Alas, that is all that is getting done on today's quest through the land of styling. In our next installment, we still have to add:

- Page breaks
- Headers of all sizes
- Images
- An explanation of link styling

The end, for Part I!