const ingredients = [
  {
    name: 'manteiga de murumuru',
    imageSrc: '/images/murumuru.png',
    description:
      'A palmeira de manteiga de murumuru é nativa da região amazônica. Sua manteiga é extraída das sementes e é rica em ácidos láurico, mirístico e oléico e vitamina A. Nos fios, têm ação hidratante e nutritiva, fortifica as raízes, além de controlar o frizz. Ideal para cabelos cacheados e fios mais finos, ajudando a manter os cachos alinhados e leves.',
  },
  {
    name: 'manteiga de ucuúba',
    imageSrc: '/images/ucuuba.png',
    description:
      'Ávore nativa da várzea amazônica, a manteiga é extraída de suas sementes e é rica em ácido miristico e oléico. Nos cabelos, têm o poder de hidratar e nutrir os fios ressecados, quebradiços e enfraquecidos. Possui propriedades capazes de repor os nutrientes dos fios, trazendo revitaliazação e força, além de deixar os mesmos alinhados. Indicado para fios mais grossos.',
  },
  {
    name: 'óleo de castanha do pará',
    imageSrc: '/images/castanha.png',
    description:
      'Óleo extraído das sementes da castanheira, árvore nativa da Amazônia, rico em ácido palmítico, olêico e linolêico, além de fitoesteróides sistosterol, magnésio, selênio e as vitaminas A e E. Nos fios, suas propriedades têm efeito antioxidantes e hidratantes deixando os cabelos desidratados e danificados macios, saudáveis, regenerados e fortes. Indicação para cabelos lisos que apresentam frizz e estão quebradiços.',
  },
  {
    name: 'óleo de andiroba',
    imageSrc: '/images/andiroba.png',
    description:
      'O óleo é extraído das sementes da óleo de andiroba, árvore nativa da bacia amazônica, é rico em ácidos graxos oléico, palmítico, mirístico e ácidos de linoléico. No cabelo tem ação hidratante, nutritivo, deixa os fios macios e revitalizados, possui ação antifúngica auxiliando no combate a caspa, seborréia e oleosidade no couro cabeludo. Indicados para cabelos de curvatura mais fechada, como os crespos, com características de oleosidade no couro cabelo e corpo do fio ressecado.',
  },
  {
    name: 'óleo de buriti',
    imageSrc: '/images/buriti.png',
    description:
      'Palmeira nativa da Amazônia, seu óleo é extraído da polpa da semente do óleo de buriti que é rica em ácidos graxos como o ácido oléico e também rico em betacaroteno que dar a cor laranja/vermelho. Nos cabelos tem um alto poder de antioxidante, o que pode dar sobrevida aos cabelos tingidos. Auxilia na regeneração dos fios, proporcionando hidratação e umectação profunda, além de proteger contra danos causados pelo sol. Indicado para cabelos ondulados que estão fragilizados pela exposição solar ou procedimentos químicos como pintura e alisamento. Ótimo para fios em transição.',
  },
  {
    name: 'óleo de patauá',
    imageSrc: '/images/pataua.png',
    description:
      'Óleo extraído do mesocarpo das sementes de Patauá, palmeira nativa da Região amazônica, é rico em ácidos graxos como ácido oléico e aminoácidos como lisina e triptofano. Devido seu alto teor de ácido oléico, apresenta propriedades hidratantes, antioxidantes, fortifica o couro cabeludo e auxilia no tratamento e prevenção de caspa e seborréia. É recomendado também para cabelos secos, sem brilho e quebradiços. Indicado para cabelos cacheados, ajuda a moldar os cachos sem pesá-los.',
  },
]

const returnDescription = (ingredient: string) => {
  return ingredients.find((item) => item.name === ingredient)
}

