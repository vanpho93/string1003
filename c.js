const data = require('./b');

class Tin {
    constructor(id, link, description, image, title) {
        this.id = id;
        this.link = link;
        this.image = image;
        this.title = title;
        this.description = description;
    }
}

function getBody(source, pre, post) {
    const startIndex = source.indexOf(pre) + pre.length;
    const endIndex = source.indexOf(post);
    return source.substring(startIndex, endIndex).trim();
}

function getTinFromItem(item) {
    const title = getBody(item, '<title>', '</title>');
    const link = getBody(item, '<link>', '</link>');
    const image = getBody(item, 'src="', '" ></a>');
    const description = getBody(item, '></a></br>', ']]>');
    const lenghtOfLink = link.length;
    const id = link.substr(lenghtOfLink - 12, 7);
    return new Tin(id, link, description, image, title);
}

const items = data.split('<item>');
items.shift();

// const arrTin = items.map(item => getTinFromItem(item));
const arrTin = items.map(getTinFromItem);
console.log(arrTin);
