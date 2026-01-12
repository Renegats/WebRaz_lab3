export const createHeaderTemplate = (header) => {
    return `
      <h1 class="squares_header">
        ${header}
      </h1>
    `;
  };
  
  export const createSquareTemplate = ({ imgSrc, date, content, linkText }, isSquare1 = false) => {
    return `
      <div class="${isSquare1 ? 'square1' : 'square2_1'}">
        <img class="${isSquare1 ? 'square1_img' : 'square2_1_img'}" src="${imgSrc}" alt="Square image">
        <div class="${isSquare1 ? 'large_content_wrapper' : 'content_wrapper'}">
          <h5 class="${isSquare1 ? 'square1_date' : 'date'}">${date}</h5>
          <p class="${isSquare1 ? 'square1_content' : 'square2_1_content'}">${content}</p>
          <a href="#" class="read_full">${linkText}</a>
        </div>
      </div>
    `;
  };
  
  export const createSquaresTemplate = (squares) => {
    // Первая карточка (square1)
    const square1Template = createSquareTemplate(squares[0], true);
    
    let squareTemplates = '';
    
    // Проход по остальным элементам массива и создание шаблонов для square2 и square3
    for (let i = 1; i < squares.length; i += 2) {
      squareTemplates += `
        <div class="square${Math.ceil(i / 2) + 1}">
          <div class="square${Math.ceil(i / 2) + 1}_1">
            ${createSquareTemplate(squares[i])}
          </div>
          ${i + 1 < squares.length ? `
          <div class="square${Math.ceil(i / 2) + 1}_2">
            ${createSquareTemplate(squares[i + 1])}
          </div>
          ` : ''}
        </div>
      `;
    }
    
    return `
      <section class="squares">
        ${square1Template}
        ${squareTemplates}
      </section>
    `;
  };  
  
  
  export const blogTemplate = (header, squares) => {
    const headerTemplate = createHeaderTemplate(header);
    const squaresTemplate = createSquaresTemplate(squares);
  
    return `
      ${headerTemplate}
      ${squaresTemplate}
    `;
  };
  
