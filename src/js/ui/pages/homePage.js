import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initWoman from "./../components/initWoman.js"
import initBurger from "./../components/initBurger.js";
import initEarlyAccessBtn from "../components/initEarlyAccessBtn.js";
import initBlog from "./../components/initBlog.js";
import initEnd from "../components/initEnd.js";

const createHomePageTemplate = (rootNode) => {
  // формируем шаблон базовых секций для дальнейшего монтирования в них
  // соответствующих разделов
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
    <section class="exceed_all_exp"></section>
    <section class="early_access_bruhBtn"></section>
    <section class="blog_section"></section>
    <section class="end_section"></section>
  `;

  rootNode.insertAdjacentHTML("beforeend", template); 
};

const homePage = () => {
  // инициализация элементов страницы
  const rootNode = document.querySelector("#root");
  createHomePageTemplate(rootNode);

  // инициализация шапки страницы с мок датой
  const headerNode = rootNode.querySelector(".header");
  initHeader(headerNode);

  // инициализация хиро раздела
  const heroNode = rootNode.querySelector(".hero_section");
  initHero(heroNode);

  // инициализация хиро раздела
  const brandsNode = rootNode.querySelector(".brands_section");
  initBrands(brandsNode);

  // инициализация хиро раздела
  const whatIsGptNode = rootNode.querySelector(".what_is_chatgpt_section");
  initWhatIsGpt(whatIsGptNode);

  // инициализация раздела "Будущее наступило" с мок датой
  const futureHereNode = rootNode.querySelector(".future_here");
  initFutureHere(futureHereNode);

  const woman = rootNode.querySelector(".exceed_all_exp");
  initWoman(woman); 

  const earlyAccess = rootNode.querySelector(".early_access_bruhBtn");
  initEarlyAccessBtn(earlyAccess);

  const blogNode = rootNode.querySelector(".blog_section");
  initBlog(blogNode);

  const endNode = rootNode.querySelector(".end_section");
  initEnd(endNode);


  // инициализация бургера для адаптивного меню
  initBurger(headerNode);

  
};

export default homePage;
