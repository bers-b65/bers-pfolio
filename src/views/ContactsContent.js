
import { useState } from "react";
import { Card, Button, Modal } from "flowbite-react";
import copy from 'copy-to-clipboard';

import { FaTelegramPlane, FaAddressCard } from "react-icons/fa";
import { RiMailSendFill, RiFileCopy2Line, RiMailAddFill } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
import { IoChatboxEllipses, IoCall, IoMail, IoAlertCircle, IoOpenOutline} from "react-icons/io5";

function ContactsContent() {
  const [openAlertModal, setOpenAlertModal] = useState(false);
  const [alertModalNum, setAlertModalNum] = useState(false); const [alertModalTg, setAlertModalTg] = useState(false); const [alertModalEmail, setAlertModalEmail] = useState(false); const selectAlertModalNum = () => { setAlertModalNum(true); setAlertModalTg(false); setAlertModalEmail(false); }; const selectAlertModalTg = () => { setAlertModalTg(true); setAlertModalNum(false); setAlertModalEmail(false); }; const selectAlertModalEmail = () => { setAlertModalEmail(true); setAlertModalNum(false); setAlertModalTg(false); };
  const copyNum = (event) => { event.preventDefault(); copy('+79995549980'); selectAlertModalNum(); setOpenAlertModal(true); };  const copyTg = (event) => { event.preventDefault(); copy('@bers_b65'); selectAlertModalTg(); setOpenAlertModal(true); };  const copyEmail = (event) => { event.preventDefault(); copy('bers.b65@yandex.ru'); selectAlertModalEmail(); setOpenAlertModal(true); };
  const callNum = (event) => { event.preventDefault(); window.open('tel:+79995549980', '_blank') }; const openTg = (event) => { event.preventDefault(); window.open('https://t.me/bers_b65', '_blank') }; const newEmail = (event) => { event.preventDefault(); window.open('mailto:bers.b65@yandex.ru', '_blank') };
  const handleSubmit = (event) => { event.preventDefault(); const url = `https://api.telegram.org/bot7059486272:AAFcNoIJr3JFdFv6I0uuJ5dwuU2kXYC8NoA/sendMessage?chat_id=1048773444&text=${event.target.name.value + ' ' +  event.target.message.value}`; const xht = new XMLHttpRequest(); xht.open("GET", url); xht.send(); setAlertModalTg(false); setAlertModalNum(false); setAlertModalEmail(false); setOpenAlertModal(true); }


  return (
    <>
      <div className="bg-slate-500 w-5/6 rounded-b-2xl p-6 border-b-8 border-r-8 border-black">
        <div className="flex flex-row gap-4 text-gray-900">
          <Card className="bg-slate-200 w-full flex flex-col">
            <div className="flex flex-row text-xl my-4 font-semibold">
              <IoChatboxEllipses size={30} className="mr-3" />
              Форма для обратной связи
            </div>
            <form onSubmit={handleSubmit} autocomplete="off" className="flex w-full flex-col gap-2">
              <div>
                <input className="w-full bg-gray-300 rounded-lg placeholder:text-gray-700 text-gray-900 border-0" id="name" name="name" type="text" placeholder="Укажите здесь ваше имя и средство связи (например: Иван, +79123456789)" required />
              </div>
              <div>
              <textarea className="w-full bg-gray-300 rounded-lg placeholder:text-gray-700 text-gray-900 border-0" id="message" name="message" placeholder="Оставьте в этом поле ваше сообщение для меня" required rows={3} />
              </div>
              <Button className="flex justify-center bg-slate-600 text-gray-200 border-gray-400 hover:enabled:bg-slate-700" type="submit">
                <RiMailSendFill size={18} className="mr-3"/>
                Отправить сообщение
              </Button>
            </form>
          </Card>
          <Card className="bg-slate-200 w-full h-88 flex flex-col">
            <div className="flex flex-row text-xl my-4 font-semibold">
              <FaAddressCard size={30} className="mr-3" />
              Основные контактные данные
            </div>
            <div className="flex flex-row items-center">
            <IoCall size={25} className="mr-3"/>
              <input className="w-3/6 bg-gray-200 rounded-l-lg text-gray-900 border-r" disabled type="text" value="Номер телефона:" />
              <input className="w-3/6 mr-3 text-right bg-gray-400 rounded-r-lg text-black border-l" disabled type="text" value="+79995549980" />
              <Button className="mr-1 bg-slate-600 text-gray-200 border-gray-400 hover:enabled:bg-slate-700"onClick={copyNum}>
                <RiFileCopy2Line size={18 }/>              
              </Button>
              <Button className="bg-slate-600 text-gray-200 border-gray-400 hover:enabled:bg-slate-700" onClick={callNum}>
                <IoMdCall size={18 }/>
              </Button>
            </div>
            <div className="flex flex-row items-center">
              <FaTelegramPlane size={25} className="mr-3"/>
              <input className="w-3/6 bg-gray-200 rounded-l-lg text-gray-900 border-r" disabled type="text" value="Telegram:" />
              <input className="w-3/6 mr-3 text-right bg-gray-400 rounded-r-lg text-black border-l" disabled type="text" value="@bers_b65" />
              <Button className="mr-1 bg-slate-600 text-gray-200 border-gray-400 hover:enabled:bg-slate-700" onClick={copyTg}>
                <RiFileCopy2Line size={18 }/>
              </Button>
              <Button className="bg-slate-600 text-gray-200 border-gray-400 hover:enabled:bg-slate-700" onClick={openTg}>
                <IoOpenOutline size={18 }/>              
              </Button>
            </div>
            <div className="flex flex-row items-center">
              <IoMail size={25} className="mr-3"/>
              <input className="w-3/6 bg-gray-200 rounded-l-lg text-gray-900 border-r" disabled type="text" value="E-mail:" />
              <input className="w-3/6 mr-3 text-right bg-gray-400 rounded-r-lg text-black border-l" disabled type="text" value="bers.b65@yandex.ru" />
              <Button className="mr-1 bg-slate-600 text-gray-200 border-gray-400 hover:enabled:bg-slate-700" onClick={copyEmail}>
                <RiFileCopy2Line size={18 }/>
              </Button>
              <Button className="bg-slate-600 text-gray-200 border-gray-400 hover:enabled:bg-slate-700" onClick={newEmail}>
                <RiMailAddFill size={18 }/>
              </Button>
            </div>
          </Card>
        </div>
      </div>
      <Modal show={openAlertModal} onClose={() => setOpenAlertModal(false)} size="lg">        
        <Modal.Body id="modal-body-area" className="rounded-t-2xl bg-slate-200 flex items-center justify-center text-center text-lg">
          <IoAlertCircle size={90} className="mr-10" />
          { alertModalNum ? 'Номер телефона' : alertModalTg ? `Юзернейм в Telegram'e` : alertModalEmail ? 'Адрес электронной почты' : (null) } 
          { (alertModalNum || alertModalTg || alertModalEmail) ? (<><br />скопирован в буфер обмена!</>) : (<> Ваше сообщение <br />отправлено!</>)}        
        </Modal.Body>
        <Modal.Footer className="bg-slate-500 border-none flex justify-center">
          <Button onClick={() => setOpenAlertModal(false)} className="px-16 bg-slate-400 text-gray-900 border border-gray-600 hover:enabled:bg-slate-300 hover:enabled:text-gray-900 hover:enabled:border-gray-400">
            ОК
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
  }

  export default ContactsContent;