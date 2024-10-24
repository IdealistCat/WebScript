export function createString(type="p", {content="",id=""}){
    let paragraph = document.createElement('p');

    paragraph.innerHTML = content;
    paragraph.id = id;

    return paragraph;
}

export function createParagraph({content="",id=""}) { return createString({content, id}); }