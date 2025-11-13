import express from "express"
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

const publicPath = path.join(path.resolve(__dirname, './public'))

app.use(express.static(publicPath, { index: false }))

app.get(`/isAlive|/isReady`, (req, res) => {
    res.send('OK')
})

app.use(/^(?!.*\/(internal|static)\/).*$/, (_, res) => res.sendFile(`${publicPath}/index.html`))

app.listen(3000, () => { console.log('Listening on port 3000') })