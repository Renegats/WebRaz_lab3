export const createHeaderTemplate = (header) => {
    return `
      <h1 class="end_header">
        ${header}
      </h1>
    `;
  };
  
  export const createButtonTemplate = ({ title, href }) => {
    return `
      <button href="${href}" class="early_access_btn">
        <p class="btn_text">${title}</p>
      </button>
    `;
  };
  
  export const createSquareTemplate = (data) => {
    return `
      <div class="square1_end">
        <img class="square1_end_img" src="./assets/img/logo.svg">
        <p class="square_end_text">${data.address}</p>
        <p class="square_end_text">Все права защищены</p>
      </div>
    `;
  };
  
  export const createLinksTemplate = (links) => {
    return links
      .map(link => `<a href="${link.href}" class="links_content">${link.text}</a>`)
      .join("");
  };
  
  export const createContactsTemplate = (contacts) => {
    return `
      <p class="contacts">Контакты</p>
      <p class="square_end_text">${contacts.address}</p>
      <p class="square_end_text">${contacts.phone}</p>
      <p class="square_end_text">${contacts.email}</p>
    `;
  };
  
  export const endTemplate = ({ header, button, copyright, links, companyLinks, contacts }) => {
    const headerTemplate = createHeaderTemplate(header);
    const buttonTemplate = createButtonTemplate(button);
    const squareTemplate = createSquareTemplate({ address: contacts.address });
    const linksTemplate = createLinksTemplate(links);
    const companyLinksTemplate = createLinksTemplate(companyLinks);
    const contactsTemplate = createContactsTemplate(contacts);
  
    return `
      <section class="end">
        ${headerTemplate}
        ${buttonTemplate}
        <div class="end_squares">
          ${squareTemplate}
          <div class="square2_end">
            <p class="links">Ссылки</p>
            ${linksTemplate}
          </div>
          <div class="square3_end">
            <p class="company">Компания</p>
            ${companyLinksTemplate}
          </div>
          <div class="square4_end">
            ${contactsTemplate}
          </div>
        </div>
      </section>
      <section class="licence">
        <p class="copyright">${copyright}</p>
      </section>
    `;
  };
  