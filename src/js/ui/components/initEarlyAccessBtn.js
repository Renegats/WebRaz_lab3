import { earlyAccessBtn } from "../../mockData/earlyAccessBtnData.js";
import { earlyAccessBtnTemplate } from "../templates/earlyAccessBtnTemplate.js";

const initEarlyAccessBtn = (earlyAccess) => {
  earlyAccess.insertAdjacentHTML("beforeend", earlyAccessBtnTemplate(earlyAccessBtn));
};

export default initEarlyAccessBtn;
