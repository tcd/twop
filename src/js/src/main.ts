import { twitterJsExample } from "./lib"

async function main() {
    await twitterJsExample()
}

(async () => {
    main()
        .then((res) => {
            // console.log(res)
            process.exit(0)
        })
        .catch((error) => {
            console.error(error)
            process.exit(1)
        })
})()
