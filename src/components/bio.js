/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

function joinGramatically(list, joiner, connectingWord) {
  const lastItem = list.pop()
  return `${list.join(joiner)}, ${connectingWord} ${lastItem}`
}

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          interests {
            intro
            items
          }
          secondaryInterests {
            intro
            items
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const interests = data.site.siteMetadata?.interests
  const secondaryInterests = data.site.siteMetadata?.secondaryInterests
  const listOfInterest = joinGramatically(interests.items, `, `, 'and')
  const listOfSecondaryInterests = joinGramatically(secondaryInterests.items, `, `, 'and')
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="bio">
      {author?.name && (
        <div>
          <p>{author?.summary || null}.</p>

          <p>{interests?.intro || null} <b>{listOfInterest || null}</b>.</p>
          <p>{secondaryInterests?.intro || null} <b>{listOfSecondaryInterests || null}</b>.</p>
          {` `}
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            You can follow me on Twitter
          </a>
          .
        </div>
      )}
    </div>
  )
}

export default Bio
