import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/f64c35f9-7939-4c59-a855-abfaa7146c9e/files/a1fd8d4f-00fe-4a99-88bc-ddca02db583c.jpg';

const NAV = [
  { id: 'home', label: 'Главная' },
  { id: 'catalog', label: 'Каталог' },
  { id: 'about', label: 'О компании' },
  { id: 'delivery', label: 'Доставка' },
  { id: 'contacts', label: 'Контакты' },
];

const PALLETS = [
  {
    name: 'Европоддон EUR',
    tag: 'Стандарт EPAL',
    img: 'https://cdn.poehali.dev/projects/f64c35f9-7939-4c59-a855-abfaa7146c9e/files/bdde2214-e5f6-40a8-8a18-ea68ab3e1286.jpg',
    desc: 'Сертифицированный европейский поддон с клеймом. Универсальное решение для логистики и хранения.',
    specs: {
      Размер: '1200 × 800 мм',
      Высота: '144 мм',
      'Настил': '5 досок',
      'Нагрузка (статич.)': 'до 4000 кг',
      'Нагрузка (динамич.)': 'до 1500 кг',
      'Собств. вес': '22–25 кг',
      Материал: 'Хвойные / лиственные породы',
    },
    price: 'от 450 ₽',
  },
  {
    name: 'Финский поддон FIN',
    tag: 'Размер 1200×1000',
    img: 'https://cdn.poehali.dev/projects/f64c35f9-7939-4c59-a855-abfaa7146c9e/files/a7707eef-27e5-4941-990b-17e9ffcb0103.jpg',
    desc: 'Усиленная конструкция для тяжёлых грузов. Идеален для химической и пищевой промышленности.',
    specs: {
      Размер: '1200 × 1000 мм',
      Высота: '145 мм',
      'Настил': '6 досок',
      'Нагрузка (статич.)': 'до 6000 кг',
      'Нагрузка (динамич.)': 'до 2000 кг',
      'Собств. вес': '30–35 кг',
      Материал: 'Хвойные / лиственные породы',
    },
    price: 'от 500 ₽',
  },
  {
    name: 'Поддон облегчённый',
    tag: 'Эконом',
    img: 'https://cdn.poehali.dev/projects/f64c35f9-7939-4c59-a855-abfaa7146c9e/files/a4f4f4f4-ec1a-4536-8259-b90cb15e39de.jpg',
    desc: 'Лёгкий одноразовый поддон для разовых отгрузок и экспортных поставок без возврата тары.',
    specs: {
      Размер: '1200 × 800 мм',
      Высота: '120 мм',
      'Настил': '5 досок',
      'Нагрузка (статич.)': 'до 2000 кг',
      'Нагрузка (динамич.)': 'до 800 кг',
      'Собств. вес': '12–15 кг',
      Материал: 'Сосна / ель / берёза',
    },
    price: 'от 280 ₽',
  },
];

const STATS = [
  { value: '5', suffix: 'лет', label: 'на рынке тары' },
  { value: '40', suffix: 'тыс.', label: 'поддонов в месяц' },
  { value: '48', suffix: 'ч', label: 'срок отгрузки' },
  { value: '500', suffix: '+', label: 'клиентов по РФ' },
];

