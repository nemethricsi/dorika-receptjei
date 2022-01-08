export default {
  title: 'Recept forrása',
  name: 'forras',
  type: 'object',
  description: 'Honnan van a recept',
  fields: [
    {
      title: 'Szöveg',
      name: 'text',
      type: 'string',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
    },
  ],
};
