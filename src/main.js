import { createParagraph, createHeader } from "./webscript/strings.js";

var example1 = createParagraph({content: "Hello World", id: "example"});
var example2 = createHeader(2, {content: "Hello World in H2 tag", id: "example"});

document.body.append(example1);
document.body.append(example2);