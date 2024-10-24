import { createParagraph } from "./webscript/strings.js";

var example = createParagraph({content: "Hello World", id: "example"});
document.body.append(example);