module.exports = {
  title: "gewel",
  description: "Mencoba Vuepress",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "fb", link: "/fb/" },
      { text: "twitter", link: "/twitter/" },
      { text: "instagram", link: "/instagram/" },
      { text: "wa", link: "/wa/" }
    ]
	}
}
module.exports = {
	markdown: {
	// the markdown-it-anchor
		anchor: { permalink: false },
	// the markdown-it-toc extension
		toc: { includeLevel: [1, 2] },
	config: md => {
	// this is where you add more markdown-it extensions
		md.use(require('markdown-it-name-of-extension'))
		}
	}
}