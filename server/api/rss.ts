import Parser from 'rss-parser';
// import json from './feed.json';

const parser = new Parser();

let articles: Feed[] = [];

interface Feed {
    title: string;
    content: object[];
}

const getFeed = async (json: any) => {
    if (json === undefined) return;

    if (typeof json === 'string') {
        json = JSON.parse(json);
        const feed = await parser.parseURL(json.url);

        let obj: Feed = {
            title: json.title,
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

        return;
    }

    for (let a = 0; a < json.length; a++) {
        await parser
            .parseURL(JSON.parse(json[a]).url)
            .then((feed) => {
                let obj: Feed = {
                    title: JSON.parse(json[a]).title,
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
            })
            .catch((err) => console.log(err));
    }
};

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    articles = [];
    await getFeed(query.data);
    return articles;
});
