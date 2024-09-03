---
title: Cover
layout: cover
order: 1
menu: false
toc: false
image: figures/horakova-poggi-02.jpg
classes:
  - masthead
outputs:
  - html
---

<div class="masthead_info remove-paragraph-indent">

{% for editor in publication.series_editors %}
- {{ editor | markdownify }}
{% endfor %}

**Getty Research Journal Editorial Board**
{{ publication.series_editorial_board | markdownify }}

</div>

{% backmatter %}

{% for person in publication.project_team %}
- {{ person | markdownify }}
{% endfor %}

---

{{ publication.description.full | markdownify }}

{% for link in publication.resource_link %}
{% if link.type == "masthead" %}
- [{{ link.name }}]({{ link.url }}) {.highlight-link}
{% endif %}
{% endfor %}

ISSN: {{ publication.identifier.issn }} 
E-ISSN: {{ publication.identifier.e_issn }} {.small-caps--lowercase}

{% endbackmatter %}