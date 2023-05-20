class Modal {
  constructor(element){
    try {
      this.element = element;
    } catch (err) {
      if (!element) {
        throw new Error('Modal is not defined');
      }
    }
    this.registerEvents();
  }

  registerEvents() {
    const closeElements = [...this.element.querySelectorAll('[data-dismiss = "modal"]')];
    for (const item of closeElements) {
      item.onclick = () => {
        this.onClose(this);
        return false;
      }
    }
  }

  onClose(e) {
    e.close();
  }

  open() {
    this.element.style.display = 'block';
  }

  close() {
    this.element.style.display = 'none';
  }
}
