export default function (title: string, url: string, json: any[]) {
    let obj = json;
    obj.push({ title: title, url: url });

    return obj;
}
