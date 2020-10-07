import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const useImageHook = () => {
  const data = useStaticQuery(graphql`
    {
      wpgraphql {
        mediaItems(where: { title: "banner" }) {
          nodes {
            sourceUrl
            imageFile {
              childImageSharp {
                fluid(maxWidth: 1692) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.wpgraphql.mediaItems.nodes.map(node => ({
    ...node.imageFile.childImageSharp,
  }))
}

export default useImageHook
