class Checkbox {
  constructor() {
    this.initCheckboxes();
  }

  initCheckboxes() {
    const checkboxes = document.querySelectorAll('.checkbox');
    
    checkboxes.forEach(checkbox => {
      const input = checkbox.querySelector('.checkbox__input');
      const label = checkbox.querySelector('.checkbox__label');
      
      if (input && label) {
        label.addEventListener('click', () => {
          input.checked = !input.checked;
          input.dispatchEvent(new Event('change', { bubbles: true }));
        });
      }
    });
  }
}

export default Checkbox;