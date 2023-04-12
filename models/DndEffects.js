class DndEffects {
    static Unconsious = new DndEffects("Unconsious", "Без сознания", 
    "Находящееся без сознания существо недееспособно (не может совершать Действия и Реакции)," +
    " не способно перемещаться и говорить, а также не осознаёт своё окружение.\n" +
    "Существо роняет всё, что держит, и падает ничком.\n" +
    "Существо автоматически проваливает спасброски Силы и Ловкости.\n" +
    "Броски атаки по существу совершаются с преимуществом.\n" +
    "Любая атака, попавшая по такому существу, считается критическим попаданием, если нападающий находится в пределах 5 футов от него.");

    static Frightened = new DndEffects("Frightened", "Испуган",
    "Испуганное существо совершает с помехой проверки характеристик и броски атаки, пока источник его страха находится в пределах его линии обзора.\n" +
    "Существо не способно добровольно приблизиться к источнику своего страха.");
    
    static Exausted = new DndEffects("Exausted", "Истощён",
    "Эффект имеет несколько степеней:\n" +
    "1 - Помеха при проверках характеристик\n" +
    "2 - Скорость уменьшается вдвое\n" +
    "3 - Помеха при бросках атаки и спасбросках\n" +
    "4 - Максимум хитов уменьшается вдвое\n" +
    "5 - Скорость снижается до 0\n" +
    "6 - Смерть\n\n" +
    "Если существо, уже находящееся в состоянии истощения, подвергается воздействию другого эффекта, вызывающего истощение, его текущая степень истощения повышается на значение, указанное в описании эффекта.\n" +
    "На существо воздействуют эффекты не только текущей степени истощения, но и более слабых степеней.\n" +
    "Например, существо на 2 степени истощения перемещается в два раза медленнее и совершает с помехой проверки характеристик.\n" +
    "Эффект, снимающий истощение, понижает его степень согласно описанию эффекта, вплоть до окончания действия истощения, если степень истощения существа становится ниже 1.\n" +
    "Продолжительный отдых снижает степень истощения на 1, при условии, что существо что-нибудь съесть и выпьет.\n" +
    "Кроме того, если существо вернули к жизни, его уровень истощения снижается на 1."
    );
    
    static Invisible = new DndEffects("Invisible", "Невидим",
    "Невидимое существо невозможно увидеть без помощи магии или особого чувства. С точки зрения скрытности существо считается сильно заслонённым. Местонахождение существа можно определить по шуму, который оно издаёт, или по оставленным им следам.\n" +
    "Броски атаки по невидимому существу совершаются с помехой, а его броски атаки — с преимуществом.");

    static Incapacitated = new DndEffects("Incapacitated", "Недееспособен",
    "Недееспособное существо не может совершать Действия и Реакции.\n" +
    "Вы автоматически проваливаете проверки против Толчка и Захвата.");

    static Defeaned = new DndEffects("Defeaned", "Оглушён",
     "Оглохшее существо ничего не слышит и автоматически проваливает все проверки характеристик, связанные со слухом.");
    
    static Petrified = new DndEffects("Petrified", "Окаменел", 
    "Окаменевшее существо, а также все немагические предметы, которые оно несёт или носит, трансформируется в твёрдое инертное вещество (как правило, в камень). Его вес увеличивается в 10 раз, и оно перестаёт стареть.\n" +
    "Существо недееспособно, не способно двигаться и говорить, а также не осознаёт своё окружение.\n" +
    "Броски атаки по существу совершаются с преимуществом.\n" +
    "Существо автоматически проваливает спасброски Силы и Ловкости.\n" +
    "Существо получает сопротивление ко всем видам урона.\n" +
    "Существо получает иммунитет к ядам и болезням. Если яд или болезнь уже действовали на существо, их действие приостанавливается, но не исчезает.");
    
    static Restrained = new DndEffects("Restrained", "Опутан",
    "Скорость опутанного существа равна 0, и оно не получает выгоды ни от каких бонусов к скорости.\n" +
    "Броски атаки по такому существу совершаются с преимуществом, а его броски атаки — с помехой.\n" +
    "Существо совершает с помехой спасброски Ловкости.");

    static Blinded = new DndEffects("Blinded", "Ослеплён",
    "Ослеплённое существо ничего не видит и автоматически проваливает все проверки характеристик, связанные со зрением.\n" +
    "Броски атаки по такому существу совершаются с преимуществом, а его броски атаки совершаются с помехой.");

    static Poisoned = new DndEffects("Poisoned", "Отравлен",
    "Отравленное существо совершает с помехой броски атаки и проверки характеристик.");
    
    static Charmed = new DndEffects("Charmed", "Очарован",
    "Очарованное существо не может атаковать того, кто его очаровал, а также делать его целью умения или магического эффекта, причиняющего вред.\n" +
    "Искуситель совершает с преимуществом все проверки характеристик при социальном взаимодействии с очарованным существом.");
    
    static Stunned = new DndEffects("Stunned", "Ошеломлён",
    "Ошеломлённое существо недееспособно, не способно перемещаться и говорит, запинаясь.\n" +
    "Существо автоматически проваливает спасброски Силы и Ловкости.\n" +
    "Броски атаки по существу совершаются с преимуществом.");

    static Paralyzed = new DndEffects("Paralyzed", "Парализован",
    "Парализованное существо недееспособно и не способно перемещаться и говорить.\n" +
    "Существо автоматически проваливает спасброски Силы и Ловкости.\n" +
    "Броски атаки по парализованному существу совершаются с преимуществом.\n" +
    "Любая атака, попавшая по такому существу, считается критическим попаданием, если нападающий находится в пределах 5 футов от существа.");
    
    static Prone = new DndEffects("Prone", "Сбит с ног", "Сбитое с ног существо способно перемещаться только ползком, пока не встанет, прервав тем самым это состояние.\n" +
    "Существо совершает с помехой броски атаки.\n" +
    "Броски атаки по существу совершаются с преимуществом, если нападающий находится в пределах 5 футов от него. В противном случае броски атаки совершаются с помехой.");
    
    static Grappled = new DndEffects("Grappled", "Схвачен");

    constructor(name, nameRu, description) {
      this.name = name;
      this.nameRu = nameRu;
      this.description = description;
    }
}

export default DndEffects;