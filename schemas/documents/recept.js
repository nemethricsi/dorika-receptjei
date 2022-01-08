export default {
  title: 'Recept',
  name: 'recept',
  type: 'document',
  fields: [
    {
      title: 'Recept neve',
      name: 'nev',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Hozzávalók',
      name: 'hozzavalok',
      type: 'text',
    },
    {
      title: 'Elkészítés',
      name: 'elkeszites',
      type: 'text',
    },
    {
      title: 'Kép',
      name: 'kep',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Recept forrása',
      name: 'receptForrasa',
      type: 'forras',
    },
  ],
};
