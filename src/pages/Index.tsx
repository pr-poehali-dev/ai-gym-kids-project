import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Workout {
  id: number;
  title: string;
  duration: string;
  difficulty: string;
  points: number;
  icon: string;
  completed: boolean;
}

interface Achievement {
  id: number;
  title: string;
  icon: string;
  unlocked: boolean;
}

interface FinanceLesson {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  icon: string;
  completed: boolean;
  coins: number;
}

interface LeaderboardUser {
  id: number;
  name: string;
  avatar: string;
  level: number;
  points: number;
  rank: number;
}

interface Avatar {
  id: number;
  emoji: string;
  name: string;
  unlocked: boolean;
  cost: number;
}

interface ShopItem {
  id: number;
  title: string;
  description: string;
  price: number;
  category: 'merch' | 'digital' | 'service' | 'toy';
  icon: string;
  image: string;
  inStock: boolean;
  popular?: boolean;
}

interface DailyQuest {
  id: number;
  title: string;
  description: string;
  progress: number;
  target: number;
  reward: number;
  icon: string;
  completed: boolean;
}

interface WeeklyStats {
  day: string;
  workouts: number;
  lessons: number;
  coins: number;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [walletBalance, setWalletBalance] = useState(1250);
  const [parentalPin, setParentalPin] = useState('');
  const [isParentMode, setIsParentMode] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
  const [selectedAvatar, setSelectedAvatar] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const userStats = {
    name: 'Маша',
    level: 12,
    points: 2840,
    nextLevelPoints: 3000,
    streak: 7,
    completedWorkouts: 45,
  };

  const avatars: Avatar[] = [
    { id: 1, emoji: '👧', name: 'Девочка', unlocked: true, cost: 0 },
    { id: 2, emoji: '👦', name: 'Мальчик', unlocked: true, cost: 0 },
    { id: 3, emoji: '🦊', name: 'Лисёнок', unlocked: true, cost: 0 },
    { id: 4, emoji: '🦁', name: 'Львёнок', unlocked: false, cost: 100 },
    { id: 5, emoji: '🦄', name: 'Единорог', unlocked: false, cost: 150 },
    { id: 6, emoji: '🐶', name: 'Щенок', unlocked: false, cost: 80 },
    { id: 7, emoji: '🐱', name: 'Котёнок', unlocked: false, cost: 80 },
    { id: 8, emoji: '🐼', name: 'Панда', unlocked: false, cost: 120 },
    { id: 9, emoji: '🐯', name: 'Тигр', unlocked: false, cost: 200 },
  ];

  const shopItems: ShopItem[] = [
    {
      id: 1,
      title: 'Футболка AI GymKids',
      description: 'Крутая футболка с логотипом',
      price: 450,
      category: 'merch',
      icon: 'Shirt',
      image: '👕',
      inStock: true,
      popular: true,
    },
    {
      id: 2,
      title: 'Кепка спортивная',
      description: 'Стильная кепка для тренировок',
      price: 320,
      category: 'merch',
      icon: 'CircleUser',
      image: '🧢',
      inStock: true,
    },
    {
      id: 3,
      title: 'Скакалка с счётчиком',
      description: 'Умная скакалка с подсчётом прыжков',
      price: 580,
      category: 'toy',
      icon: 'Activity',
      image: '🪂',
      inStock: true,
    },
    {
      id: 4,
      title: 'Мяч фитнес-бол',
      description: 'Надувной мяч для упражнений',
      price: 890,
      category: 'toy',
      icon: 'Circle',
      image: '⚽',
      inStock: true,
    },
    {
      id: 5,
      title: 'Премиум аватары',
      description: 'Открой все премиум аватары',
      price: 250,
      category: 'digital',
      icon: 'Sparkles',
      image: '✨',
      inStock: true,
      popular: true,
    },
    {
      id: 6,
      title: 'Новые тренировки',
      description: 'Доступ к 5 эксклюзивным тренировкам',
      price: 180,
      category: 'digital',
      icon: 'Dumbbell',
      image: '💪',
      inStock: true,
    },
    {
      id: 7,
      title: 'Кинотеатр на 2 человек',
      description: 'Билеты в кино на выходные',
      price: 1200,
      category: 'service',
      icon: 'Film',
      image: '🎬',
      inStock: true,
      popular: true,
    },
    {
      id: 8,
      title: 'Поход в игровую зону',
      description: '2 часа весёлья с друзьями',
      price: 980,
      category: 'service',
      icon: 'Gamepad2',
      image: '🎮',
      inStock: true,
    },
    {
      id: 9,
      title: 'Набор наклеек',
      description: '50 ярких наклеек с героями',
      price: 150,
      category: 'merch',
      icon: 'Sticker',
      image: '🎉',
      inStock: true,
    },
    {
      id: 10,
      title: 'Бутылка для воды',
      description: 'Спортивная бутылка AI GymKids',
      price: 380,
      category: 'merch',
      icon: 'Cup',
      image: '🧃',
      inStock: true,
    },
    {
      id: 11,
      title: 'Рюкзак спортивный',
      description: 'Удобный рюкзак для тренировок',
      price: 1450,
      category: 'merch',
      icon: 'Backpack',
      image: '🎒',
      inStock: true,
    },
    {
      id: 12,
      title: 'Мастер-класс тренера',
      description: 'Индивидуальная тренировка с про',
      price: 2500,
      category: 'service',
      icon: 'User',
      image: '🏋️',
      inStock: false,
    },
  ];

  const leaderboard: LeaderboardUser[] = [
    { id: 1, name: 'Маша', avatar: '👧', level: 12, points: 2840, rank: 4 },
    { id: 2, name: 'Дима', avatar: '👦', level: 15, points: 3650, rank: 1 },
    { id: 3, name: 'Катя', avatar: '🦊', level: 14, points: 3420, rank: 2 },
    { id: 4, name: 'Алёша', avatar: '🦁', level: 13, points: 3150, rank: 3 },
    { id: 5, name: 'София', avatar: '🦄', level: 11, points: 2560, rank: 5 },
    { id: 6, name: 'Артём', avatar: '🐶', level: 10, points: 2340, rank: 6 },
    { id: 7, name: 'Вера', avatar: '🐱', level: 9, points: 2100, rank: 7 },
    { id: 8, name: 'Максим', avatar: '🐼', level: 8, points: 1890, rank: 8 },
  ];

