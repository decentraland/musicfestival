import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { App } from "./App"
import { config } from "./config"
import { getAnalytics } from "./modules/analytics/segment"
import "./modules/analytics/snippet"

const analytics = getAnalytics()
analytics.load(config.get("SEGMENT_API_KEY"))
analytics.ready(() => {
  getAnalytics().page()
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
