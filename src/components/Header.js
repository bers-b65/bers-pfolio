import photo from "../assets/images/photo1.png";

function Header() {
    return (
        <div className="inline-flex h-96 w-full justify-center items-center">
            <img src={photo} width="200" height="200" />
            <div className="ml-10">
                <h1 className="text-4xl text-white text-center align-middle">
                    Персональное портфолио
                    <br />
                    Бориса Селезнева
                </h1>
                <h2 className="mt-8 text-xl text-center align-middle text-gray-300">
                    Веб-разработчик | Аналитик данных
                </h2>
            </div>
        </div>
    );
}

export default Header;