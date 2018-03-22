const data = require('./b');

class Tin {
    constructor(id, link, description, image, title) {
        this.id = id;
        this.link = link;
        this.image = image;
        this.title = title;
    }
}

function getBody(source, pre, post) {
    const startIndex = source.indexOf(pre) + pre.length;
    const endIndex = source.indexOf(post);
    return source.substring(startIndex, endIndex).trim();
}

const arrTin = [];
