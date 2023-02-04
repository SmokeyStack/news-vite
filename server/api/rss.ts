import Parser from 'rss-parser'
import * as fs from 'fs'

export default defineEventHandler(async (event) => {
    let articles: string[] = [];

    let text = fs.readFileSync('test.txt')

    const parser = new Parser();

    parser.parseString(text.toString()).then(response => {
        response.items.forEach(item => {
            articles.push(item.title!)
        })
    })


    return articles

})