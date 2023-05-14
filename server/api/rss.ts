import Parser from 'rss-parser';

const parser = new Parser();

let articles: object[] = [];

const getFeed = async (url: string) => {
    const feed = await parser.parseURL(url);

    feed.items.forEach((item) => {
        articles.push({ title: item.title!, content: item.content });
    });
};

export default defineEventHandler(async (event) => {
    const query = getQuery(event);

    await getFeed(query.param1!.toString());
    return articles;
});
