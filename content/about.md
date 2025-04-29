---
title: About This Issue
layout: page
classes:
  - masthead
order: 503
outputs:
  - html
---

Number {{ publication.series_issue_number }} • {{ publication.pub_date | date: "%Y" }} {style="color: var(--accent-color);"}

{{ publication.description.full }}

<div class="masthead_info remove-paragraph-indent">

{% for editor in publication.series_editors %}
- {{ editor | markdownify }}
{% endfor %}

**Getty Research Journal Editorial Advisory Committee**
{{ publication.series_advisory_committee | markdownify }}

</div>

{% backmatter %}

{% for person in publication.project_team %}
- {{ person | markdownify }}
{% endfor %}

<div class="other-formats">

## Other Formats

{% for link in publication.resource_link %}
{% if link.type == "other-format" %}
- [{{ link.name }}]({{ link.url }})
{% endif %}
{% endfor %}

[DOI:]{.small-caps--lowercase} {{ publication.identifier.doi }}

</div>
<div class="revision-history">

## Revision History

{{ publication.revision_statement | markdownify }}

{% for revision in publication.revision_history %}

### {{ revision.date }} {.small-caps}

{% for item in revision.summary %}
- {{ item | markdownify }}
{% endfor %}

{% endfor %}

</div>
<div class="scolars-info">

## Information for Scholars

The research articles in this issue were peer reviewed through a double-masked process in which the identities of the authors and reviewers remained anonymous. The essay “Bennett Buck’s *Good Neighbor Policy:* A Case of Mistaken Identity” by James Oles received single-anonymous review. “Belonging Elsewhere: Felipe Baeza and Laura G. Gutiérrez in Conversation” received editorial review.

To submit a manuscript, please visit
[grj.scholasticahq.com](https://grj.scholasticahq.com).
General inquiries may be sent to 
GRJ@getty.edu.

</div>
<div class="copyright">

## Copyright

{{ config.quire_credit_line | markdownify }}

{% copyright %}

</div>
<div class="publisher">

{% for press in publication.publisher %}
**Published by the {{ press.name }}, {{ press.location }}**
{{ press.address | markdownify }}
{% endfor %}

</div>
<div class="cover-image-credits">

**Cover**

**Felipe Baeza (Mexican, b. 1987, active in the US).** *to shape, shape self*, 2023, ink, acrylic, graphite, varnish, and cut paper on panel, 40.6 × 30.5 cm. © Felipe Baeza. Courtesy Maureen Paley, London; kurimanzutto, Mexico City / New York. Photograph by Brad Farwell.

</div>
<div class="identifiers">

## {{ publication.title }}

{% for link in publication.resource_link %}
{% if link.type == "masthead" %}
- [{{ link.name }}]({{ link.url }}) {.highlight-link}
{% endif %}
{% endfor %}

ISSN: {{ publication.identifier.issn }}
E-ISSN: {{ publication.identifier.e_issn }} {.small-caps--lowercase}

</div>

{% endbackmatter %}