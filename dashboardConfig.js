export default {
  widgets: [
    {
      name: 'netlify',
      options: {
        title: 'A generált weboldal állapota a Netlify-on',
        description:
          'A weboldalad azért tud olyan gyors lenni, mert előre elkészül a szerveren (ún. build folyamat), statikus. Ha kész vagy a változtatásokkal, a "Deploy" gombbal szükséges egy új "oldalépítést" (build) generálnod. (Elég egyszer megnyomni a gombot). A Netlify badge sárgára fog változni (Building). Pár perc az egész! Ha a Netlify gomb ismét zöld lesz (Success), az oldalépítés sikeres volt, és a változtatásokat látnod kell a weboldaladon. Ha esetleg az építés sikertelen volt, a gomb pirosra változik(Failed), ebben az esetben semmilyen változás nem történik a weboldaladon, a régi verzió ugyanúgy él tovább. Szólj, és megnézzük, hol a hiba. A "view" link a weboldalra visz, az "admin"-ra kattintva pedig a Netlify build folyamatot lehet nyomon követni.',
        sites: [
          {
            title: 'Weboldal',
            apiId: 'c08a53f9-b3b3-43df-bb65-6a37af1a0447',
            buildHookId: '61d9ddf9e432d78ce31fd13f',
            name: 'dorika-receptjei',
          },
        ],
      },
    },
    // {
    //   name: 'project-info',
    //   options: {
    //     data: [
    //       {
    //         title: 'Sanity repo',
    //         value: 'https://github.com/Thinkaholist/gallushirundo-sanity',
    //         category: 'Code',
    //       },
    //       {
    //         title: 'Gatsby repo',
    //         value: 'https://github.com/Thinkaholist/gallushirundo-frontend',
    //         category: 'Code',
    //       },
    //       {
    //         title: 'Frontend Deploy',
    //         value: 'https://gallushirundo.hu',
    //         category: 'apps',
    //       },
    //     ],
    //   },
    //   layout: {
    //     width: 'medium',
    //     height: 'auto',
    //   },
    // },
    {
      name: 'project-users',
      layout: {
        width: 'small',
        height: 'auto',
      },
    },
    {
      name: 'cats',
      layout: {
        width: 'small',
        height: 'auto',
      },
    },
  ],
};
