---
title: Blog
layout: default
permalink: /blog/
menu: false
---

# Blog

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url }})
{% endfor %}