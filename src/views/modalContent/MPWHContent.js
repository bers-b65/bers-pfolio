import { Banner } from "flowbite-react";
import { IoCaretDown } from "react-icons/io5";

import mpwh from "../../assets/images/mpwh.gif";
import iconJava from "../../assets/images/icon-java-100p.png";
import iconVanillaJS from "../../assets/images/icon-vanillajs-100p.png";
import iconReactNative from "../../assets/images/icon-react-native-100p.png";
import iconPython from "../../assets/images/icon-python-100p.png";
import iconSQL from "../../assets/images/icon-sql-100p.png";

function MPWHContent() {
  return (
    <>
      <div className="flex justify-around text-center mt-6">      
        <div className="mt-3">
          <h2 className="text-5xl font-bold">MPWareHouse</h2>
          <h3 className="mt-4 text-xl font-medium">Начало разработки: <b className="font-normal">2025 г.</b></h3>        
          <h3 className="mt-6 mb-3 text-xl font-medium">Краткое описание проекта:</h3>
          <p>Данное программное решение позволит сотрудникам склада оперативно получать актуальные (и<br />
            немаловажно – из одного источника) данные, необходимые для своевременной подготовки к отгрузкам<br />
            заказов и поставок во все маркетплейсы, при этом с заметной экономией времени — и наиболее ощутимой,<br />
            когда у компании суммарно заведено большое число кабинетов/магазинов на маркетплейсах, и как нередко<br />
            бывает, договора с ними заключены через несколько организаций или ИП, а еще и по различным моделям/схемам<br />
            взаимодействия. То есть, даже при таком раскладе, описанном выше – всё, что необходимо складу для полноценного взаимодействия с маркетплейсами (сборочные листы, подтверждение готовности заказов,<br />
            формирование и проверка отгрузочных документов и т.д.) всегда будет под рукой – т.е. в одном месте и с <br />
            максимальным удобством использования, т.к. предназначается прежде всего для запуска прямо на ТСД или в<br />
            любом смартфоне (на операционных системах Android и iOS).
          </p><br />
          <p><b>На данном этапе информация о проекте лимитирована ради сохранения конфиденциальности.</b> <br />
          MVP-версия клиента для ТСД написана на Java с использованием Web-технологий, а для более новых<br />
          смартфонов (для операционных систем iOS и версий Android выше 6-ой) – на React Native (JavaScript). </p>
          <h3 className="mt-6 mb-3 text-xl font-medium">Используемые в проекте языки, фреймворки, технологии:</h3>
          <Banner className="p-2 gap-4 flex justify-evenly bg-slate-600 border rounded-3xl border-slate-300">
            <a target="_blank" rel="noopener noreferrer" href="https://www.java.com/ru/">
              <img src={iconJava} width="65" height="65" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.w3.org/wiki/Javascript">
              <img src={iconVanillaJS} width="65" height="65" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://reactnative.dev/">
              <img src={iconReactNative} width="65" height="65" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.python.org/">
              <img src={iconPython} width="65" height="65" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://dev.mysql.com/doc/refman/8.4/en/sql-statements.html">
              <img src={iconSQL} width="65" height="65" />
            </a>
          </Banner>
        </div>
        <div>
          <img src={mpwh} className="ml-2 mt-8"/>
        </div>
      </div>
    </>
    
    );
  }
  export default MPWHContent; 