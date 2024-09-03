This is the repository for *Getty Research Journal, No. 19*. This issue of the journal was first published Month DD, YYYYY, by the Getty Research Institute. It is available online at https://www.getty.edu/publications/grj/19/ and may be downloaded there free of charge in multiple formats.

## About the Journal

TK

## Using this Repository

This is one in series of multiformat publications using [Quire](http://quire.getty.edu)™, Getty’s multiformat publishing tool. 

We are dedicated to maintaining this publication for years to come at the permanent URL, https://www.getty.edu/publications/grj/19/, and in its various formats and incarnations. For any updates to the journal, we will be following something between an app and traditional book publication model. Updates will only be made in regulated chunks as formal revisions and new editions and will always be thoroughly documented here in the repository, as well as in the revision history included with each of the journal’s many formats.

The primary content pieces of the journal can be found in the `content` directory. The `main` branch represents the current, published edition at all times, and the `revisions` branch, when present, will show changes currently under consideration. We invite you to submit suggestions or corrections via pull request on the revisions branch, by posting an issue, or by emailing us at [pubsinfo@getty.edu](mailto:pubsinfo@getty.edu).

## Development Notes

This project was last built with the following software versions:

- Node 18.16.0
- Quire CLI 1.0.0-rc.10

### Branches

| branch | about |
| --- | --- |
| `main` | The primary branch |
| `first-pages`, `second-pages`, `final-pages`| Versions of the project at various staages |
| `forthcoming` | A static placeholder page that was displayed at the book’s final URL on getty.edu prior to publication |
| `revisions` | Any revisions currently under consideration but not yet published |

### Figure Images Submodule

Many of figure images for *Getty Research Journal, No. 19* are licensed from third parties for use exclusively in this publication. As such, they are kept in a separate, private repository, https://github.com/thegetty/grj-19-images/, which is linked to this main publication repository as a submodule in `content/_assets/images/figures/`. When cloning this repo for further development, you’ll permissions for the private repository and will need to clone recursively in order to clone both the main repo and the submodule.

```
git clone --recursive https://github.com/thegetty/grj-19.git
```

### Previewing the Online Edition Locally

1. Install Node.js 18.16.0 and verify with with `node --version`

2. Install the Quire CLI with `npm install -g @thegetty/quire-cli@1.0.0-rc.10`

3. Clone this repository and select the appropriate branch

4. Run `npm install` to install the project dependencies (this just needs to be done once when first cloning the project, or whenever the core template/code files are updated)

5. Change the `url` in `content/_data/publication.yaml` to `http://localhost:8080/`

6. See the preview with `quire preview`

### Creating a PDF Version

1. Switch `url` in publication.yaml to `url: 'http://localhost:8080'`

2. Run `quire build`

3. If the PDF will be sent to digital printer, run the following command to ensure color profiles are correct:

    ```
    magick mogrify -profile bin/adobe-rgb-1998.icm _site/iiif/**/print-image.jpg
    ```

    ```
    magick mogrify -colorspace Gray -profile bin/gray-gamma-2-2.icm _site/iiif/fig-3-4/overton-04/print-image.jpg
    ```

    ```
    magick mogrify -colorspace Gray -profile bin/gray-gamma-2-2.icm _site/_assets/image*.jpg
    ```

4. With PrinceXML 14.2 installed, run `quire pdf --lib prince`

### Creating an EPUB Version

TK

### Customizations

**_includes/components/analytics.js**
**_layouts/base.11ty.js**
Added Google Analytics 4

**_includes/components/figure/image/element.js**
**_includes/components/figure/image/html.js**
**_includes/components/figure/image/image-tag.js**
**_includes/components/figure/caption.js**
Added `longdesc` support

**_includes/components/head.js**
**_includes/components/head-tags/dublin-core.js**
**_includes/components/head-tags/opengraph.js**
**_includes/components/head-tags/twitter-card.js**
Update and clean-up handling for social sharing

**_includes/components/copyright/licensing.js**
Updated the image exclusions language and moved print/pdf statement to new location

**_includes/components/icons.js**
Replaced default `fullscreen-icon` with a 600 weight version to match caption styles

**_includes/components/license-icons.js**
Removed SVG icons from EPUB output as they were causing validation issues

**_includes/components/menu/header.js**
Added series number and year to menu header for journal publication, uses added `series_issue_number` attribute in publication.yaml
Added download links to header area

**_includes/components/menu/item.js**
Display subtitles and contributors in sidebar menu; and don't link to section landing pages marked as `menu_link: false`

**_includes/components/menu/resources.js**
Add block for journal masthead info, and classes to others for css selecting

**_includes/components/menu/index.js**
Remove Chicago and MLA page citations from sidebar

**_includes/components/navigation.js**
Wrapped nav labels in missing span to enable hiding on mobile

**_includes/components/page-header.js**
**_layouts/essay.liquid**
Add section name (based on directory) above article title and add elements for PDF footers

**_includes/components/table-of-contents/item/list.js**
Removed markdownify processing from pageTitleElement as it was already being markdownified elsewhere, and this let to straight apostrophes being processed when we didn't want them to be. And don't link to section landing pages marked as `toc_link: false`.

**_includes/page-tools.liquid**
**_layouts/essay.liquid**
**_layouts/page.liquid**
Added page-tools include to display PDF download, DOI, abstract, and Cite

**_layouts/cover.liquid**
Add journal issue info and publisher, remove contributor

**_plugins/markdown/index.js**
Changed `allowedAttributes` on elements to allow any attribute

**_plugins/shortcodes/contributors.js**
Refactored logic to handle oxford commas correctly

**_plugins/shortcodes/figureGroup.js**
Added caption and class parameters that can be fed in from shortcode; and simplified HTML markup to remove rows

**content/_computed/eleventyComputed.js**
Changed pagination so next/prev pages can be overridden on individual pages; and added menu_link and toc_link properties, so items in menus and toc can appear without a link to the page

## License

This publication uses [Skolar PE](https://rosettatype.com/SkolarPE) and [Skolar Sans PE](https://rosettatype.com/SkolarSansPE), designed by David Březina and © Rosetta Type Foundry s.r.o. The Typekit service used to deliver these fonts is provided specifically for this project by Adobe and is subject to their [Terms of Use](http://www.adobe.com/products/eulas/tou_typekit). © 2009-2023 Adobe Systems Incorporated. All Rights Reserved.