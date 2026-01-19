export const createHeaderTemplate = (header) => {
  return `
        <h2 class="special_header">
          ${header}
        </h2>
      `;
};

export const createCardTemplate = ({ src, alt, data, title }) => {
  const template = `
      <div class="container_card">
        <img
          class="cards_section_img"
          src="${src}"
          alt="${alt}"
        />
        <div class="inf_block">
          <a class="data_for_card"> ${data} </a>
          <h3 class="card_header">
              ${title}
          </h3>
          <div class="special_filler"></div>
          <a href="#" class="read-button"> Читать полную статью </a>
        </div>
      </div>
  `;

  return template;
};

export const examplesTemplate = ({ header, left_examples, right_examples }) => {
  const headerTemplate = createHeaderTemplate(header);
  const leftCardsTemplate = left_examples
    .map((example) => createCardTemplate(example))
    .join("");
  const rightCardsTemplate = right_examples
    .map((example) => createCardTemplate(example))
    .join("");

  const resultTemplate = `
      <div class="special_header_block">
        ${headerTemplate}
      </div>

      <div class="blocks">
        <div class="left_block_ex">
          ${leftCardsTemplate}
        </div>
        <div class="right_block_ex">
          ${rightCardsTemplate}
        </div>
      </div>
  `;

  return resultTemplate;
};
