import { createParagraph } from "./webscript/elements.js";

var example = createParagraph({content: "Hello World", id: "example"});
document.body.append(example);