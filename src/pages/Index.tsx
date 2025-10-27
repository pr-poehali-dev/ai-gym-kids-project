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

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [walletBalance, setWalletBalance] = useState(1250);
  const [parentalPin, setParentalPin] = useState('');
  const [isParentMode, setIsParentMode] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);

  const userStats = {
    name: 'Маша',
    level: 12,
    points: 2840,
    nextLevelPoints: 3000,
    streak: 7,
    completedWorkouts: 45,
  };

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
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-6">
            <TabsTrigger value="dashboard" className="text-sm lg:text-base">
              <Icon name="LayoutDashboard" className="mr-1 lg:mr-2" size={18} />
              Главная
            </TabsTrigger>
            <TabsTrigger value="workouts" className="text-sm lg:text-base">
              <Icon name="Dumbbell" className="mr-1 lg:mr-2" size={18} />
              Тренировки
            </TabsTrigger>
            <TabsTrigger value="camera" className="text-sm lg:text-base">
              <Icon name="Camera" className="mr-1 lg:mr-2" size={18} />
              ИИ-тренер
            </TabsTrigger>
            <TabsTrigger value="lessons" className="text-sm lg:text-base">
              <Icon name="GraduationCap" className="mr-1 lg:mr-2" size={18} />
              Уроки
            </TabsTrigger>
            <TabsTrigger value="wallet" className="text-sm lg:text-base">
              <Icon name="Wallet" className="mr-1 lg:mr-2" size={18} />
              Кошелёк
            </TabsTrigger>
            <TabsTrigger value="parental" className="text-sm lg:text-base">
              <Icon name="Shield" className="mr-1 lg:mr-2" size={18} />
              Родители
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