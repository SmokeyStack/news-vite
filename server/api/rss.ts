import Parser from 'rss-parser';
import json from './feed.json';

const parser = new Parser();

let articles: object[] = [];

export default defineEventHandler(async () => {
    json.forEach(async (item) => {
        const feed = await parser.parseURL(item.url);

        let obj = {
            title: item.title,
            content: {
                url: item.url
            }
        };

        console.log(obj);

        feed.items.forEach((item) => {
            articles.push({
                title: item.title!,
                content: item.content,
                url: item.link
            });
        });
    });

    console.log(articles);

    return articles;
});
