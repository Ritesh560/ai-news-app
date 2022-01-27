import React, { useEffect, useState } from "react"
import alanBtn from "@alan-ai/alan-sdk-web"

//components
import NewsCards from "./components/NewsCards/NewsCards"

const alanKey = "3ee4c7e8b857d6d8f57cc9d116c3c4952e956eca572e1d8b807a3e2338fdd0dc/stage"
function App() {
  const [newsarticles, setNewsArticles] = useState([])

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles)
        }
      },
    })
  }, [])

  return (
    <div>
      <h1>Hello dear</h1>
      <NewsCards articles={newsarticles} />
    </div>
  )
}

export default App
