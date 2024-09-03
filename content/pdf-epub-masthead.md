---
title: Masthead
layout: base.11ty.js
classes:
  - masthead
order: 3
outputs:
  - pdf
  - epub
toc: false
menu: false
---

{%- if publication.title -%}
<h1 class="masthead_title">{{ publication.title | markdownify }}</h1>
{%- endif -%}

<div class="masthead_info">

**Number {{ publication.series_issue_number }} • {{ publication.pub_date | date: "%Y" }}**

{% for editor in publication.series_editors %}
- {{ editor | markdownify }}
{% endfor %}

**Getty Research Journal Editorial Board** {.no-bottom-margin}

{{ publication.series_editorial_board | markdownify }}

{% for member in publication.project_team %}
- {{ member | markdownify }}
{% endfor %}

</div>