import { endData } from "../../mockData/endData.js";
import { endTemplate } from "../templates/endTemplate.js";

const initEnd = (endNode) => {
  endNode.insertAdjacentHTML("beforeend", endTemplate(endData));
};

export default initEnd;
