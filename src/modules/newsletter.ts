import { config } from "../config"

export async function subscribeToNewsletter(email: string): Promise<void> {
  const url = config.get("BUILDER_SERVER_URL") as
    | string
    | "https://builder-api.decentraland.org"

  if (!url) {
    throw new Error("Missing BUILDER_SERVER_URL.")
  }

  const response = await fetch(url + "/v1/newsletter", {
    method: "post",
    body: JSON.stringify({ email, source: "musicfestival25" }),
    headers: { "content-type": "application/json" },
  })

  if (!response.ok) {
    throw new Error(
      `Could not subscribe to newsletter. Status: ${response.status}`
    )
  }
}