  const workouts: Workout[] = [
    {
      id: 1,
      title: 'Утренняя зарядка',
      duration: '15 мин',
      difficulty: 'Легко',
      points: 50,
      icon: 'Sun',
      completed: false,
    },
    {
      id: 2,
      title: 'Супер-прыжки',
      duration: '10 мин',
      difficulty: 'Средне',
      points: 75,
      icon: 'Zap',
      completed: false,
    },
    {
      id: 3,
      title: 'Йога-приключение',
      duration: '20 мин',
      difficulty: 'Легко',
      points: 60,
      icon: 'Flower2',
      completed: true,
    },
    {
      id: 4,
      title: 'Танцевальный батл',
      duration: '12 мин',
      difficulty: 'Сложно',
      points: 100,
      icon: 'Music',
      completed: false,
    },
    {
      id: 5,
      title: 'Силовая игра',
      duration: '18 мин',
      difficulty: 'Средне',
      points: 80,
      icon: 'Dumbbell',
      completed: false,
    },
    {
      id: 6,
      title: 'Растяжка-релакс',
      duration: '10 мин',
      difficulty: 'Легко',
      points: 40,
      icon: 'Heart',
      completed: false,
    },
  ];

  const financeLessons: FinanceLesson[] = [
    {
      id: 1,
      title: 'Что такое деньги?',
      description: 'Узнай, откуда берутся деньги и зачем они нужны',
      duration: '5 мин',
      difficulty: 'Легко',
      icon: 'Coins',
      completed: true,
      coins: 30,
    },
    {
      id: 2,
      title: 'Копить или тратить?',
      description: 'Научись планировать свои покупки',
      duration: '7 мин',
      difficulty: 'Легко',
      icon: 'PiggyBank',
      completed: true,
      coins: 40,
    },
    {
      id: 3,
      title: 'Как работает банк?',
      description: 'Узнай, что делают банки с деньгами',
      duration: '8 мин',
      difficulty: 'Средне',
      icon: 'Building2',
      completed: false,
      coins: 50,
    },
    {
      id: 4,
      title: 'Карманные деньги',
      description: 'Как правильно управлять своими деньгами',
      duration: '6 мин',
      difficulty: 'Легко',
      icon: 'Wallet',
      completed: false,
      coins: 35,
    },
    {
      id: 5,
      title: 'Заработок и работа',
      description: 'Откуда родители берут деньги',
      duration: '10 мин',
      difficulty: 'Средне',
      icon: 'Briefcase',
      completed: false,
      coins: 60,
    },
    {
      id: 6,
      title: 'Цифровые деньги',
      description: 'Что такое электронные платежи',
      duration: '9 мин',
      difficulty: 'Сложно',
      icon: 'Smartphone',
      completed: false,
      coins: 70,
    },
  ];

  const dailyQuests: DailyQuest[] = [
    {
      id: 1,
      title: 'Утренняя зарядка',
      description: 'Выполни 1 тренировку сегодня',
      progress: 1,
      target: 1,
      reward: 50,
      icon: 'Sun',
      completed: true,
    },
    {
      id: 2,
      title: 'Финансовый гений',
      description: 'Пройди 1 урок финансовой грамотности',
      progress: 0,
      target: 1,
      reward: 40,
      icon: 'GraduationCap',
      completed: false,
    },
    {
      id: 3,
      title: 'Супер-старание',
      description: 'Заработай 100 монет за день',
      progress: 50,
      target: 100,
      reward: 80,
      icon: 'Coins',
      completed: false,
    },
    {
      id: 4,
      title: 'ИИ-тренер',
      description: 'Используй камеру для тренировки',
      progress: 0,
      target: 1,
      reward: 60,
      icon: 'Camera',
      completed: false,
    },
  ];

  const weeklyStats: WeeklyStats[] = [
    { day: 'Пн', workouts: 2, lessons: 1, coins: 110 },
    { day: 'Вт', workouts: 1, lessons: 2, coins: 130 },
    { day: 'Ср', workouts: 3, lessons: 1, coins: 180 },
    { day: 'Чт', workouts: 2, lessons: 2, coins: 170 },
    { day: 'Пт', workouts: 2, lessons: 1, coins: 140 },
    { day: 'Сб', workouts: 1, lessons: 0, coins: 50 },
    { day: 'Вс', workouts: 1, lessons: 1, coins: 90 },
  ];

  const achievements: Achievement[] = [
    { id: 1, title: 'Первая тренировка', icon: 'Star', unlocked: true },
    { id: 2, title: 'Неделя подряд', icon: 'Flame', unlocked: true },
    { id: 3, title: 'Мастер йоги', icon: 'Trophy', unlocked: true },
    { id: 4, title: '50 тренировок', icon: 'Award', unlocked: false },
    { id: 5, title: 'Чемпион месяца', icon: 'Crown', unlocked: false },
    { id: 6, title: 'Утренний герой', icon: 'Sunrise', unlocked: false },
  ];

