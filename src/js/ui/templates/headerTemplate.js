export const createLogoTemplate = ({ alt, src, href }) => {
  const template = `
    <div class="header__logo">
        <a href="${href}" class="logo__link">
            <img class="link__name" src="${src}" alt="${alt}" />
        </a>
    </div>
  `;

  return template;
};

export const burgerTemplate = `
  <div class="header__burger_menu">
    <div class="burger_menu__line"></div>
    <div class="burger_menu__line"></div>
    <div class="burger_menu__line"></div>
  </div>
`;

export const createMenuItemTemplate = ({ title, href }) => {
  const template = `
    <li class="menu__item">
      <a href="${href}" class="item__link">${title}</a>
    </li>
  `;

  return template;
};

export const createButtonTemplate = ({ title, href, isPrimary }) => {
  const template = `
    <a href="${href}">
      <button class="cta_buttons__signin btn${isPrimary ? " primary-btn" : ""}">
        ${title}
      </button>
    </a>
  `;

  return template;
};

export const createRightHeaderTemplate = ({
  menuItemsTemplate,
  ctaButtonsTemplate,
}) => {
  const template = `
    <div class="header__right hidden">
      <aside class="header__menu">
        <div class="menu__close">
          <div class="menu__line"></div>
          <div class="menu__line"></div>
        </div>
        <ul class="menu">
          ${menuItemsTemplate} 
        </ul>
      </aside>
      <div class="cta_buttons">
        ${ctaButtonsTemplate}
      </div>
    </div>
  `;

  return template;
};

export const headerTemplate = ({ logoData, menuData, buttonsData }) => {
  const logoItemsTemplate = createLogoTemplate(logoData);

  const menuItemsTemplate = menuData
    .map((menuItem) => createMenuItemTemplate(menuItem))
    .join("");

  const ctaButtonsTemplate = buttonsData
    .map((buttonsItem) => createButtonTemplate(buttonsItem))
    .join("");

  const rightHeaderTemplate = createRightHeaderTemplate({
    menuItemsTemplate,
    ctaButtonsTemplate,
  });

  const resultTemplate =
    logoItemsTemplate + burgerTemplate + rightHeaderTemplate;

  return resultTemplate;
};
