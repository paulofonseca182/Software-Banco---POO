class Email {
  value: string;
  constructor(email: string) {
    const regexEmail = /\S+@\S+\.\S+/;
    if (!regexEmail.test(email)) {
      throw new Error('Email inválido');
    }
    this.value = email;
  }

  get email(): string {
    return this.value;
  }
}

export default Email;