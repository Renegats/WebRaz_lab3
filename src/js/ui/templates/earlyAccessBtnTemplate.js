export const createEarlyAccessTemplate = (earlyAccess) => {
    return `
      <div class="req_text">${earlyAccess}</div>
    `;
  };
  
  export const createEarlyAccessDescriptionTemplate = (earlyAccessDescription) => {
    return `
      <div class="req_text2">
        ${earlyAccessDescription}
      </div>
    `;
  };
  
  export const createBtnTemplate = ({ title }) => {
    return `
      <a href="#"><button class="req_button">${title}</button></a>
    `;
  };
  
  // Функция для обработки массива кнопок
  export const createBtnsTemplate = (btns) => {
    return btns.map((btn) => createBtnTemplate(btn)).join(""); // Перебор массива кнопок
  };
  
  export const earlyAccessBtnTemplate = ({
    earlyAccess,
    earlyAccessDescription,
    btn,
  }) => {
    const earlyAccessTemplate = createEarlyAccessTemplate(earlyAccess);
    const earlyAccessDescriptionTemplate = createEarlyAccessDescriptionTemplate(earlyAccessDescription);
    const btnsTemplate = createBtnsTemplate(btn); // Обрабатываем кнопки через map
  
    const resTemplate = `
      <div class="req_square">
        <div class="req_right">
          ${earlyAccessTemplate}
          ${earlyAccessDescriptionTemplate}
        </div>
        <div class="req_left">
          ${btnsTemplate}
        </div>
      </div>
    `;
    
    return resTemplate;
  };
  