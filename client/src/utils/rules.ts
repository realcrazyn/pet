export const rules = {
  required: (message: string = 'Заполните поле!') => ({
    required: true,
    message,
  }),
}
