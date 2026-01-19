import { examplesData } from "../../mockData/examplesData.js";
import { examplesTemplate } from "../templates/examplesTemplate.js";

const initExamples = (examplesNode) => {
    examplesNode.insertAdjacentHTML("beforeend", examplesTemplate(examplesData));
};

export default initExamples;
