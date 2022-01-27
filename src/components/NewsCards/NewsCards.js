import React, { useEffect } from "react"
import { Grid, Grow, styled, Typography } from "@material-ui/core"

import NewsCard from "../NewsCard/NewsCard"
import useStyles from "./styles.js"

function NewsCards({ articles }) {
  const classes = useStyles()

  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
              <NewsCard i={i} article={article} />
            </Grid>
          )
        })}
      </Grid>
    </Grow>
  )
}

export default NewsCards
