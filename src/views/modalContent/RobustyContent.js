import { Banner } from "flowbite-react";
import { IoCaretDown } from "react-icons/io5";

import robusty from "../../assets/images/robusty.gif";
import iconVanillaJS from "../../assets/images/icon-vanillajs-100p.png";
import iconReact from "../../assets/images/icon-react-100p.png";
import iconPython from "../../assets/images/icon-python-100p.png";
import iconFlowbiteReact from "../../assets/images/icon-flowbite-react-100p.png";
import iconElectron from "../../assets/images/icon-electron-100p.png";
import iconMathJS from "../../assets/images/icon-mathjs-100p.png";
import iconTailwind from "../../assets/images/icon-tailwind-100p.png";
import iconAxios from "../../assets/images/icon-axios-100p.png";
import robustyAdditionalFirst from "../../assets/images/robusty-additional-first.gif";
import robustyAdditionalSecond from "../../assets/images/robusty-additional-second.gif";
import robustyAdditionalThird from "../../assets/images/robusty-additional-third.gif";
import robustyAdditionalFourth from "../../assets/images/robusty-additional-fourth.gif";


function RobustyContent() {
  return (
    <>
      <div className="flex justify-around text-center mt-8">
        <div>
          <img src={robusty}  width="700" height="700"/>
        </div>
        <div className="mt-3">
          <h2 className="text-5xl font-bold">ROBUSTY</h2>
          <h3 className="mt-6 text-xl font-medium">Начало разработки: <b className="font-normal">2024 г.</b></h3>        
          <h3 className="mt-8 mb-3 text-xl font-medium">Краткое описание проекта:</h3>
          <p>Многофункциональное десктопное приложение, <br />предназначенное для мониторинга, аналитики<br /> и управления большинством аспектов<br /> деятельности коммерческой организации<br /> и функционирования бизнес-проектов.</p>
          <h3 className="mt-8 mb-3 text-xl font-medium">Используемые в проекте языки, <br />фреймворки, технологии:</h3>
          <Banner className="p-2 gap-4 flex justify-evenly bg-slate-600 border-t border-x border-b-transparent rounded-t-3xl border-slate-300">
          <a target="_blank" rel="noopener noreferrer" href="https://www.w3.org/wiki/Javascript">
              <img src={iconVanillaJS} width="65" height="65" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://react.dev/">
              <img src={iconReact} width="65" height="65" />
            </a>            
            <a target="_blank" rel="noopener noreferrer" href="https://tailwindcss.com/">
              <img src={iconTailwind} width="65" height="65" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://flowbite-react.com/">
              <img src={iconFlowbiteReact} width="65" height="65" />
            </a>
          </Banner>
          <Banner className="p-2 flex justify-evenly bg-slate-600 border border-b border-x border-t-transparent rounded-b-3xl">            
            
            <a target="_blank" rel="noopener noreferrer" href="https://axios-http.com/">
              <img src={iconAxios} width="65" height="65" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://mathjs.org/">
              <img src={iconMathJS} width="65" height="65" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.python.org/">
              <img src={iconPython} width="65" height="65" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.electronjs.org/ru/">
              <img src={iconElectron} width="65" height="65" />
            </a>
          </Banner>
          <div className="mt-6 flex justify-center text-gray-700 animate-bounce"><IoCaretDown size={22}/><IoCaretDown size={22}/><IoCaretDown size={22}/></div>
        </div>
      </div>
      <div className="text-left mt-20">
        <h3 className="mb-3 text-xl font-medium">Краткая история проекта (в дополнение к описанию выше):</h3>
        <p>Данная разработка мотивирована, во-первых, потребностью в закреплении знаний и умений, сведéния в одно целое множества освоенного мною при карьерном росте для более простого написания подобного приложения или же отдельных его компонентов в качестве самостоятельных приложений при такой необходимости в будущем. А во-вторых, разработанное приложение впоследствии станет полноценным коммерческим продуктом.</p>
        <p className="mt-3">Изначально, "десктопизация" самого приложения планировалась путём задействования фреймворка NW.js, однако, изучив альтернативные варианты, проект был перенесён сначала на neuJS (neutralino), а уже после окончательного переосмысления концепции, для цели создания десктопного приложения мною было решено использовать Electron благодаря значительно более широким возможностям оптимизации. В результате, последние двое из перечисленных вариантов продолжают существовать на стадиях разработки и тестирования.</p>
        <h3 className="mt-6 text-xl font-medium">Больше визуального контента из последней версии проекта:</h3>
        <div className="mt-6 flex justify-center">
          <img src={robustyAdditionalFirst} />
        </div>
        <h4 className="mt-4 text-lg font-semibold text-center">1/4. Интерфейс добавления нового проекта</h4>
        <div className="mt-6 flex justify-center">
          <img src={robustyAdditionalSecond} />
        </div>
        <h4 className="mt-4 text-lg font-semibold text-center">2/4. Внутри одного из типов проектов (ресурсо-монетизация).</h4>
        <div className="mt-6 flex justify-center">
          <img src={robustyAdditionalThird} />
        </div>
        <h4 className="mt-4 text-lg font-semibold text-center">3/4. Демонстрация одного из инструментов (для моделирования и прогнозирования данных)</h4>
        <div className="mt-6 flex justify-center">
          <img src={robustyAdditionalFourth} />
        </div>
        <h4 className="mt-4 text-lg font-semibold text-center">4/4. Внутреннее мини-приложение "Задачи"</h4>
      </div>
    </>
    );
  }
  export default RobustyContent; 