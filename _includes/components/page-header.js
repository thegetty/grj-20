//
// CUSTOMIZED FILE
// Add section name (based on directory) above article title
// Add elements for PDF footers, with last names for contributors
//
const { html } = require('~lib/common-tags')
const path = require('path')

/**
 * Publication page header
 *
 * @param      {Object}  eleventyConfig
 */
module.exports = function(eleventyConfig) {
  const contributors = eleventyConfig.getFilter('contributors')
  const markdownify = eleventyConfig.getFilter('markdownify')
  const pageTitle = eleventyConfig.getFilter('pageTitle')
  const slugify = eleventyConfig.getFilter('slugify')
  const titleCase = require('~plugins/filters/titleCase')

  const { labelDivider } = eleventyConfig.globalData.config.pageTitle
  const { imageDir } = eleventyConfig.globalData.config.figures
  const {
    pub_date: pubDate,
    series_issue_number: issueNumber,
    title: pubTitle
  } = eleventyConfig.globalData.publication

  return function (params) {
    const {
      byline_format: bylineFormat,
      contributor,
      filePathStem,
      image,
      label,
      pageContributors,
      short_title: shortTitle,
      subtitle,
      title
    } = params

    const classes = ['quire-page__header', 'hero']

    if (title == 'title page' || title == 'half title page') {
      classes.push('is-screen-only')
    }

    const pageLabel = label
      ? `<span class="label">${label}<span class="visually-hidden">${labelDivider}</span></span>`
      : ''

    const imageElement = image
      ? html`
          <section
            class="${classes} hero__image"
           style="background-image: url('${path.join(imageDir, image)}');"
          >
          </section>
        `
      : ''

    const contributorsElement = pageContributors
      ? html`
          <div class="quire-page__header__contributor">
            ${contributors({ context: pageContributors, format: bylineFormat })}
          </div>
        `
      : ''

    const paths = filePathStem ? filePathStem.match(/[^\/]+/g) : ''
    const section = paths.length - 2
    const sectionName = paths.length > 1 ? titleCase(paths[section].replaceAll('-', ' ')) : ''

    const sectionElement = sectionName ? `<span class="section-name" data-outputs-exclude="epub,pdf">${sectionName}</span>` : ''

    const lastNames = contributor && contributor.length == 1 ? `${contributor[0].last_name}`
      : contributor && contributor.length == 2 ? `${contributor[0].last_name} and ${contributor[1].last_name}`
      : ''

    return html`
      <section class="${classes}">
        <div class="hero-body">
          <h1 class="quire-page__header__title" id="${slugify(title)}">
            ${sectionElement}
            ${pageLabel}
            ${pageTitle({ title, subtitle })}
          </h1>
          ${contributorsElement}
          <span class="pdf-footers__title">${lastNames} / ${markdownify(shortTitle || title)}</span>
          <span class="pdf-footers__issue">${pubTitle}, No. ${issueNumber} (${pubDate.getFullYear()})</span>
        </div>
      </section>
      ${imageElement}
    `
  }
}
