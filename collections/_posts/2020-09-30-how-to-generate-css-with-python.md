---
layout: post
title: "How to Generate CSS with Python"
categories: [technology]
date: 2020-05-02
---

It's incredibly tedious to manually copy over CSS class names, ID names, and other selectors from your HTML to your CSS stylesheet. This is both time-consuming and subject to human error. So, I wrote a script to automatically generate all of that.

*Note: I almost exclusively use BEM-style classes, rather than IDs, so this script only covers classes. However, it could be easily tweaked to include IDs as well.*

## Part 1: Regular Expressions

First, we open a file, then use a regular expression to look inside that file for all instances of the string "`class=`".

```python
# using regex to search and grab
def regexTextSearch(file, pattern):
	import re

	with open(file, 'rt', encoding='utf8') as myfile:
		matches = re.findall(pattern, myfile.read())
		return matches

pattern = r'class=".*?"'
```

`pattern` is a regular expression that finds all instances of `class="class-name"`, with `class-name` being a placeholder for all the actual class names. The above function opens a specified file, reads it, and pulls out a list of all of the strings matching the regular expression.

(*Caution: this script doesn't take duplicates into account, so you may need to manually delete those eventually.*)

## Part 2: Isolating Class Names

Next, we clean up the strings:

```python
# take each 'class="<val>"' & return <val>
def stripClassStrings(matches):
	quoted_names = [m.replace('class=', '') for m in matches]
	class_names = [q.replace('"', '') for q in quoted_names]
	return class_names
```

The `matches` from the first function will return strings like `class="classname"`, but the only information we want out of that string is `classname`. The function `stripClassStrings()` strips these excess characters by replacing them with nothing. The result, `class_names`, is a list of every class name in your document. 

## Part 3: Format CSS Selectors

The final step is to format these class names into a CSS-friendly format, using string interpolation.

For a refresher, CSS class selectors look like this:

```css
.classname {
	/* styles here */
}
```

So we need to add a period before `classname`, curly brackets, and spaces and newlines. That's where this function comes in:

```python
# take class names -> CSS selectors
def classesToCSS(class_names):
	css = []
	for i, c in enumerate(class_names):
		selector = '''.{0} {{\n\n}}\n'''.format(c)
		css.append(selector)
	return css
```

Using string interpolation, this function returns a list of formatted CSS selectors made up of every class declaration in the HTML document we originally pulled from.

## Part 4: Printing

I used Sublime 3 for this project, so I was able to print out a newline-separated list by running `CTRL + B` using this for loop:

```python
# print!
for c in css:
	print(c)
```

In the build window, a result like this should show up:

```css
.menu-wrapper {

}

.menu-content-wrapper {

}

.menu__home-link {

}

.menu__hamburger-link {

}

.menu__page-list {

}

.menu-list__item {

}
```

All you have to do is copy-paste the results into a new CSS file, delete any duplicate selectors, and you're done!

I hope some of you find this script as helpful and time-saving as I do. Happy coding!