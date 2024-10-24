export function createParagraph({content="",id=""}){
    let paragraph = document.createElement('p');

    paragraph.innerHTML = content;
    paragraph.id = id;

    return paragraph;
}