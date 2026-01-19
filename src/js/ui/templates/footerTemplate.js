export const createHeaderTemplate = (header) => {
  return `
          <h2>
            ${header}
          </h2>
        `;
};

export const createLinksTemplate = (link) => {
  const template = `
        <li><a href="#">${link}</a></li>
    `;
  return template;
};

export const createMenuTemplate = ({ header, links }) => {
  const linksTemplate = links.map((link) => createLinksTemplate(link)).join("");
  const template = `
        <div class="footer_block">
              <p class="footer_heading_first_left">${header}</p>
              <ul class="footer_menu">
                  ${linksTemplate}
              </ul>
        </div>
    `;

  return template;
};

export const footerTemplate = ({ header, columns }) => {
  const headerTemplate = createHeaderTemplate(header);
  const columnsTemplate = columns
    .map((column) => createMenuTemplate(column))
    .join("");

  const resultTemplate = `
        <div class="fifth_part_page">
            <div class="fpp_upper_container">
                ${headerTemplate}
                <a href="#"><button class="fpp_button__Request_btn">Запросить ранний доступ</button></a>
            </div>
  
            <div class="footer_blocks">
                ${columnsTemplate}
            </div>
        </div>
        <div class="sixth_part">
            <p class = "footer_sixth">© 2023 GPT-3. Все права защищены.</p>
        </div>
    `;

  return resultTemplate;
};
