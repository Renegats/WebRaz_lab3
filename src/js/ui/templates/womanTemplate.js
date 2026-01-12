export const createExceedAllExpHeaderTemplate = (header) => {
    return `
      <h2 class="exceed_all_exp__right__header">
        ${header}
      </h2>
    `;
  };
  
  export const createExceedAllExpDescriptionTemplate = (description) => {
    return `
      <p class="exceed_all_exp_right__description">
        ${description}
      </p>
    `;
  };
  
  export const createExceedAllExpLinkTemplate = ({ text, href }) => {
    return `
      <a href="${href}" class="early_access_link">
        ${text}
      </a>
    `;
  };
  
  export const createExceedAllExpIllustrationTemplate = ({ src, alt }) => {
    return `
      <img src="${src}" alt="${alt}" />
    `;
  };
  
  export const createExceedAllExpEarlyAccessTextTemplate = (text) => {
    return `
      <p class="early_access">
        ${text}
      </p>
    `;
  };
  
  export const exceedAllExpTemplate = ({
    header,
    description,
    earlyAccessText,
    ctaLink,
    illustration,
  }) => {
    const headerTemplate = createExceedAllExpHeaderTemplate(header);
    const descriptionTemplate = createExceedAllExpDescriptionTemplate(description);
    const earlyAccessTextTemplate = createExceedAllExpEarlyAccessTextTemplate(earlyAccessText);
    const linkTemplate = createExceedAllExpLinkTemplate(ctaLink);
    const illustrationTemplate = createExceedAllExpIllustrationTemplate(illustration);
  
    const resultTemplate = `
      <div class="exceed_all_exp__left">
        ${illustrationTemplate}
      </div>
      <div class="exceed_all_exp__right">
        ${earlyAccessTextTemplate}
        ${headerTemplate}
        ${descriptionTemplate}
        ${linkTemplate}
      </div>
    `;
  
    return resultTemplate;
  };
  