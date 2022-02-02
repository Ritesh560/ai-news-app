import React, { useEffect, useState } from "react"
import alanBtn from "@alan-ai/alan-sdk-web"
import { Typography } from "@material-ui/core"
import wordsToNumbers from "words-to-numbers"

//components
import NewsCards from "./components/NewsCards/NewsCards"
import useStyles from "./AppStyles"

//alanKey from .env file
const alanKey = process.env.REACT_APP_ALAN_KEY

function App() {
  const classes = useStyles()
  const [newsarticles, setNewsArticles] = useState([])
  const [activeArticle, setActiveArticle] = useState(-1)

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles)
          setActiveArticle(-1)
        } else if (command === "highlight") {
          setActiveArticle((prev) => prev + 1)
        } else if (command === "open") {
          const parsedNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : number
          const article = articles[parsedNumber - 1]

          if (parsedNumber > articles.length) {
            alert("Please try that again...")
          } else if (article) {
            window.open(article.url, "_blank")
          } else {
            alert("Please try that again...")
          }
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
