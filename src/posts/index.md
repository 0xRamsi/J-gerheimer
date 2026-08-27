---
title: Beiträge
layout: base.njk
eleventyExcludeFromCollections: ["posts"]
---
{% for post in collections.posts %}
  <article>
      <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
      {% if post.data.image %}
        <img src="{{ post.data.image }}" alt="{{ post.data.title }}" width="300" />
      {% endif %}
  </article>
{% endfor %}
