class User {
  constructor(name, email) {
    const reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);

    if (!reg.test(email)) {
      throw new Error('Invalid email.');
    }

    if (name.length <= 3) {
      throw new Error('Invalid name.');
    }

    this.name = name;
    this.email = email;
  }
}
