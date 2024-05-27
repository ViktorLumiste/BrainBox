import React from "react";

const RuHinnakiri = () => {
    return (
        <div>
            <h2>ПРЕЙСКУРАНТ</h2>
            <p><b>За минимальный объем перевода мы принимаем 0,5 страницы. К указанной стоимости письменного перевода,
                приведенной из расчета на 1 стандартную страницу, добавляется налог с оборота (22%).</b></p>
            <p><b>При наличии электронной версии текста его объем легко определяется с помощью Microsoft Word.
                Воспользуйтесь функцией Tools > Word > Count Characters with spaces.
                Разделив полученное количество знаков на 1800, вы узнаете, сколько страниц насчитывается в вашем тексте
                для перевода. Окончательный объем рассчитывается на основании готового переведенного текста.</b></p>
            <ul>
                <li>В соответствии с унифицированными европейскими нормами, за стандартную страницу принимается текст
                    объемом в 1800 печатных знаков вместе с пробелами, или 30 строк по 60 знаков в каждой.
                </li>
                <li>Стоимость устного перевода указывается из расчета 1 час = 60 минут.</li>
                <li>Приведенная стоимость верстки/форматирования указана из расчета на 1 страницу формата 1 A4.</li>
            </ul>
        </div>
    );
};

export default RuHinnakiri;