  const levelProgress = (userStats.points / userStats.nextLevelPoints) * 100;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Легко':
        return 'bg-green-500';
      case 'Средне':
        return 'bg-yellow-500';
      case 'Сложно':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500 mb-2 animate-fade-in">
            AI GymKids
          </h1>
          <p className="text-muted-foreground text-lg">Привет, {userStats.name}! 🚀</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 lg:grid-cols-9 mb-6 gap-1">
            <TabsTrigger value="dashboard" className="text-xs lg:text-sm px-2">
              <Icon name="LayoutDashboard" className="lg:mr-1" size={16} />
              <span className="hidden lg:inline">Главная</span>
            </TabsTrigger>
            <TabsTrigger value="workouts" className="text-xs lg:text-sm px-2">
              <Icon name="Dumbbell" className="lg:mr-1" size={16} />
              <span className="hidden lg:inline">Тренировки</span>
            </TabsTrigger>
            <TabsTrigger value="camera" className="text-xs lg:text-sm px-2">
              <Icon name="Camera" className="lg:mr-1" size={16} />
              <span className="hidden lg:inline">ИИ-тренер</span>
            </TabsTrigger>
            <TabsTrigger value="lessons" className="text-xs lg:text-sm px-2">
              <Icon name="GraduationCap" className="lg:mr-1" size={16} />
              <span className="hidden lg:inline">Уроки</span>
            </TabsTrigger>
            <TabsTrigger value="shop" className="text-xs lg:text-sm px-2">
              <Icon name="ShoppingBag" className="lg:mr-1" size={16} />
              <span className="hidden lg:inline">Магазин</span>
            </TabsTrigger>
            <TabsTrigger value="wallet" className="text-xs lg:text-sm px-2">
              <Icon name="Wallet" className="lg:mr-1" size={16} />
              <span className="hidden lg:inline">Кошелёк</span>
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="text-xs lg:text-sm px-2">
              <Icon name="Trophy" className="lg:mr-1" size={16} />
              <span className="hidden lg:inline">Лидеры</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="text-xs lg:text-sm px-2">
              <Icon name="User" className="lg:mr-1" size={16} />
              <span className="hidden lg:inline">Профиль</span>
            </TabsTrigger>
            <TabsTrigger value="parental" className="text-xs lg:text-sm px-2">
              <Icon name="Shield" className="lg:mr-1" size={16} />
              <span className="hidden lg:inline">Родители</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="hover-scale border-2 border-purple-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Icon name="Zap" size={18} className="text-purple-600" />
                    Уровень
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600">{userStats.level}</div>
                </CardContent>
              </Card>

              <Card className="hover-scale border-2 border-orange-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Icon name="Star" size={18} className="text-orange-500" />
                    Баллы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-orange-500">{userStats.points}</div>
                </CardContent>
              </Card>

              <Card className="hover-scale border-2 border-blue-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Icon name="Flame" size={18} className="text-blue-500" />
                    Серия дней
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-500">{userStats.streak}</div>
                </CardContent>
              </Card>

