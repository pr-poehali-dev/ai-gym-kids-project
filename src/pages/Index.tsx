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

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

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
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="dashboard" className="text-base">
              <Icon name="LayoutDashboard" className="mr-2" size={18} />
              Главная
            </TabsTrigger>
            <TabsTrigger value="workouts" className="text-base">
              <Icon name="Dumbbell" className="mr-2" size={18} />
              Тренировки
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
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
