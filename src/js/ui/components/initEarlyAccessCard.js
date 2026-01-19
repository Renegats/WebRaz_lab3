import { earlyAccessCardData } from "../../mockData/earlyAccessCardData.js";
import { earlyAccessCardTemplate } from "../templates/earlyAccessCardTemplate.js";

const initEarlyAccessCard = (earlyAccessCardNode) => {
    earlyAccessCardNode.insertAdjacentHTML("beforeend", earlyAccessCardTemplate(earlyAccessCardData));
};

export default initEarlyAccessCard;
