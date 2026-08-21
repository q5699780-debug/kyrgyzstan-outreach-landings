export type City = 
  | 'Все города'
  | 'Бишкек'
  | 'Ош'
  | 'Каракол'
  | 'Нарын'
  | 'Талас'
  | 'Баткен'
  | 'Кант'
  | 'Токмок'
  | 'Кара-Балта'
  | 'Чолпон-Ата'
  | 'Балыкчы'
  | 'Джалал-Абад';

export type Category = 
  | 'Все ниши'
  | 'Авто & Детейлинг'
  | 'Стоматология & Медицина'
  | 'Отели & Туризм'
  | 'Мебель & Интерьер'
  | 'Строительство & Ремонт'
  | 'Банкеты & Рестораны'
  | 'Образование & Языки'
  | 'Красота & Барбершопы';

export interface Company {
  id: number;
  name: string;
  city: string;
  category: string;
  address?: string;
  phone: string;
  website: string;
  instagram: string;
  digitalScore: number;
  potentialScore: number;
  reason: string;
  isTop20?: boolean;
}

export interface TopClientDetails extends Company {
  slug: string;
  tagline: string;
  avgCheck: string;
  currentProblem: string;
  conceptIdea: string;
  visualDirection: string;
  colorPalette: {
    bg: string;
    accent: string;
    text: string;
    card: string;
  };
  typography: string;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaText: string;
    secondaryCta?: string;
  };
  sections: string[];
  killerFeature: {
    title: string;
    description: string;
  };
  outreachScript: {
    hook: string;
    problem: string;
    solution: string;
    cta: string;
  };
}
