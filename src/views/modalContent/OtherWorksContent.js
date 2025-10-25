import { Carousel } from "flowbite-react";

import ainv from "../../assets/images/ainv.gif";
import cryptodon from "../../assets/images/cryptodon.png";
import lnch from "../../assets/images/lnch.png";
import ics from "../../assets/images/ics.gif";
import iansh from "../../assets/images/iansh.gif";
import finai from "../../assets/images/finai.gif";

function OtherWorksContent() {
    return (
        <>
            <h1 className="text-center text-3xl mt-2 font-semibold">Некоторые из моих прочих работ</h1>
            <h2 className="text-center text-xl mb-2 font-medium">(краткая демонстрация по слайдам)</h2>
            <div className="h-150">
                <Carousel indicators={false} slide={false}>
                    <div>
                        <div className="flex justify-center">
                            <img src={ainv} width="940" height="550" />
                        </div>
                        <p className="mt-2 text-center"><b className="text-lg">1/5.</b> – Лендинг "AINV.TECH" (название и логотип проекта изменены ради конфиденциальности)<br />для заказчика на зарубежной фриланс-площадке LaborX</p>
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <img src={ics} width="995" height="560" />
                        </div>
                        <p className="mt-2 text-center"><b className="text-lg">2/5.</b> – Лендинг "ICS" (название и логотип проекта изменены ради конфиденциальности) для заказчика на фриланс-площадке</p>
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <img src={cryptodon} width="995" height="560" />
                        </div>
                        <p className="mt-2 text-center"><b className="text-lg">3/5.</b> – Модальные окна с приемом криптовалюты для заказчика на зарубежной фриланс-площадке LaborX</p>
                    </div>                    
                    <div>
                        <div className="flex justify-center">
                            <img src={finai} width="995" height="560" />
                        </div>
                        <p className="mt-6 text-center"><b className="text-lg">4/5.</b> – Разработка и тестирование алгоритма для персонального продвижения <br />пользователям инвестиционной платформы релевантных активов по заданным условиям <br />(например, "наибольшая ликвидность, высокая прибыльность  и умеренная волатильность"; на основе исторических данных)</p>
                    </div>                    
                    <div>
                        <div className="flex justify-center">
                            <img src={iansh} width="545" />
                        </div>
                        <p className="mt-2 text-center"><b className="text-lg">5/5.</b> – Образовательный сайт с обучающими статьями "In-a-Nutshell" <br />(название и логотип проекта изменены ради конфиденциальности) для заказчика на фриланс-площадке</p>
                    </div>
                </Carousel>
            </div>
        </>
    );
}
export default OtherWorksContent;