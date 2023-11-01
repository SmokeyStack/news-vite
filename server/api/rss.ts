import Parser from 'rss-parser';
import json from './feed.json';

const parser = new Parser();

let articles: object[] = [];

const getFeed = async () => {
    for (let a = 0; a < json.length; a++) {
        const feed = await parser.parseURL(json[a].url);

        let obj = {
            title: json[a].title,
            content: []
        };

        feed.items.forEach((item) => {
            obj.content.push({
                title: item.title!,
                content: item.content,
                url: item.link
            });
        });
        articles.push(obj);
    }
};

export default defineEventHandler(async (event) => {
    articles = [];
    await getFeed();
    return articles;
});
