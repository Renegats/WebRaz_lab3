export const createBeforeHeaderTemplate = (before_header) => {
  return `
        <p class="right__before_header">
          ${before_header}
        </p>
      `;
};

export const createHeaderTemplate = (header) => {
  return `
      <h2 class="right__header">
        ${header}
      </h2>
    `;
};

export const createDescriptionTemplate = (description) => {
  return `
      <p class="right__description">
        ${description}
      </p>
      <a href="#" class="right__cta">Запросить ранний доступ</a>
    `;
};

export const createMyAppsTemplate = ({ src, alt }) => {
  return `
      <img src="${src}" alt="${alt}" />
    `;
};

export const earlyAccessTemplate = ({
  my_apps,
  before_header,
  header,
  description,
}) => {
  const beforeHeaderTemplate = createBeforeHeaderTemplate(before_header);
  const headerTemplate = createHeaderTemplate(header);
  const descriptionTemplate = createDescriptionTemplate(description);
  const myAppsTemplate = createMyAppsTemplate(my_apps);

  const resultTemplate = `
      <div class="early_access_section__left">
          ${myAppsTemplate}
      </div>
      <div class="early_access_section__right">
          ${beforeHeaderTemplate}
          ${headerTemplate}
          ${descriptionTemplate}
      </div>
      `;

  return resultTemplate;
};
