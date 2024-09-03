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

All manuscripts in this issue were peer reviewed through a double-masked process in which the identities of the authors and reviewers remained anonymous.

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
**Marion Wenzel (German, b. 1958).** Untitled (Winter landscape), 1980/81, gelatin silver print, 15 × 15 cm. From Wolfgang Henne et al., *Landschaft als Zeichen, messbar-vermessbar* (Leipzig: self-published, 1983), n.p. Los Angeles, Getty Research Institute, 93-B10567. © Marion Wenzel, VG Bild Kunst. Courtesy of the artist.

ISSN {{ publication.identifier.issn }}
E-ISSN {{ publication.identifier.e_issn }} {.small-caps}

ISBN ONLINE {{ publication.identifier.isbn_html }}
ISBN PDF {{ publication.identifier.isbn_pdf }}
ISBN EPUB {{ publication.identifier.isbn_epub }}
ISBN PAPERBACK {{ publication.identifier.isbn_paperback }} {.small-caps}
