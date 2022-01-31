import React, { useEffect, useState } from "react"
import alanBtn from "@alan-ai/alan-sdk-web"
import { Typography } from "@material-ui/core"

//components
import NewsCards from "./components/NewsCards/NewsCards"
import useStyles from "./AppStyles"

const alanKey = "3ee4c7e8b857d6d8f57cc9d116c3c4952e956eca572e1d8b807a3e2338fdd0dc/stage"
function App() {
  const classes = useStyles()
  const [newsarticles, setNewsArticles] = useState([])
  const [activeArticle, setActiveArticle] = useState(-1)

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles)
          setActiveArticle(-1)
        } else if (command === "highlight") {
          setActiveArticle((prev) => prev + 1)
        }
      },
    })
  }, [])

  return (
    <div className={classes.container}>
      <div className={classes.logoContainer}>
        {newsarticles.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}>
              <Typography variant="h5" component="h2">
                Try saying: <br />
                <br />
                Open article number [4]
              </Typography>
            </div>
            <div className={classes.card}>
              <Typography variant="h5" component="h2">
                Try saying: <br />
                <br />
                Go back
              </Typography>
            </div>
          </div>
        ) : null}
        <img src="https://www.the-next-tech.com/wp-content/uploads/2019/11/AI-2.jpg" className={classes.alanLogo} alt="logo" />
      </div>
      <NewsCards articles={newsarticles} activeArticle={activeArticle} />
    </div>
  )
}

export default App