              <Card className="hover-scale border-2 border-green-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Icon name="CheckCircle2" size={18} className="text-green-500" />
                    Тренировок
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-500">{userStats.completedWorkouts}</div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={20} className="text-purple-600" />
                  Прогресс до уровня {userStats.level + 1}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{userStats.points} баллов</span>
                  <span>{userStats.nextLevelPoints} баллов</span>
                </div>
                <Progress value={levelProgress} className="h-4" />
                <p className="text-sm text-muted-foreground">
                  Осталось {userStats.nextLevelPoints - userStats.points} баллов до следующего уровня! 🎯
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 bg-gradient-to-br from-yellow-100 to-orange-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Target" size={20} className="text-orange-600" />
                  Ежедневные задания
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {dailyQuests.map((quest) => (
                    <div
                      key={quest.id}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        quest.completed
                          ? 'bg-green-50 border-green-300'
                          : 'bg-white border-gray-200'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                          quest.completed ? 'bg-green-100' : 'bg-purple-100'
                        }`}>
                          <Icon 
                            name={quest.completed ? 'CheckCircle2' : quest.icon} 
                            size={24} 
                            className={quest.completed ? 'text-green-600' : 'text-purple-600'}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-semibold">{quest.title}</p>
                            <div className="flex items-center gap-1 text-orange-500 font-bold">
                              <Icon name="Coins" size={16} />
                              <span>+{quest.reward}</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{quest.description}</p>
                          <div className="flex items-center gap-2">
                            <Progress value={(quest.progress / quest.target) * 100} className="h-2 flex-1" />
                            <span className="text-xs text-muted-foreground whitespace-nowrap">
                              {quest.progress}/{quest.target}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded-lg border-2 border-purple-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon name="Trophy" size={20} className="text-purple-600" />
                      <span className="font-semibold">Всего выполнено</span>
                    </div>
                    <span className="text-lg font-bold text-purple-600">
                      {dailyQuests.filter(q => q.completed).length}/{dailyQuests.length}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BarChart3" size={20} className="text-blue-600" />
                  Статистика за неделю
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-7 gap-2">
                    {weeklyStats.map((stat, idx) => {
                      const maxWorkouts = Math.max(...weeklyStats.map(s => s.workouts));
                      const maxLessons = Math.max(...weeklyStats.map(s => s.lessons));
                      const maxCoins = Math.max(...weeklyStats.map(s => s.coins));
                      const workoutHeight = (stat.workouts / maxWorkouts) * 100;
                      
                      return (
                        <div key={idx} className="flex flex-col items-center gap-2">
                          <div className="text-xs font-medium text-muted-foreground">{stat.day}</div>
                          <div className="w-full h-32 bg-muted/30 rounded-lg relative overflow-hidden flex flex-col justify-end">
                            <div 
                              className="w-full bg-gradient-to-t from-purple-500 to-purple-300 transition-all duration-500 animate-scale-in"
                              style={{ height: `${workoutHeight}%` }}
                            ></div>
                          </div>
                          <div className="text-xs font-bold text-purple-600">{stat.workouts}</div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Dumbbell" size={16} className="text-purple-600" />
                    <span>Тренировки за неделю</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <Icon name="Dumbbell" size={24} className="mx-auto text-purple-600 mb-2" />
                      <div className="text-2xl font-bold text-purple-600">
                        {weeklyStats.reduce((sum, s) => sum + s.workouts, 0)}
                      </div>
                      <p className="text-sm text-muted-foreground">Тренировок</p>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <Icon name="GraduationCap" size={24} className="mx-auto text-orange-600 mb-2" />
                      <div className="text-2xl font-bold text-orange-600">
                        {weeklyStats.reduce((sum, s) => sum + s.lessons, 0)}
                      </div>
                      <p className="text-sm text-muted-foreground">Уроков</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <Icon name="Coins" size={24} className="mx-auto text-green-600 mb-2" />
                      <div className="text-2xl font-bold text-green-600">
                        {weeklyStats.reduce((sum, s) => sum + s.coins, 0)}
                      </div>
                      <p className="text-sm text-muted-foreground">Монет заработано</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Award" size={20} className="text-orange-500" />
                  Достижения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all ${
                        achievement.unlocked
                          ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-300 hover-scale'
                          : 'bg-gray-100 border-gray-300 opacity-50'
                      }`}
                    >
                      <Icon
                        name={achievement.icon}
                        size={32}
                        className={achievement.unlocked ? 'text-yellow-500 animate-bounce-subtle' : 'text-gray-400'}
                      />
                      <p className="text-xs text-center mt-2 font-medium">{achievement.title}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 bg-gradient-to-br from-purple-100 to-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Lightbulb" size={20} className="text-purple-600" />
                  Финансовый совет дня
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  Копи по 10 монет каждый день, и через месяц у тебя будет 300 монет! 💰
                </p>
                <Button className="mt-4 bg-purple-600 hover:bg-purple-700">
                  <Icon name="BookOpen" className="mr-2" size={18} />
                  Узнать больше
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="workouts" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workouts.map((workout) => (
                <Card
                  key={workout.id}
                  className={`hover-scale border-2 transition-all ${
                    workout.completed ? 'border-green-300 bg-green-50' : 'border-gray-200'
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 to-orange-400 flex items-center justify-center">
                        <Icon name={workout.icon} size={28} className="text-white" />
                      </div>
                      {workout.completed && (
                        <Badge className="bg-green-500">
                          <Icon name="Check" size={14} className="mr-1" />
                          Готово
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="mt-4">{workout.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Icon name="Clock" size={16} />
                        <span>{workout.duration}</span>
                      </div>
                      <Badge variant="outline" className={`${getDifficultyColor(workout.difficulty)} text-white`}>
                        {workout.difficulty}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 font-semibold text-orange-500">
                        <Icon name="Coins" size={18} />
                        <span>+{workout.points}</span>
                      </div>
                      <Button
                        disabled={workout.completed}
                        className={
                          workout.completed
                            ? ''
                            : 'bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600'
                        }
                      >
                        {workout.completed ? (
                          <>
                            <Icon name="Check" className="mr-2" size={18} />
                            Выполнено
                          </>
                        ) : (
                          <>
                            <Icon name="Play" className="mr-2" size={18} />
                            Начать
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="camera" className="animate-fade-in">
            <div className="max-w-4xl mx-auto space-y-6">
              {!isCameraActive ? (
                <Card className="border-2 bg-gradient-to-br from-purple-100 to-blue-100">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Icon name="Camera" size={28} className="text-purple-600" />
                      ИИ-тренер с камерой
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center py-8">
                      <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-blue-400 rounded-3xl flex items-center justify-center animate-bounce-subtle">
                        <Icon name="Video" size={64} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">Тренируйся с искусственным интеллектом!</h3>
                      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        ИИ следит за правильностью выполнения упражнений через камеру и помогает улучшить технику
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-white rounded-lg border-2 border-purple-200">
                        <Icon name="Eye" size={32} className="text-purple-600 mb-2" />
                        <h4 className="font-semibold mb-1">Анализ движений</h4>
                        <p className="text-sm text-muted-foreground">ИИ видит твои упражнения в реальном времени</p>
                      </div>
                      <div className="p-4 bg-white rounded-lg border-2 border-blue-200">
                        <Icon name="Target" size={32} className="text-blue-600 mb-2" />
                        <h4 className="font-semibold mb-1">Проверка техники</h4>
                        <p className="text-sm text-muted-foreground">Получай подсказки для улучшения</p>
                      </div>
                      <div className="p-4 bg-white rounded-lg border-2 border-orange-200">
                        <Icon name="Award" size={32} className="text-orange-600 mb-2" />
                        <h4 className="font-semibold mb-1">Больше баллов</h4>
                        <p className="text-sm text-muted-foreground">Правильная техника = больше наград</p>
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-lg py-6"
                      onClick={() => setIsCameraActive(true)}
                    >
                      <Icon name="Camera" className="mr-2" size={24} />
                      Включить камеру
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-6">
                  <Card className="border-2">
                    <CardContent className="p-6">
                      <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-white space-y-4">
                            <Icon name="Video" size={64} className="mx-auto animate-pulse" />
                            <p className="text-xl font-semibold">Камера активирована</p>
                            <p className="text-muted-foreground">Встань перед камерой и начни упражнение</p>
                          </div>
                        </div>
                        <div className="absolute top-4 left-4 flex gap-2">
                          <Badge className="bg-red-500 animate-pulse">
                            <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                            REC
                          </Badge>
                          <Badge className="bg-black/50 text-white">00:45</Badge>
                        </div>
                        <div className="absolute inset-0 border-4 border-green-400 rounded-xl opacity-50 animate-pulse"></div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="border-2 border-green-200 bg-green-50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm flex items-center gap-2">
                          <Icon name="CheckCircle2" size={18} className="text-green-600" />
                          Правильная поза
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-green-600">92%</div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-orange-200 bg-orange-50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm flex items-center gap-2">
                          <Icon name="Activity" size={18} className="text-orange-600" />
                          Повторений
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-orange-600">8/10</div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-purple-200 bg-purple-50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm flex items-center gap-2">
                          <Icon name="Coins" size={18} className="text-purple-600" />
                          Заработано
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-purple-600">+46</div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="border-2 bg-blue-50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="MessageSquare" size={20} className="text-blue-600" />
                        Подсказки ИИ-тренера
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                          <Icon name="ThumbsUp" size={20} className="text-green-600 mt-1" />
                          <div>
                            <p className="font-medium text-green-600">Отлично!</p>
                            <p className="text-sm text-muted-foreground">Спина прямая, так держать!</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                          <Icon name="Info" size={20} className="text-orange-600 mt-1" />
                          <div>
                            <p className="font-medium text-orange-600">Совет</p>
                            <p className="text-sm text-muted-foreground">Попробуй опускаться чуть ниже</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => setIsCameraActive(false)}
                    >
                      <Icon name="X" className="mr-2" size={18} />
                      Остановить
                    </Button>
                    <Button className="flex-1 bg-green-600 hover:bg-green-700">
                      <Icon name="Check" className="mr-2" size={18} />
                      Завершить тренировку
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="lessons" className="animate-fade-in">
            <div className="space-y-6">
              <Card className="border-2 bg-gradient-to-br from-yellow-100 to-orange-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Icon name="GraduationCap" size={28} className="text-orange-600" />
                    Финансовая грамотность
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-semibold mb-1">Твой прогресс обучения</p>
                      <p className="text-sm text-muted-foreground">
                        Пройдено {financeLessons.filter(l => l.completed).length} из {financeLessons.length} уроков
                      </p>
                    </div>
                    <div className="text-4xl font-bold text-orange-600">
                      {Math.round((financeLessons.filter(l => l.completed).length / financeLessons.length) * 100)}%
                    </div>
                  </div>
                  <Progress 
                    value={(financeLessons.filter(l => l.completed).length / financeLessons.length) * 100} 
                    className="h-3 mt-4" 
                  />
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {financeLessons.map((lesson) => (
                  <Card
                    key={lesson.id}
                    className={`hover-scale border-2 transition-all cursor-pointer ${
                      lesson.completed 
                        ? 'border-green-300 bg-green-50' 
                        : selectedLesson === lesson.id
                        ? 'border-purple-400 bg-purple-50'
                        : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedLesson(selectedLesson === lesson.id ? null : lesson.id)}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                          lesson.completed 
                            ? 'bg-gradient-to-br from-green-400 to-emerald-400'
                            : 'bg-gradient-to-br from-yellow-400 to-orange-400'
                        }`}>
                          <Icon name={lesson.icon} size={28} className="text-white" />
                        </div>
                        {lesson.completed && (
                          <Badge className="bg-green-500">
                            <Icon name="Check" size={14} className="mr-1" />
                            Пройдено
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg">{lesson.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{lesson.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Icon name="Clock" size={16} />
                          <span>{lesson.duration}</span>
                        </div>
                        <Badge 
                          variant="outline" 
                          className={`${getDifficultyColor(lesson.difficulty)} text-white`}
                        >
                          {lesson.difficulty}
                        </Badge>
                      </div>
                      {selectedLesson === lesson.id && !lesson.completed && (
                        <div className="pt-4 border-t space-y-3 animate-fade-in">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 font-semibold text-orange-500">
                              <Icon name="Coins" size={18} />
                              <span>+{lesson.coins} монет</span>
                            </div>
                            <Button 
                              size="sm"
                              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                            >
                              <Icon name="Play" className="mr-2" size={16} />
                              Начать урок
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-2 bg-gradient-to-br from-purple-100 to-pink-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Trophy" size={20} className="text-purple-600" />
                    Награды за обучение
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-white rounded-lg">
                      <Icon name="Star" size={32} className="mx-auto text-yellow-500 mb-2" />
                      <p className="font-semibold">Первый урок</p>
                      <Badge className="mt-2 bg-green-500">Получено</Badge>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <Icon name="Flame" size={32} className="mx-auto text-orange-500 mb-2" />
                      <p className="font-semibold">3 урока подряд</p>
                      <Badge className="mt-2 bg-green-500">Получено</Badge>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg opacity-50">
                      <Icon name="Crown" size={32} className="mx-auto text-gray-400 mb-2" />
                      <p className="font-semibold">Все уроки</p>
                      <Badge className="mt-2" variant="outline">Закрыто</Badge>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg opacity-50">
                      <Icon name="Sparkles" size={32} className="mx-auto text-gray-400 mb-2" />
                      <p className="font-semibold">Мастер финансов</p>
                      <Badge className="mt-2" variant="outline">Закрыто</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="shop" className="animate-fade-in">
            <div className="space-y-6">
              <Card className="border-2 bg-gradient-to-br from-pink-100 to-purple-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-left">
                      <h2 className="text-3xl font-bold mb-2">🎁 Магазин наград</h2>
                      <p className="text-muted-foreground text-lg">
                        Обменивай монеты на крутые призы!
                      </p>
                    </div>
                    <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border-2 border-purple-300 shadow-lg">
                      <Icon name="Coins" size={40} className="text-orange-500" />
                      <div>
                        <p className="text-sm text-muted-foreground">Твои монеты</p>
                        <div className="text-4xl font-bold text-orange-500">{userStats.points}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory('all')}
                  className={selectedCategory === 'all' ? 'bg-purple-600' : ''}
                >
                  <Icon name="Sparkles" className="mr-2" size={16} />
                  Все товары
                </Button>
                <Button
                  variant={selectedCategory === 'merch' ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory('merch')}
                  className={selectedCategory === 'merch' ? 'bg-purple-600' : ''}
                >
                  <Icon name="Shirt" className="mr-2" size={16} />
                  Мерч
                </Button>
                <Button
                  variant={selectedCategory === 'toy' ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory('toy')}
                  className={selectedCategory === 'toy' ? 'bg-purple-600' : ''}
                >
                  <Icon name="Gamepad2" className="mr-2" size={16} />
                  Игрушки
                </Button>
                <Button
                  variant={selectedCategory === 'digital' ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory('digital')}
                  className={selectedCategory === 'digital' ? 'bg-purple-600' : ''}
                >
                  <Icon name="Sparkles" className="mr-2" size={16} />
                  Цифровые
                </Button>
                <Button
                  variant={selectedCategory === 'service' ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory('service')}
                  className={selectedCategory === 'service' ? 'bg-purple-600' : ''}
                >
                  <Icon name="Gift" className="mr-2" size={16} />
                  Услуги
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {shopItems
                  .filter((item) => selectedCategory === 'all' || item.category === selectedCategory)
                  .map((item) => {
                    const canAfford = userStats.points >= item.price;
                    return (
                      <Card
                        key={item.id}
                        className={`hover-scale border-2 transition-all relative ${
                          item.popular
                            ? 'border-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50'
                            : !item.inStock
                            ? 'border-gray-300 opacity-60'
                            : 'border-gray-200'
                        }`}
                      >
                        {item.popular && (
                          <div className="absolute -top-3 -right-3 z-10">
                            <Badge className="bg-yellow-500 text-white shadow-lg animate-bounce-subtle">
                              <Icon name="Star" size={14} className="mr-1" />
                              Популярно
                            </Badge>
                          </div>
                        )}
                        {!item.inStock && (
                          <div className="absolute top-4 left-4 z-10">
                            <Badge variant="outline" className="bg-gray-100">
                              Нет в наличии
                            </Badge>
                          </div>
                        )}
                        <CardHeader>
                          <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center mb-4 text-6xl">
                            {item.image}
                          </div>
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-sm text-muted-foreground min-h-[40px]">{item.description}</p>
                          <div className="flex items-center justify-between pt-4 border-t">
                            <div className="flex items-center gap-2">
                              <Icon name="Coins" size={24} className="text-orange-500" />
                              <span className="text-2xl font-bold text-orange-500">{item.price}</span>
                            </div>
                            <Button
                              disabled={!canAfford || !item.inStock}
                              className={
                                canAfford && item.inStock
                                  ? 'bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600'
                                  : ''
                              }
                            >
                              {!item.inStock ? (
                                <>
                                  <Icon name="X" className="mr-2" size={18} />
                                  Закончился
                                </>
                              ) : canAfford ? (
                                <>
                                  <Icon name="ShoppingCart" className="mr-2" size={18} />
                                  Купить
                                </>
                              ) : (
                                <>
                                  <Icon name="Lock" className="mr-2" size={18} />
                                  Мало монет
                                </>
                              )}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
              </div>

              <Card className="border-2 bg-gradient-to-br from-green-100 to-emerald-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingUp" size={20} className="text-green-600" />
                    Как заработать больше монет?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <Icon name="Dumbbell" size={24} className="text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Выполняй тренировки</p>
                        <p className="text-sm text-muted-foreground">За каждую тренировку получай 40-100 монет</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <Icon name="GraduationCap" size={24} className="text-orange-600" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Проходи уроки</p>
                        <p className="text-sm text-muted-foreground">Уроки финансов дают 30-70 монет</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Icon name="Flame" size={24} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Поддерживай серию</p>
                        <p className="text-sm text-muted-foreground">Бонус 150 монет за 7 дней подряд</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                        <Icon name="Trophy" size={24} className="text-yellow-600" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Побеждай в рейтинге</p>
                        <p className="text-sm text-muted-foreground">Топ-10 получают 100-500 монет в неделю</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-blue-100 to-purple-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Package" size={20} className="text-purple-600" />
                    Мои покупки
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <Icon name="ShoppingBag" size={64} className="mx-auto text-muted-foreground mb-4" />
                    <p className="text-lg font-semibold mb-2">У тебя пока нет покупок</p>
                    <p className="text-muted-foreground">
                      Заработай монеты и купи что-нибудь крутое!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="leaderboard" className="animate-fade-in">
            <div className="max-w-5xl mx-auto space-y-6">
              <Card className="border-2 bg-gradient-to-br from-yellow-100 to-orange-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Icon name="Trophy" size={28} className="text-yellow-600" />
                    Таблица лидеров
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-semibold mb-1">Твоя позиция в рейтинге</p>
                      <p className="text-sm text-muted-foreground">Соревнуйся с друзьями и поднимайся выше!</p>
                    </div>
                    <div className="text-center">
                      <div className="text-5xl font-bold text-orange-600">#{leaderboard[0].rank}</div>
                      <p className="text-sm text-muted-foreground mt-1">место</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Users" size={20} className="text-purple-600" />
                    Топ игроков
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {leaderboard.map((user, index) => {
                      const isCurrentUser = user.name === userStats.name;
                      const medalColors = ['text-yellow-500', 'text-gray-400', 'text-orange-600'];
                      const medalIcon = index < 3 ? 'Medal' : null;

                      return (
                        <div
                          key={user.id}
                          className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                            isCurrentUser
                              ? 'bg-gradient-to-r from-purple-100 to-blue-100 border-purple-300 hover-scale'
                              : 'bg-muted/30 border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center gap-3 flex-1">
                            <div className="relative">
                              <div className="w-12 h-12 text-4xl flex items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-blue-100">
                                {user.avatar}
                              </div>
                              {medalIcon && (
                                <div className="absolute -top-1 -right-1">
                                  <Icon name={medalIcon} size={20} className={medalColors[index]} />
                                </div>
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <p className="font-bold text-lg">{user.name}</p>
                                {isCurrentUser && (
                                  <Badge className="bg-purple-600">Ты</Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground">Уровень {user.level}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-xl text-purple-600">{user.points}</div>
                            <p className="text-xs text-muted-foreground">баллов</p>
                          </div>
                          <div className="text-center min-w-[60px]">
                            <div className={`text-2xl font-bold ${isCurrentUser ? 'text-purple-600' : 'text-muted-foreground'}`}>
                              #{user.rank}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border-2 border-yellow-200 bg-yellow-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Icon name="TrendingUp" size={18} className="text-yellow-600" />
                      Поднялся на
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-yellow-600">+2</div>
                    <p className="text-xs text-muted-foreground mt-1">позиции за неделю</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-orange-200 bg-orange-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Icon name="Target" size={18} className="text-orange-600" />
                      До 3 места
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-orange-600">310</div>
                    <p className="text-xs text-muted-foreground mt-1">баллов осталось</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-purple-200 bg-purple-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Icon name="Users" size={18} className="text-purple-600" />
                      Друзей
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-purple-600">{leaderboard.length - 1}</div>
                    <p className="text-xs text-muted-foreground mt-1">в рейтинге</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-2 bg-gradient-to-br from-purple-100 to-pink-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Sparkles" size={20} className="text-purple-600" />
                    Еженедельные награды
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                      <div className="flex items-center gap-3">
                        <Icon name="Crown" size={32} className="text-yellow-500" />
                        <div>
                          <p className="font-semibold">1 место</p>
                          <p className="text-sm text-muted-foreground">Золотая корона + 500 монет</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                      <div className="flex items-center gap-3">
                        <Icon name="Award" size={32} className="text-gray-400" />
                        <div>
                          <p className="font-semibold">2-3 место</p>
                          <p className="text-sm text-muted-foreground">Серебряная медаль + 300 монет</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                      <div className="flex items-center gap-3">
                        <Icon name="Star" size={32} className="text-orange-600" />
                        <div>
                          <p className="font-semibold">4-10 место</p>
                          <p className="text-sm text-muted-foreground">Бронзовая звезда + 100 монет</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="profile" className="animate-fade-in">
            <div className="max-w-4xl mx-auto space-y-6">
              <Card className="border-2 bg-gradient-to-br from-purple-100 to-blue-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="relative">
                      <div className="w-32 h-32 text-8xl flex items-center justify-center rounded-full bg-gradient-to-br from-purple-200 to-blue-200 border-4 border-white shadow-lg">
                        {avatars.find(a => a.id === selectedAvatar)?.emoji}
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                        <span className="text-white font-bold text-lg">{userStats.level}</span>
                      </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h2 className="text-3xl font-bold mb-2">{userStats.name}</h2>
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                        <Badge className="bg-purple-600">
                          <Icon name="Zap" size={14} className="mr-1" />
                          Уровень {userStats.level}
                        </Badge>
                        <Badge className="bg-orange-500">
                          <Icon name="Star" size={14} className="mr-1" />
                          {userStats.points} баллов
                        </Badge>
                        <Badge className="bg-green-500">
                          <Icon name="Flame" size={14} className="mr-1" />
                          {userStats.streak} дней подряд
                        </Badge>
                      </div>
                      <Progress value={levelProgress} className="h-3" />
                      <p className="text-sm text-muted-foreground mt-2">
                        {userStats.nextLevelPoints - userStats.points} баллов до уровня {userStats.level + 1}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Palette" size={20} className="text-purple-600" />
                    Выбери аватар
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3">
                    {avatars.map((avatar) => (
                      <button
                        key={avatar.id}
                        onClick={() => avatar.unlocked && setSelectedAvatar(avatar.id)}
                        disabled={!avatar.unlocked}
                        className={`relative aspect-square rounded-2xl border-2 flex flex-col items-center justify-center transition-all text-4xl ${
                          avatar.unlocked
                            ? selectedAvatar === avatar.id
                              ? 'border-purple-500 bg-purple-100 scale-110 shadow-lg'
                              : 'border-gray-200 bg-white hover:border-purple-300 hover:scale-105'
                            : 'border-gray-200 bg-gray-100 opacity-50 cursor-not-allowed'
                        }`}
                      >
                        {avatar.emoji}
                        {!avatar.unlocked && (
                          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 rounded-2xl">
                            <Icon name="Lock" size={20} className="text-white mb-1" />
                            <span className="text-xs text-white font-semibold">{avatar.cost}</span>
                          </div>
                        )}
                        {selectedAvatar === avatar.id && avatar.unlocked && (
                          <div className="absolute -top-2 -right-2">
                            <Icon name="CheckCircle2" size={20} className="text-purple-600 bg-white rounded-full" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border-2 border-purple-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                      <Icon name="Dumbbell" size={18} className="text-purple-600" />
                      Всего тренировок
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-purple-600">{userStats.completedWorkouts}</div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-orange-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                      <Icon name="GraduationCap" size={18} className="text-orange-600" />
                      Уроков пройдено
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-orange-600">
                      {financeLessons.filter(l => l.completed).length}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-green-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                      <Icon name="Award" size={18} className="text-green-600" />
                      Достижений
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600">
                      {achievements.filter(a => a.unlocked).length}/{achievements.length}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Settings" size={20} className="text-purple-600" />
                    Настройки профиля
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                    <div>
                      <p className="font-medium">Имя пользователя</p>
                      <p className="text-sm text-muted-foreground">Как тебя называть в приложении</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Icon name="Edit" className="mr-2" size={16} />
                      Изменить
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                    <div>
                      <p className="font-medium">Уведомления о тренировках</p>
                      <p className="text-sm text-muted-foreground">Напоминания каждое утро</p>
                    </div>
                    <Button variant="outline" size="sm" className="bg-green-100 text-green-600 border-green-600">
                      <Icon name="Check" className="mr-2" size={16} />
                      Включено
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                    <div>
                      <p className="font-medium">Звуковые эффекты</p>
                      <p className="text-sm text-muted-foreground">Музыка и звуки в приложении</p>
                    </div>
                    <Button variant="outline" size="sm" className="bg-green-100 text-green-600 border-green-600">
                      <Icon name="Check" className="mr-2" size={16} />
                      Включено
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                    <div>
                      <p className="font-medium">Язык приложения</p>
                      <p className="text-sm text-muted-foreground">Выбери удобный язык</p>
                    </div>
                    <select className="px-4 py-2 rounded-lg border-2">
                      <option selected>Русский</option>
                      <option>English</option>
                    </select>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="wallet" className="animate-fade-in">
            <div className="max-w-4xl mx-auto space-y-6">
              <Card className="border-2 bg-gradient-to-br from-green-100 to-emerald-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Icon name="Wallet" size={28} className="text-green-600" />
                    Мой кошелёк
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <p className="text-sm text-muted-foreground mb-2">Баланс</p>
                    <div className="text-6xl font-bold text-green-600 mb-4">{walletBalance} ₽</div>
                    <div className="flex items-center justify-center gap-2 text-orange-500 font-semibold">
                      <Icon name="Coins" size={24} />
                      <span className="text-xl">{userStats.points} монет</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Icon name="ArrowDownToLine" className="mr-2" size={18} />
                      Пополнить
                    </Button>
                    <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                      <Icon name="History" className="mr-2" size={18} />
                      История
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingUp" size={20} className="text-purple-600" />
                    Последние операции
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { id: 1, title: 'Награда за тренировку', amount: 50, type: 'income', icon: 'Plus', date: 'Сегодня' },
                      { id: 2, title: 'Покупка аватара', amount: -100, type: 'expense', icon: 'Minus', date: 'Вчера' },
                      { id: 3, title: 'Бонус за серию', amount: 150, type: 'income', icon: 'Plus', date: '2 дня назад' },
                      { id: 4, title: 'Новая тема', amount: -75, type: 'expense', icon: 'Minus', date: '3 дня назад' },
                    ].map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
                          }`}>
                            <Icon 
                              name={transaction.icon} 
                              size={20} 
                              className={transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}
                            />
                          </div>
                          <div>
                            <p className="font-medium">{transaction.title}</p>
                            <p className="text-sm text-muted-foreground">{transaction.date}</p>
                          </div>
                        </div>
                        <div className={`font-bold ${
                          transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {transaction.amount > 0 ? '+' : ''}{transaction.amount} ₽
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-purple-100 to-blue-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Target" size={20} className="text-purple-600" />
                    Финансовая цель
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-lg">Новый велосипед</p>
                        <p className="text-sm text-muted-foreground">Накоплено 1250 из 3000 ₽</p>
                      </div>
                      <Icon name="Bike" size={32} className="text-purple-600" />
                    </div>
                    <Progress value={42} className="h-3" />
                    <p className="text-sm text-muted-foreground">Осталось накопить 1750 ₽</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="parental" className="animate-fade-in">
            <div className="max-w-4xl mx-auto">
              {!isParentMode ? (
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Lock" size={24} className="text-purple-600" />
                      Родительский контроль
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="max-w-md mx-auto py-8">
                      <p className="text-center text-muted-foreground mb-6">
                        Введите PIN-код для доступа к настройкам
                      </p>
                      <div className="space-y-4">
                        <input
                          type="password"
                          placeholder="Введите PIN"
                          maxLength={4}
                          value={parentalPin}
                          onChange={(e) => setParentalPin(e.target.value)}
                          className="w-full px-4 py-3 text-center text-2xl tracking-widest rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                        <Button 
                          className="w-full bg-purple-600 hover:bg-purple-700"
                          onClick={() => {
                            if (parentalPin === '1234') {
                              setIsParentMode(true);
                              setParentalPin('');
                            }
                          }}
                        >
                          <Icon name="Unlock" className="mr-2" size={18} />
                          Войти
                        </Button>
                        <p className="text-xs text-center text-muted-foreground">
                          Демо PIN: 1234
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Панель родителя</h2>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsParentMode(false)}
                    >
                      <Icon name="LogOut" className="mr-2" size={18} />
                      Выйти
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="border-2 border-blue-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Время в приложении</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold text-blue-600">2ч 15м</div>
                        <p className="text-xs text-muted-foreground mt-1">сегодня</p>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-green-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Тренировок за неделю</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold text-green-600">12</div>
                        <p className="text-xs text-muted-foreground mt-1">+3 к прошлой</p>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-orange-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Заработано монет</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold text-orange-600">840</div>
                        <p className="text-xs text-muted-foreground mt-1">за неделю</p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="Settings" size={20} className="text-purple-600" />
                        Настройки
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                        <div>
                          <p className="font-medium">Ежедневный лимит времени</p>
                          <p className="text-sm text-muted-foreground">Максимальное время в приложении</p>
                        </div>
                        <select className="px-4 py-2 rounded-lg border-2">
                          <option>1 час</option>
                          <option>2 часа</option>
                          <option selected>3 часа</option>
                          <option>Без ограничений</option>
                        </select>
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                        <div>
                          <p className="font-medium">Минимум тренировок в день</p>
                          <p className="text-sm text-muted-foreground">Рекомендуемое количество</p>
                        </div>
                        <select className="px-4 py-2 rounded-lg border-2">
                          <option selected>1 тренировка</option>
                          <option>2 тренировки</option>
                          <option>3 тренировки</option>
                        </select>
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                        <div>
                          <p className="font-medium">Уведомления родителям</p>
                          <p className="text-sm text-muted-foreground">О достижениях и прогрессе</p>
                        </div>
                        <Button variant="outline" className="bg-green-100 text-green-600 border-green-600">
                          <Icon name="Check" className="mr-2" size={16} />
                          Включено
                        </Button>
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                        <div>
                          <p className="font-medium">Лимит расходов</p>
                          <p className="text-sm text-muted-foreground">Максимальная сумма трат в день</p>
                        </div>
                        <select className="px-4 py-2 rounded-lg border-2">
                          <option>50 ₽</option>
                          <option selected>100 ₽</option>
                          <option>200 ₽</option>
                          <option>Без ограничений</option>
                        </select>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="Activity" size={20} className="text-purple-600" />
                        Активность за неделю
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          { day: 'Понедельник', workouts: 2, time: '35 мин' },
                          { day: 'Вторник', workouts: 1, time: '20 мин' },
                          { day: 'Среда', workouts: 2, time: '40 мин' },
                          { day: 'Четверг', workouts: 3, time: '55 мин' },
                          { day: 'Пятница', workouts: 2, time: '30 мин' },
                          { day: 'Суббота', workouts: 1, time: '15 мин' },
                          { day: 'Воскресенье', workouts: 1, time: '20 мин' },
                        ].map((day, idx) => (
                          <div key={idx} className="flex items-center gap-4">
                            <div className="w-28 font-medium text-sm">{day.day}</div>
                            <div className="flex-1">
                              <Progress value={(day.workouts / 3) * 100} className="h-2" />
                            </div>
                            <div className="text-sm text-muted-foreground w-24 text-right">
                              {day.workouts} • {day.time}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;