const Index = () => {
  const [active, setActive] = useState<number | null>(0);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="container flex items-center justify-between h-16">
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2 font-display font-700 text-xl tracking-tight"
          >
            <span className="flex h-8 w-8 items-center justify-center bg-primary text-primary-foreground rounded-sm">
              <Icon name="Layers" size={18} />
            </span>
            ПОДДОН<span className="text-primary">ПРО</span>
          </button>
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm font-500 uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors"
              >
                {n.label}
              </button>
            ))}
          </nav>
          <Button onClick={() => scrollTo('contacts')} className="font-display uppercase tracking-wide">
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-16 grid-texture">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMG} alt="Поддоны" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="container relative z-10 py-24">
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <span className="h-px w-12 bg-primary" />
            <span className="text-sm font-500 uppercase tracking-[0.2em] text-primary">
              Производство деревянной тары
            </span>
          </div>
          <h1
            className="font-display font-700 uppercase leading-[0.95] tracking-tight animate-fade-in"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)', animationDelay: '0.1s', opacity: 0 }}
          >
            Поддоны
            <br />
            <span className="text-primary">для бизнеса</span>
            <br />
            <span className="text-stroke">любого масштаба</span>
          </h1>
          <p
            className="mt-8 max-w-xl text-lg text-muted-foreground animate-fade-in"
            style={{ animationDelay: '0.25s', opacity: 0 }}
          >
            Собственное производство европоддонов, финских и облегчённых паллет.
            Точные технические характеристики, отгрузка от 1 штуки, доставка по всей России.
          </p>
          <div
            className="mt-6 flex flex-wrap gap-3 animate-fade-in"
            style={{ animationDelay: '0.35s', opacity: 0 }}
          >
            {[
              { icon: 'RefreshCw', label: 'Б/у поддоны', desc: 'Покупаем и продаём восстановленные' },
              { icon: 'Ruler', label: 'Нестандартные', desc: 'Любые размеры под ваши задачи' },
              { icon: 'BadgeCheck', label: 'Новые', desc: 'EPAL, FIN, облегчённые' },
            ].map((tag) => (
              <div key={tag.label} className="flex items-center gap-3 bg-secondary/60 border border-border px-4 py-3 rounded-sm">
                <span className="flex h-9 w-9 items-center justify-center bg-primary text-primary-foreground rounded-sm shrink-0">
                  <Icon name={tag.icon} size={18} />
                </span>
                <div>
                  <div className="font-display font-600 uppercase text-sm tracking-wide">{tag.label}</div>
                  <div className="text-xs text-muted-foreground">{tag.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="mt-8 flex flex-wrap gap-4 animate-fade-in"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            <Button
              size="lg"
              onClick={() => scrollTo('catalog')}
              className="font-display uppercase tracking-wide text-base h-14 px-8"
            >
              Смотреть каталог
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo('delivery')}
              className="font-display uppercase tracking-wide text-base h-14 px-8 border-border"
            >
              Условия доставки
            </Button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {STATS.map((s) => (
            <div key={s.label} className="py-8 px-4 text-center">
              <div className="font-display font-700 text-4xl md:text-5xl">
                {s.value}
                <span className="text-primary text-2xl align-top ml-1">{s.suffix}</span>
              </div>
              <div className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="container py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-sm font-500 uppercase tracking-[0.2em] text-primary">02 / Каталог</span>
            <h2 className="mt-3 font-display font-700 uppercase text-4xl md:text-6xl tracking-tight">
              Типы поддонов
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Нажмите на карточку, чтобы развернуть полные технические характеристики и размеры каждого типа.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {PALLETS.map((p, i) => {
            const open = active === i;
            return (
              <div
                key={p.name}
                onClick={() => setActive(open ? null : i)}
                className={`group cursor-pointer border bg-card transition-all duration-300 overflow-hidden ${
                  open ? 'border-primary' : 'border-border hover:border-muted-foreground/50'
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <span className="absolute top-3 left-3 inline-block px-3 py-1 text-xs uppercase tracking-wide bg-background/80 backdrop-blur-sm text-muted-foreground rounded-sm">
                    {p.tag}
                  </span>
                </div>

                <div className="p-8">
                  <h3 className="font-display font-600 uppercase text-2xl tracking-tight">{p.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

                  <div
                    className={`grid transition-all duration-300 ${
                      open ? 'grid-rows-[1fr] mt-6 opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <dl className="divide-y divide-border border-t border-border">
                        {Object.entries(p.specs).map(([k, v]) => (
                          <div key={k} className="flex items-center justify-between py-2.5 text-sm">
                            <dt className="text-muted-foreground">{k}</dt>
                            <dd className="font-500 font-display">{v}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                    <span className="font-display font-700 text-2xl text-primary">{p.price}</span>
                    <span className="flex items-center gap-1 text-xs uppercase tracking-wide text-muted-foreground">
                      {open ? 'Свернуть' : 'Характеристики'}
                      <Icon
                        name="ChevronDown"
                        size={16}
                        className={`transition-transform ${open ? 'rotate-180' : ''}`}
                      />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-y border-border bg-secondary/30">
        <div className="container py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-500 uppercase tracking-[0.2em] text-primary">03 / О компании</span>
            <h2 className="mt-3 font-display font-700 uppercase text-4xl md:text-6xl tracking-tight leading-[0.95]">
              Делаем тару,
              <br />
              которой <span className="text-primary">доверяют</span>
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed">
              «Поддон Про» — производитель деревянной тары с собственным цехом сушки и сборки.
              Мы контролируем качество на каждом этапе: от отбора пиломатериала до финального клеймения.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: 'ShieldCheck', t: 'Сертификация', d: 'Соответствие EPAL и ISPM-15 для экспорта' },
                { icon: 'Factory', t: 'Своё производство', d: 'Полный цикл без посредников и наценок' },
                { icon: 'Recycle', t: 'Камерная сушка', d: 'Влажность древесины не выше 22%' },
              ].map((f) => (
                <div key={f.t} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-sm">
                    <Icon name={f.icon} size={20} />
                  </span>
                  <div>
                    <div className="font-display font-600 uppercase tracking-wide">{f.t}</div>
                    <div className="text-sm text-muted-foreground">{f.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={HERO_IMG}
              alt="Производство поддонов"
              className="w-full aspect-[4/5] object-cover rounded-sm border border-border"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-sm hidden md:block">
              <div className="font-display font-700 text-4xl">ГОСТ</div>
              <div className="text-xs uppercase tracking-wide">по всем позициям</div>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <section id="delivery" className="container py-24 md:py-32">
        <span className="text-sm font-500 uppercase tracking-[0.2em] text-primary">04 / Доставка</span>
        <h2 className="mt-3 font-display font-700 uppercase text-4xl md:text-6xl tracking-tight">
          Привезём за 48 часов
        </h2>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            { icon: 'Truck', t: 'Своя логистика', d: 'Автопарк от Газели до фуры 20 тонн. Доставка по Москве и области от 1 дня.' },
            { icon: 'MapPin', t: 'По всей России', d: 'Отгрузка транспортными компаниями в любой регион. Поможем оформить экспорт.' },
            { icon: 'Package', t: 'От 1 штуки', d: 'Работаем без минимальной партии. Розница и опт по гибким ценам.' },
          ].map((d) => (
            <div key={d.t} className="border border-border bg-card p-8 hover:border-primary transition-colors">
              <span className="flex h-14 w-14 items-center justify-center bg-secondary text-primary rounded-sm">
                <Icon name={d.icon} size={26} />
              </span>
              <h3 className="mt-6 font-display font-600 uppercase text-xl tracking-wide">{d.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="border-t border-border bg-secondary/30">
        <div className="container py-24 md:py-32 grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-sm font-500 uppercase tracking-[0.2em] text-primary">05 / Контакты</span>
            <h2 className="mt-3 font-display font-700 uppercase text-4xl md:text-6xl tracking-tight leading-[0.95]">
              Свяжитесь
              <br />
              с нами
            </h2>
            <div className="mt-10 space-y-6">
              {[
                { icon: 'Phone', t: 'Телефон', d: '+7 (495) 000-00-00' },
                { icon: 'Mail', t: 'Почта', d: 'sales@palletprom.ru' },
                { icon: 'MapPin', t: 'Адрес', d: 'Москва, Промзона «Восток», 14' },
                { icon: 'Clock', t: 'Режим работы', d: 'Пн–Сб 8:00 – 20:00' },
              ].map((c) => (
                <div key={c.t} className="flex gap-4 items-center">
                  <span className="flex h-12 w-12 items-center justify-center bg-primary text-primary-foreground rounded-sm">
                    <Icon name={c.icon} size={20} />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-muted-foreground">{c.t}</div>
                    <div className="font-display font-600 text-lg">{c.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="border border-border bg-card p-8 md:p-10 rounded-sm"
          >
            <h3 className="font-display font-600 uppercase text-2xl tracking-wide">Рассчитать заказ</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Оставьте заявку — менеджер пришлёт спецификацию и цены.
            </p>
            <div className="mt-6 space-y-4">
              <input
                placeholder="Ваше имя"
                className="w-full h-12 px-4 bg-secondary border border-border rounded-sm text-sm focus:border-primary focus:outline-none transition-colors"
              />
              <input
                placeholder="Телефон"
                className="w-full h-12 px-4 bg-secondary border border-border rounded-sm text-sm focus:border-primary focus:outline-none transition-colors"
              />
              <textarea
                placeholder="Какие поддоны и сколько нужно?"
                rows={4}
                className="w-full p-4 bg-secondary border border-border rounded-sm text-sm focus:border-primary focus:outline-none transition-colors resize-none"
              />
              <Button type="submit" size="lg" className="w-full font-display uppercase tracking-wide h-14 text-base">
                Отправить заявку
                <Icon name="Send" size={18} className="ml-2" />
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-display font-700 text-lg">
            <span className="flex h-7 w-7 items-center justify-center bg-primary text-primary-foreground rounded-sm">
              <Icon name="Layers" size={16} />
            </span>
            ПОДДОН<span className="text-primary">ПРО</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 Поддон Про. Производство деревянной тары.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
