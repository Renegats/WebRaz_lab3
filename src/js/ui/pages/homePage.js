import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initBurger from "./../components/initBurger.js";
import initEarlyAccess from "../components/initEarlyAccess.js";
import initEarlyAccessCard from "../components/initEarlyAccessCard.js";
import initExamples from "../components/initExamples.js";
import initFooter from "../components/initFooter.js";

const createHomePageTemplate = (rootNode) => {
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
    <section class="section early_access_section"></section>
    <section class="section early_access_card"></section>
    <section class="section_examples"></section>
    <section class="fifth_part_page"></section>
  `;

  rootNode.insertAdjacentHTML("beforeend", template); 
};

const homePage = () => {
  const rootNode = document.querySelector("#root");
  createHomePageTemplate(rootNode);

  const headerNode = rootNode.querySelector(".header");
  initHeader(headerNode);

  const heroNode = rootNode.querySelector(".hero_section");
  initHero(heroNode);

  const brandsNode = rootNode.querySelector(".brands_section");
  initBrands(brandsNode);

  const whatIsGptNode = rootNode.querySelector(".what_is_chatgpt_section");
  initWhatIsGpt(whatIsGptNode);

  const futureHereNode = rootNode.querySelector(".future_here");
  initFutureHere(futureHereNode);

  const earlyAccessNode = rootNode.querySelector(".early_access_section");
  initEarlyAccess(earlyAccessNode);

  const earlyAccessCardNode = rootNode.querySelector(".early_access_card");
  initEarlyAccessCard(earlyAccessCardNode);

  const examplesNode = rootNode.querySelector(".section_examples");
  initExamples(examplesNode);

  const footerNode = rootNode.querySelector(".fifth_part_page");
  initFooter(footerNode);

  initBurger(headerNode);
};

export default homePage;
