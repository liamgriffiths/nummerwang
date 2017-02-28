import Document, { Head, Main, NextScript } from 'next/document'
import styleSheet from 'styled-components/lib/models/StyleSheet'

const baseCSS = `
html, body {
  margin: 0;
  padding: 0;
  font-size: 13px;
  height: 100%;
}

body div { height: 100%; }
`

export default class Page extends Document {
  static async getInitialProps ({ renderPage }) {
    const page = renderPage()
    const styles = styleSheet.rules().map(rule => rule.cssText).join('\n')
    return { ...page, styles }
  }

  render () {
    return (
      <html>
        <head>
          <title>Nummerwang</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="https://fonts.googleapis.com/css?family=UnifrakturCook:700" rel="stylesheet" />
          <style>{baseCSS}</style>
          <style dangerouslySetInnerHTML={{ __html: this.props.styles }} />
        </head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
