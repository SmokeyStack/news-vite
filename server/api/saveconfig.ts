import fs from 'fs';
import json from './feed.json';

export default defineEventHandler(async (event) => {
    const query = getQuery(event);

    console.log("You're in the test endpoint");

    let obj = json;
    obj.push({ title: query.name!.toString(), url: query.url!.toString() });
    let json2 = JSON.stringify(obj);
    fs.writeFileSync('./server/api/feed.json', json2);

    console.log("You're in the endagame");

    return { hello: 'world' };
});
