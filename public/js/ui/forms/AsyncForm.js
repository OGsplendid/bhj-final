class AsyncForm {
  constructor(element) {
    try {
      this.element = element;
    } catch (e) {
      if (!element) {
        throw new Error("Form doesn't exist");
      }
    }
    this.registerEvents();
  }

  registerEvents() {
    this.element.onsubmit = (e) => {
      e.preventDefault();
      this.submit();
    };
  }

  getData() {
    const result = {};
    const formData = new FormData(this.element);
    const entries = formData.entries();
    for(let item of entries) {
      result[item[0]] = item[1];
    }
    return result;
  }

  onSubmit(options){

  }

  submit() {
    this.onSubmit(this.getData());
  }
}