const combinations = {
  straight: {
    fine: {
      oily: {
        none: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de castanha do pará'),
        ],
        color: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de castanha do pará'),
        ],
        straightening: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de castanha do pará'),
        ],
        transition: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de castanha do pará'),
        ],
        bleached: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de castanha do pará'),
        ],
      },
      dry: {
        none: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de castanha do pará'),
        ],
        color: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de castanha do pará'),
        ],
        straightening: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de castanha do pará'),
        ],
        transition: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de castanha do pará'),
        ],
        bleached: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de castanha do pará'),
        ],
      },
    },
    medium: {
      oily: {
        none: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de castanha do pará'),
        ],
        color: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de castanha do pará'),
        ],
        straightening: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de castanha do pará'),
        ],
        transition: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de castanha do pará'),
        ],
        bleached: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de castanha do pará'),
        ],
      },
      dry: {
        none: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de castanha do pará'),
        ],
        color: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de castanha do pará'),
        ],
        straightening: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de castanha do pará'),
        ],
        transition: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de castanha do pará'),
        ],
        bleached: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de castanha do pará'),
        ],
      },
    },
    coarse: {
      oily: {
        none: [
          returnDescription('manteiga de ucuúba'),
          returnDescription('óleo de castanha do pará'),
        ],
        color: [
          returnDescription('manteiga de ucuúba'),
          returnDescription('óleo de castanha do pará'),
        ],
        straightening: [
          returnDescription('manteiga de ucuúba'),
          returnDescription('óleo de castanha do pará'),
        ],
        transition: [
          returnDescription('manteiga de ucuúba'),
          returnDescription('óleo de castanha do pará'),
        ],
        bleached: [
          returnDescription('manteiga de ucuúba'),
          returnDescription('óleo de castanha do pará'),
        ],
      },
      dry: {
        none: [
          returnDescription('manteiga de ucuúba'),
          returnDescription('óleo de castanha do pará'),
        ],
        color: [
          returnDescription('manteiga de ucuúba'),
          returnDescription('óleo de castanha do pará'),
        ],
        straightening: [
          returnDescription('manteiga de ucuúba'),
          returnDescription('óleo de castanha do pará'),
        ],
        transition: [
          returnDescription('manteiga de ucuúba'),
          returnDescription('óleo de castanha do pará'),
        ],
        bleached: [
          returnDescription('manteiga de ucuúba'),
          returnDescription('óleo de castanha do pará'),
        ],
      },
    },
  },
  wavy: {
    fine: {
      oily: {
        none: [returnDescription('manteiga de murumuru'), returnDescription('óleo de buriti')],
        color: [returnDescription('manteiga de murumuru'), returnDescription('óleo de buriti')],
        straightening: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de buriti'),
        ],
        transition: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de buriti'),
        ],
        bleached: ['manteiga de murumuru', 'óleo de castanha do pará'],
      },
      dry: {
        none: [returnDescription('manteiga de murumuru'), returnDescription('óleo de buriti')],
        color: [returnDescription('manteiga de murumuru'), returnDescription('óleo de buriti')],
        straightening: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de buriti'),
        ],
        transition: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de buriti'),
        ],
        bleached: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de castanha do pará'),
        ],
      },
    },
    medium: {
      oily: {
        none: [returnDescription('manteiga de murumuru'), returnDescription('óleo de buriti')],
        color: [returnDescription('manteiga de murumuru'), returnDescription('óleo de buriti')],
        straightening: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de buriti'),
        ],
        transition: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de buriti'),
        ],
        bleached: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de castanha do pará'),
        ],
      },
      dry: {
        none: [returnDescription('manteiga de murumuru'), returnDescription('óleo de buriti')],
        color: [returnDescription('manteiga de murumuru'), returnDescription('óleo de buriti')],
        straightening: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de buriti'),
        ],
        transition: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de buriti'),
        ],
        bleached: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de castanha do pará'),
        ],
      },
    },
    coarse: {
      oily: {
        none: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de buriti')],
        color: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de buriti')],
        straightening: [
          returnDescription('manteiga de ucuúba'),
          returnDescription('óleo de buriti'),
        ],
        transition: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de buriti')],
        bleached: [
          returnDescription('manteiga de ucuúba'),
          returnDescription('óleo de castanha do pará'),
        ],
      },
      dry: {
        none: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de buriti')],
        color: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de buriti')],
        straightening: [
          returnDescription('manteiga de ucuúba'),
          returnDescription('óleo de buriti'),
        ],
        transition: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de buriti')],
        bleached: [
          returnDescription('manteiga de ucuúba'),
          returnDescription('óleo de castanha do pará'),
        ],
      },
    },
  },
  curly: {
    fine: {
      oily: {
        none: [returnDescription('manteiga de murumuru'), returnDescription('óleo de andiroba')],
        color: [returnDescription('manteiga de murumuru'), returnDescription('óleo de andiroba')],
        straightening: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de andiroba'),
        ],
        transition: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de andiroba'),
        ],
        bleached: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de andiroba'),
        ],
      },
      dry: {
        none: [returnDescription('manteiga de murumuru'), returnDescription('óleo de andiroba')],
        color: [returnDescription('manteiga de murumuru'), returnDescription('óleo de andiroba')],
        straightening: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de andiroba'),
        ],
        transition: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de andiroba'),
        ],
        bleached: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de andiroba'),
        ],
      },
    },
    medium: {
      oily: {
        none: [returnDescription('manteiga de murumuru'), returnDescription('óleo de andiroba')],
        color: [returnDescription('manteiga de murumuru'), returnDescription('óleo de andiroba')],
        straightening: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de andiroba'),
        ],
        transition: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de andiroba'),
        ],
        bleached: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de andiroba'),
        ],
      },
      dry: {
        none: [returnDescription('manteiga de murumuru'), returnDescription('óleo de andiroba')],
        color: [returnDescription('manteiga de murumuru'), returnDescription('óleo de andiroba')],
        straightening: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de andiroba'),
        ],
        transition: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de andiroba'),
        ],
        bleached: [
          returnDescription('manteiga de murumuru'),
          returnDescription('óleo de andiroba'),
        ],
      },
    },
    coarse: {
      oily: {
        none: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de andiroba')],
        color: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de andiroba')],
        straightening: [
          returnDescription('manteiga de ucuúba'),
          returnDescription('óleo de andiroba'),
        ],
        transition: [
          returnDescription('manteiga de ucuúba'),
          returnDescription('óleo de andiroba'),
        ],
        bleached: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de andiroba')],
      },
      dry: {
        none: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de andiroba')],
        color: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de andiroba')],
        straightening: [
          returnDescription('manteiga de ucuúba'),
          returnDescription('óleo de andiroba'),
        ],
        transition: [
          returnDescription('manteiga de ucuúba'),
          returnDescription('óleo de andiroba'),
        ],
        bleached: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de andiroba')],
      },
    },
  },
  coily: {
    fine: {
      oily: {
        none: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de patauá')],
        color: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de patauá')],
        straightening: [
          returnDescription('manteiga de ucuúba'),
          returnDescription('óleo de patauá'),
        ],
        transition: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de patauá')],
        bleached: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de patauá')],
      },
      dry: {
        none: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de patauá')],
        color: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de patauá')],
        straightening: [
          returnDescription('manteiga de ucuúba'),
          returnDescription('óleo de patauá'),
        ],
        transition: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de patauá')],
        bleached: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de patauá')],
      },
    },
    medium: {
      oily: {
        none: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de patauá')],
        color: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de patauá')],
        straightening: [
          returnDescription('manteiga de ucuúba'),
          returnDescription('óleo de patauá'),
        ],
        transition: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de patauá')],
        bleached: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de patauá')],
      },
      dry: {
        none: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de patauá')],
        color: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de patauá')],
        straightening: [
          returnDescription('manteiga de ucuúba'),
          returnDescription('óleo de patauá'),
        ],
        transition: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de patauá')],
        bleached: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de patauá')],
      },
    },
    coarse: {
      oily: {
        none: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de andiroba')],
        color: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de andiroba')],
        straightening: [
          returnDescription('manteiga de ucuúba'),
          returnDescription('óleo de andiroba'),
        ],
        transition: [
          returnDescription('manteiga de ucuúba'),
          returnDescription('óleo de andiroba'),
        ],
        bleached: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de andiroba')],
      },
      dry: {
        none: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de andiroba')],
        color: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de andiroba')],
        straightening: [
          returnDescription('manteiga de ucuúba'),
          returnDescription('óleo de andiroba'),
        ],
        transition: [
          returnDescription('manteiga de ucuúba'),
          returnDescription('óleo de andiroba'),
        ],
        bleached: [returnDescription('manteiga de ucuúba'), returnDescription('óleo de andiroba')],
      },
    },
  },
}

export const generateFormula = (quizData) => {
  if (quizData.treatments.includes('bleached')) {
    return combinations[quizData.hairType][quizData.hairStructure][quizData.moisture]['bleached']
  } else {
    return combinations[quizData.hairType][quizData.hairStructure][quizData.moisture]['none']
  }
}

// const cabeloTeste = {
//   hairType: 'straight',
//   hairStructure: 'fine',
//   moisture: 'oily',
//   treatments: ['none'],
// }

// const hairFormula = generateFormula(cabeloTeste)
// hairFormula.map((item) => console.log(item.name))
