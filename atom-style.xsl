<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
  <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
    <head>
      <title>
        <xsl:value-of select="/atom:feed/atom:title"/> - fhfgh
      </title>
       <style>
        html {
          font-family: Roboto,Helvetica,Arial,sans-serif;
          line-height: 1.4;
        }
        html, h1 a {
          color: #000000;
        }
        @media (prefers-color-scheme: dark) {
          html {
            background-color: #121212;
          }
          html, h1 a {
            color: #FFFFFF;
          }
        }

        body {
          margin: 1.2em;
          font-size: 1rem;
        }

        header, footer, main {	
          max-width: 40rem;	
          margin: 4rem auto;	
        }

        h1{
          font-size: 2.5em;
        }

        ol {
          margin: 0;
          padding-inline-start: 6ch;
        }
        li {
          padding-block-end: 1rem;
        }
        li::marker {
          content: attr(updated) " - ";
          color: #838383;
        }

        a{
          color: #0064c1;
        }
        a:visited{
          color: #8d39d0;
        }
        a:hover, a:active{
          outline-width:0;
        }
        a:hover{
          color: #f00000;
        }
        @media (prefers-color-scheme: dark) {
          a{
            color: hsla(209, 100%, 85%, 1);
          }
          a:visited{
            color: hsla(273, 62%, 85%, 1);
          }
        }
      </style>
    </head>
    <body>
      <header>
        <h1>RSS feed of <a href="/"><xsl:value-of select="/atom:feed/atom:title"/></a></h1>
        <p><b>This is an RSS feed</b>. Subscribe by copying its URL into your feed reader.</p>
      </header>
      <main>
      <ol>
        <xsl:for-each select="/atom:feed/atom:entry">
        <li>
          <xsl:attribute name="updated">
            <xsl:value-of select="substring(atom:updated, 0, 5)"/>
          </xsl:attribute>
          <a>
            <xsl:attribute name="href">
              <xsl:value-of select="atom:link/@href"/>
            </xsl:attribute>
            <xsl:value-of select="atom:title"/>
          </a>
        </li>
        </xsl:for-each>
        </ol>
      </main>
    </body>
    </html>
  </xsl:template>
</xsl:stylesheet>