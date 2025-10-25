import { Card } from "flowbite-react";
import { FaChartBar, FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { BsFileRichtext } from "react-icons/bs";

function SkillsContent() {
  
  return (
    <div className="bg-slate-700 w-5/6 rounded-b-2xl p-6 border-b-8 border-r-8 border-black">
      <div className="flex flex-row gap-4 text-gray-900">
        <Card className="bg-slate-200 w-full h-88 flex flex-col">
          <div className="flex flex-row text-xl my-4 font-semibold">
            <FaCode size={30} className="mr-3" />
            IT-разработка, программирование
          </div>
          <p className="text-black text-base">Вот уже более 7 лет я занимаюсь созданием как простых сайтов-лендингов, так и многофункциональных приложений для большинства платформ и ОС (в основном: Web, Windows и Android) самостоятельно и по требованиям заказчиков.</p>
          <p className="text-gray-800 italic text-sm">Моё становление в программировании началось с изучения языков <a target="_blank" rel="noopener noreferrer" className="font-medium underline text-teal-700" href="https://www.php.net/">PHP</a> и <a target="_blank" rel="noopener noreferrer" className="font-medium underline text-teal-700" href="https://www.python.org/">Python</a> (наряду с HTML, CSS и JS для вёрстки). С развитием JavaScript'а до полноценного инструмента разработки приложений любого вида сложности – я углубился в освоение множества его фреймворков, о чём подробнее можно узнать в разделе "Проекты".</p>
        </Card>
        <Card className="bg-slate-200 w-full h-88 flex flex-col">
          <div className="flex flex-row text-xl my-4 font-semibold">
            <FaChartBar size={30} className="mr-3" />
            Аналитика данных, их систематизация
          </div>
          <p className="text-black text-base">Умею искать закономерности и тенденции, моделировать объекты исследования на основе имеющихся эмпирических данных, автоматизировать необходимые для этого расчетно-вычислительные операции, применяя данные навыки в оптимизации бизнес-процессов.</p>
          <p className="text-gray-800 italic text-sm">Считаю, т.к. убежден на практике, что количественно измерить, вероятностно оценить, либо алгоритмически представить – можно практически всё, что угодно, нередко пользуясь при этом даже ограниченным числом известных фактов и исходных данных.</p>
        </Card>
       <Card className="bg-slate-200 w-full h-88 flex flex-col">
          <div className="flex flex-row text-xl my-4 font-semibold">
            <BsFileRichtext size={30} className="mr-3" />
            Контент и базовый графический дизайн
          </div>
          <p className="text-black text-base">Периодически (при наполнении контентом собственных проектов или выполнении заказов от клиентов, а также по отдельным поручениям руководства в случаях наёмной работы) мне нередко приходлось заниматься написанием текстов и статей, их улучшением и SEO-обработкой, рисованием простых баннеров и инфографик, а также созданием презентаций и прочих визуальных материалов.</p>
          <p className="text-gray-800 italic text-sm">Таким образом, всё, что касается визуализации в рамках основных моих профилей (разработка и аналитика) – мне даётся без труда.</p>
        </Card>
      </div>
    </div>
    );
  }

  export default SkillsContent;