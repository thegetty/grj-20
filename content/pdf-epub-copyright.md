---
title: Copyright
layout: base.11ty.js
order: 5
classes:
  - copyright
outputs:
  - epub
  - pdf
toc: false
menu: false
---

**Getty Research Journal** {.no-bottom-margin}

{{ publication.description.full }}

**Information for Scholars** {.no-bottom-margin}

The research articles in this issue were peer reviewed through a double-masked process in which the identities of the authors and reviewers remained anonymous. The essay “Bennett Buck’s *Good Neighbor Policy:* A Case of Mistaken Identity” by James Oles received single-anonymous review. “Belonging Elsewhere: Felipe Baeza and Laura G. Gutiérrez in Conversation” received editorial review.

To submit a manuscript, please visit
[grj.scholasticahq.com](https://grj.scholasticahq.com).
General inquiries may be sent to 
GRJ@getty.edu.

{% for press in publication.publisher %}
**Published by the {{ press.name }}, {{ press.location }}** {.no-bottom-margin}
{{ press.address | markdownify }}
{% endfor %}

{% copyright %}

**Cover**
**Felipe Baeza (Mexican, b. 1987, active in the US).** *to shape, shape self*, 2023, ink, acrylic, graphite, varnish, and cut paper on panel, 40.6 × 30.5 cm. © Felipe Baeza. Courtesy Maureen Paley, London; kurimanzutto, Mexico City / New York. Photograph by Brad Farwell.

ISSN {{ publication.identifier.issn }}
E-ISSN {{ publication.identifier.e_issn }} {.small-caps}

ISBN ONLINE {{ publication.identifier.isbn_html }}
ISBN PDF {{ publication.identifier.isbn_pdf }}
ISBN EPUB {{ publication.identifier.isbn_epub }}
ISBN PAPERBACK {{ publication.identifier.isbn_paperback }} {.small-caps}
