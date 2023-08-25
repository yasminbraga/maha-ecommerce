export const translateStatus = (status: string) => {
  const statusTranslation = {
    pending: 'Pendente',
    confirmed: 'Confirmado',
    shipped: 'Enviado',
    cancelled: 'Cancelado',
  }

  return statusTranslation[status]
}

export const translateHairType = (type: string) => {
  const translation = {
    straight: 'liso',
    wavy: 'ondulado',
    curly: 'cacheado',
    coily: 'crespo',
  }

  return translation[type]
}

export const translateHairStructure = (type: string) => {
  const translation = {
    fine: 'fino',
    medium: 'médio',
    coarse: 'grosso',
  }

  return translation[type]
}

export const translateHairSize = (type: string) => {
  const translation = {
    short: 'curto',
    medium: 'médio',
    long: 'longo',
    very_long: 'muito longo',
  }

  return translation[type]
}

export const translateMoisture = (type: string) => {
  const translation = {
    dry: 'seco',
    balanced: 'normal',
    oily: 'oleoso',
  }

  return translation[type]
}

export const translateAge = (type: string) => {
  const translation = {
    '2_10': '2 a 10',
    '11_17': '1 a 17',
    '18_24': '18 a 24',
    '25_34': '25 a 34',
    '35_44': '35 a 44',
    '45_54': '45 a 54',
    '55_64': '55 a 64',
    '65+': '65+',
  }

  return translation[type]
}

export const translateColor = (type: string) => {
  const translation = {
    blonde: 'loiro',
    black: 'preto',
    brunette: 'castanho',
    red: 'ruivo',
    gray_silver: 'grisalho ou platinado',
    fashion_color: 'colorido',
  }

  return translation[type]
}

export const translateGoals = (goals: Array<string>) => {
  const translation = {
    anti_frizz: 'anti-frizz',
    shine: 'brilho',
    hydrate: 'hidratação',
    lengthen: 'crescimento',
    strengthen: 'fortificação',
    oil_control: 'controle de oleosidade',
    curl_definition: 'definição de cachos',
  }

  return goals.map((goal) => translation[goal])
}

export const translateHairStyle = (styles: Array<string>) => {
  const translation = {
    straightener: 'chapinha',
    curling_iron: 'babyliss',
    hair_dryer: 'secador',
    hair_clip: 'elástico',
    none: 'nenhum',
  }

  return styles.map((style) => translation[style])
}

export const translateTreatments = (items: Array<string>) => {
  const translation = {
    color: 'coloração',
    straightening: 'alisamento',
    bleached: 'descoloração',
    none: 'nenhum',
  }

  return items.map((item) => translation[item])
}

export const translateWorkoutPlace = (items: Array<string>) => {
  const translation = {
    outdoor: 'outdoor',
    pool: 'piscina',
    beach: 'praia',
    indoor: 'indoor/Academia',
    none: 'nenhum',
  }

  return items.map((item) => translation[item])
}
