import React, { useEffect } from "react"
import alanBtn from "@alan-ai/alan-sdk-web"

const alanKey = "3ee4c7e8b857d6d8f57cc9d116c3c4952e956eca572e1d8b807a3e2338fdd0dc/stage"
function App() {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          alert("Hi")
        }
      },
    })
  }, [])

  return (
    <div>
      <h1>Hello dear</h1>
    </div>
  )
}

export default App
