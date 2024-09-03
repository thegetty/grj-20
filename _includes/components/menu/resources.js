//
// CUSTOMIZED FILE
// Add block for journal masthead info, and classes to others for css selecting
//
const { html } = require('~lib/common-tags')

/**
 * Renders the "Other Formats" and "Resources" sections of the menu
 *
 * @param      {Object}  eleventyConfig
 * @param      {Object}  params
 */
module.exports = function(eleventyConfig) {
  const markdownify = eleventyConfig.getFilter('markdownify')
  const 
    { description,
      identifier,
      resource_link: resourceLinks, 
      title } = eleventyConfig.globalData.publication

  return function() {
    if (!Array.isArray(resourceLinks)) return ''

    const linkList = eleventyConfig.getFilter('linkList')

    const mastheadLinks = resourceLinks.filter(({ type }) => type === 'masthead')
    const otherFormats = resourceLinks.filter(({ type }) => type === 'other-format')
    const relatedResources = resourceLinks.filter(({ type }) => type === 'related-resource')

    const mastheadElement = mastheadLinks.length
      ? html`
        <div class="quire-menu__formats quire-menu__formats--masthead-links">
          <h6>${title}</h6>
          <div>
            ${linkList({ links: mastheadLinks, classes: ['menu-list'] })}
            <p class="small-caps--lowercase">ISSN: ${identifier.issn}<br />
            E-ISSN: ${identifier.e_issn}</p>
          </div>
        </div>`
      : ''

    const resourceElement = relatedResources.length
      ? html`
        <div class="quire-menu__formats quire-menu__formats--related-resources">
          <h6>Resources</h6>
          <div role="complementary" aria-label="related resources">
            ${linkList({ links: relatedResources, classes: ['menu-list'] })}
          </div>
        </div>`
      : ''

    const otherFormatElement = otherFormats.length
      ? html`
        <div class="quire-menu__formats quire-menu__formats--other-formats">
          <h6>Other Formats</h6>
          <div role="complementary" aria-label="downloads">
            ${linkList({ links: otherFormats, classes: ['menu-list'] })}
          </div>
        </div>`
      : ''

    return html`
      ${mastheadElement}
      ${resourceElement}
      ${otherFormatElement}
    `
  }
}
