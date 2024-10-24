export function createString(type="p", {content="",id=""}){
    let paragraph = document.createElement('p');

    paragraph.innerHTML = content;
    paragraph.id = id;

    return paragraph;
}

export function createParagraph({content="",id=""}) { return createString('P', {content, id}); }

export function createHeader(headerNum=1, {content="",id=""}) {
    var headnum = headerNum;

    if (headnum > 6) headnum = 6;
    if (headnum < 1) headnum = 1;

    return createString(`h${headnum.toString()}`, {content, id});
}