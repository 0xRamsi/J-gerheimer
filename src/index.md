---
title: Home
layout: base.njk
---
<section>
  <div class="w-100">
    <img
      src="/images/Vereinshaus.JPG"
      alt="Hero image"
      class="w-100 d-block"
      style="height: 70vh; object-fit: cover;"
    >
  </div>
  <div class="container py-4 text-center">
    <h1><span class="badge bg-primary mb-1">Willkommen</span></h1>
    <h1 class="display-4 fw-bold text-primary">
      {{ site.name }}
    </h1>
    <p class="lead text-muted mx-auto my-4" style="max-width: 700px;">
      {{ site.description }}
    </p>
  </div>
</section>

{% for post in collections.posts %}
  <article>
      <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
      {% if post.data.image %}
        <img src="{{ post.data.image }}" alt="{{ post.data.title }}" width="300" />
      {% endif %}
  </article>
{% endfor %}
