import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  const services = [
    {
      title: 'Классическая стрижка',
      description: 'Мужская стрижка с укладкой',
      price: '1500 ₽',
      features: ['Консультация мастера', 'Мытье головы', 'Укладка', 'Финальная коррекция']
    },
    {
      title: 'Стрижка + борода',
      description: 'Комплексный уход',
      price: '2200 ₽',
      features: ['Стрижка', 'Оформление бороды', 'Горячее полотенце', 'Уход за кожей']
    },
    {
      title: 'Премиум',
      description: 'Полный комплекс услуг',
      price: '3500 ₽',
      features: ['Стрижка + борода', 'SPA-процедуры', 'Массаж головы', 'Премиум косметика']
    }
  ];

  const reviews = [
    {
      name: 'Алексей Петров',
      rating: 5,
      text: 'Отличный барбершоп! Мастера знают своё дело. Хожу уже полгода, всегда доволен результатом.',
      image: 'https://cdn.poehali.dev/projects/ec14d7de-9385-49ca-8dc7-92ae1ee22d2d/files/58cb676c-63fd-47c4-bac1-9bf433f8be0d.jpg'
    },
    {
      name: 'Дмитрий Соколов',
      rating: 5,
      text: 'Профессиональный подход, приятная атмосфера. Стрижка выполнена безупречно. Рекомендую!',
      image: 'https://cdn.poehali.dev/projects/ec14d7de-9385-49ca-8dc7-92ae1ee22d2d/files/58cb676c-63fd-47c4-bac1-9bf433f8be0d.jpg'
    },
    {
      name: 'Михаил Иванов',
      rating: 5,
      text: 'Лучший барбершоп в городе. Чистота, качество, внимание к деталям - всё на высшем уровне.',
      image: 'https://cdn.poehali.dev/projects/ec14d7de-9385-49ca-8dc7-92ae1ee22d2d/files/58cb676c-63fd-47c4-bac1-9bf433f8be0d.jpg'
    }
  ];

  const faqs = [
    {
      question: 'Нужна ли предварительная запись?',
      answer: 'Да, мы работаем по предварительной записи. Это гарантирует, что мастер будет ждать именно вас в удобное время. Записаться можно через форму на сайте, по телефону или в соцсетях.'
    },
    {
      question: 'Сколько времени занимает стрижка?',
      answer: 'Классическая стрижка занимает около 45 минут, комплекс "стрижка + борода" - около 1 часа, премиум-услуга - 1.5 часа. Точное время зависит от сложности работы.'
    },
    {
      question: 'Какие способы оплаты вы принимаете?',
      answer: 'Мы принимаем оплату наличными, банковскими картами, а также через СБП (Систему быстрых платежей).'
    },
    {
      question: 'Можно ли отменить или перенести запись?',
      answer: 'Да, вы можете отменить или перенести запись, предупредив нас минимум за 3 часа до назначенного времени.'
    },
    {
      question: 'Предоставляете ли вы услуги детям?',
      answer: 'Да, мы работаем с клиентами любого возраста. Для детей до 12 лет действуют специальные цены.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-accent/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <Icon name="Scissors" className="text-accent" size={32} />
              <span className="text-2xl font-bold text-primary-foreground">BARBER</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-primary-foreground hover:text-accent transition-colors">О нас</a>
              <a href="#benefits" className="text-primary-foreground hover:text-accent transition-colors">Преимущества</a>
              <a href="#services" className="text-primary-foreground hover:text-accent transition-colors">Услуги</a>
              <a href="#reviews" className="text-primary-foreground hover:text-accent transition-colors">Отзывы</a>
              <a href="#contact" className="text-primary-foreground hover:text-accent transition-colors">Контакты</a>
            </nav>

            <Button asChild className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="#contact">Записаться</a>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/ec14d7de-9385-49ca-8dc7-92ae1ee22d2d/files/30d1bc72-81db-4c10-b84f-4eb2cf584379.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Стиль, который говорит за вас
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Профессиональные стрижки и уход за бородой в премиальной атмосфере
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg h-14 px-8">
              <a href="#contact">Записаться онлайн</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg h-14 px-8 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="#services">Наши услуги</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">О барбершопе BARBER</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Мы создаём не просто стрижки — мы создаём образы. Наши мастера с многолетним опытом помогут вам найти свой уникальный стиль. 
              Используем только профессиональную косметику и современное оборудование.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Барбершоп BARBER — это место, где сочетаются традиции классического мужского ухода и современные тренды. 
              Мы ценим время наших клиентов и гарантируем индивидуальный подход к каждому.
            </p>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Почему выбирают нас</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'Award',
                title: 'Опытные мастера',
                description: 'Барберы с сертификатами и стажем от 5 лет'
              },
              {
                icon: 'Sparkles',
                title: 'Премиум косметика',
                description: 'Используем только профессиональные бренды'
              },
              {
                icon: 'Clock',
                title: 'Без очередей',
                description: 'Работаем строго по записи, цените своё время'
              },
              {
                icon: 'ThumbsUp',
                title: 'Гарантия качества',
                description: 'Бесплатная коррекция в течение недели'
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center border-2 hover:border-accent transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name={benefit.icon as any} className="text-accent" size={32} />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Выберите подходящий вариант</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col border-2 hover:border-accent transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-4xl font-bold text-accent mb-6">{service.price}</div>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Icon name="Check" className="text-accent mr-2 flex-shrink-0 mt-0.5" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <a href="#contact">Записаться</a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Отзывы клиентов</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <img 
                      src={review.image} 
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <div className="flex mt-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" className="text-accent fill-accent" size={16} />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Записаться на стрижку</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Заполните форму, и мы свяжемся с вами для подтверждения записи
            </p>
            
            <Card className="border-2">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input 
                      type="tel"
                      placeholder="+7 (999) 123-45-67" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Услуга</label>
                    <Input 
                      placeholder="Классическая стрижка" 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Комментарий</label>
                    <Textarea 
                      placeholder="Укажите предпочтительное время и дату" 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full h-12 text-lg bg-accent hover:bg-accent/90 text-accent-foreground">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Частые вопросы</h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-lg font-medium hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Scissors" className="text-accent" size={28} />
                <span className="text-2xl font-bold">BARBER</span>
              </div>
              <p className="text-primary-foreground/80">
                Профессиональный барбершоп в центре города
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-primary-foreground/80">
                <div className="flex items-center">
                  <Icon name="Phone" size={18} className="mr-2" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={18} className="mr-2" />
                  <span>info@barber.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={18} className="mr-2" />
                  <span>Москва, ул. Тверская, 10</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Мы в соцсетях</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-accent transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  <Icon name="Send" size={24} />
                </a>
              </div>
              <div className="mt-4">
                <p className="text-sm text-primary-foreground/80">Пн-Вс: 10:00 - 22:00</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-primary-foreground/60 text-sm">
                © 2024 BARBER. Все права защищены.
              </p>
              <nav className="flex space-x-6 mt-4 md:mt-0">
                <a href="#about" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">О нас</a>
                <a href="#services" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">Услуги</a>
                <a href="#contact" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">Контакты</a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
