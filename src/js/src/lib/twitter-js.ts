import { Client } from "twitter.js"
import { bearerToken } from "."

export const twitterJsExample = async () => {
    const client = new Client()
    await client.loginWithBearerToken(bearerToken)

    const user = await client.users.fetchByUsername({ username: "iShiibi" })
    console.log(user.description) // Contributing to open-source 🌐
}
