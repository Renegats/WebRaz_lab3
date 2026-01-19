export const createUpperHeaderTemplate = (upper_header) => {
  return `
          <p class="early_access_card_upper_header">
            ${upper_header}
          </p>
        `;
};

export const createHeaderTemplate = (header) => {
  return `
        <h3 class="early_access_card_header">
          ${header}
        </h3>
      `;
};

export const createButtonTemplate = ({ title }) => {
  return `
        <button class="early_access_card_btn">
            ${title}
        </button>
    `;
};

export const earlyAccessCardTemplate = ({ upper_header, header, btn }) => {
  const upperHeaderTemplate = createUpperHeaderTemplate(upper_header);
  const headerTemplate = createHeaderTemplate(header);
  const buttonTemplate = createButtonTemplate(btn);

  const resultTemplate = `
        <div class="early_access_card_background">
          <div>
            ${upperHeaderTemplate}
            ${headerTemplate}
          </div>
            ${buttonTemplate}
        </div>
        `;

  return resultTemplate;
};
