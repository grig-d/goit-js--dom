/*
Alona  12:42 PM
@channel привет!
Сегодня стартует 7 модуль, и, как вы уже знаете, начиная с 7-й д/з ваши работы будут проверяться ментором. Общая схема вам знакома с верстки, поэтому обращу внимание буквально на несколько нюансов.
1.	Убедитесь, что вы правильно подключили скрипты (корректно прописали к ним путь) – протестируйте вашу рабочую страницу.
2.	Выполняйте задания в строгом соответствии с т/з. Во многих случаях одно и то же задание можно выполнить несколькими способами, НО: если ваш код работает, однако задание выполнено без учета т/з, ментор его не примет.
3.	Не игнорируйте доп. задания: если до дедлайна у вас еще есть время, не спешите сдать работу поскорее – посидите над доп. заданием/реализацией доп. функционала, это нужно прежде всего вам (не упускайте возможность получить фидбек от вашего ментора).
Я все так же остаюсь с вами на связи в слаке, и если по итогам проверки работы вашим ментором у вас будут возникать вопросы – смело и без стеснения мне пишите (и по другим поводам тоже :wink:).
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

Alona Dec 19th at 4:16 PM
@channel, привет!
Многие из вас на этих выходных активно работают над 7-м д/з, поэтому во избежание множественных ресабмитов обращаю внимание на самые распространенные ошибки, которые обычно допускают студенты при выполнение данной домашней работы.
1.   Разметку менять НЕЛЬЗЯ.
2.   Каждое задание выполняем в отдельно скрипте, проверяем наличие ошибок в консоли (если есть – работаем над их исправлением).
3.   В задании 1 не нужна цепочка перебирающих методов, хватит одного – не усложняйте код.
4.   И во втором, и в третьем заданиях добавление элементов в DOM должно осуществляться ЗА ОДНУ ОПЕРАЦИЮ ВСТАВКИ (обратите на это особое внимание).
5.   При выполнении заданий вместо более привычного вам цикла for отдавайте предпочтение перебирающим методам массива (это актуально как для 1-3 заданий, так и для 8-го).
6.   В задании 3 используем шаблонную строку и insertAdjacentHTML(), его решение не аналогично решению 2-го задания.
7.   Внимательно определяйте события в задании 5-7 (несмотря на то, что в т/з есть прямые подсказки, ошибок по этому поводу немало).
8.   В задании 6 бордер должен приобретать зеленый цвет, когда количество введенных символов РАВНО значению атрибута data-length (а не больше или меньше).
:tada:
1
:+1:
9
:heavy_plus_sign:
3

6 replies

Olga Konopleva  19 days ago
Можно всё таки уточнить по 3 заданию?) можно ли создать разметку через insertAdjacentHTML(), а вставить в ДОМ через append, или вставлять нужно обязательно тоже через  insertAdjacentHTML()?:thinking_face:

Yevhenii Ivanov:bulb:  19 days ago
Так инсерт же и вставляет в дом

Yevhenii Ivanov:bulb:  19 days ago
Ты указываешь в нем родительский элемент

Alona  19 days ago
@Olga Konopleva вставка в DOM должна осуществляться через insertAdjacentHTML()
:heavy_plus_sign:
4


Olya Verbetska  19 days ago
@Alona Я извиняюсь, а в третьем задании еще и файл Css создать нужно? или сделать инлайн-стилями?
Имею ввиду вот этот пункт задания "Добавь минимальное оформление галереи флексбоксами или гридами через css-классы." (edited) 




Alona  19 days ago
@Olya Verbetska оба варианта приемлемы
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Olya Verbetska Dec 14th at 5:13 PM
Хелп. Я не могу понять, какие файлы должны быть в 7й домашке.?
Один файл index.html и в нем весь html для всех заданий и отдельно файлы скрипта на  каждое задание свой?
Я просто только начинаю, и не могу понять структуру (edited) 
5 replies

Ivetta Dashkova:nerd_face:  24 days ago
верно, 1 файл с разметкой html и отдельными js файлами под каждое задание

Ivetta Dashkova:nerd_face:  24 days ago
в html внизу, перед закрытием body поключаешь каждый js-файл , примерно так
<script src=“./js/task-1.js” type=“module”></script>
        <script src=“./js/task-2.js” type=“module”></script> (edited) 
:raised_hands:
2


Olya Verbetska  24 days ago
@Ivetta Dashkova спасибо!

Ivetta Dashkova:nerd_face:  24 days ago
не забудь type=“module”, чтобы эти js-файлы друг друга не перебивали
:+1:
3


Maxim Right:squirrel:  24 days ago
@Olya Verbetska
Ну кстати можно по разному, ментор вменяемый, примет и так и этак.
Я сделал ссылочки на разные файлики хтмл, но это я делал как для себя, механики испытывал.
удобнее все держать в одном файле хтмл :hugging_face: (edited) 

*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

Olya Verbetska Dec 14th at 6:46 PM
Вопрос к тем, кто начал 1 задание 7 модуля :monkey:
Мы должны просто вывести поочередно названия категорий и количество пунктов в них для конкретного примера?
  или
написать функцию, которая будет считать количество элементов в списке (вне зависимости от списка)  и потом выводить нужные значения?
С ботом было проще)):see_no_evil:
:heavy_plus_sign:
2

18 replies

Yevhenii Ivanov:bulb:  24 days ago
Тут ты уже сама решай ) как ты хочешь )

Yevhenii Ivanov:bulb:  24 days ago
Либо делать универсально либо просто решить задачу

Olga Konopleva  24 days ago
Сделай и так и так) потренеруешься заодно)

Olya Verbetska  24 days ago
@Yevhenii Ivanov хочу конечно универсально. Но я не уверена, что мы такое уже учили.
Что передавать в такую функцию... Тут же нужен какой  то цикл. чтобы функция поэлементно перебирала список и выводила для каждого элемента списка свой message (название категории и количество элементов).
Я попробовала передать в функцию document, но консоль меня послала))
Пытаюсь сделать цикл, используя счетчик - количество элементов с атрибутом item, первый отдельно, остальные - через nextElementSibling .
Но это блин дичь какая то сложная получается))):scream_cat::joy:

Yevhenii Ivanov:bulb:  24 days ago
Делай проще
Сделай просто решение под задачу, а потом когда поймешь механику решения задачи ты сможешь правильно записать параметры функции (edited) 

Olya Verbetska  24 days ago
@Yevhenii Ivanov я под задачу сделала, вот как раз через nextElementSibling...
И у меня каждый следующий элемент li.item - это новая переменная, найденная с помощью nextElementSibling (edited) 

Yevhenii Ivanov:bulb:  24 days ago
Нет, не так nextElementSibling это метод для чтения, тобишь просто для навигации по DOM
А тебе нужен метод для вставки созданых элементов в рожительский элемент :)

Olya Verbetska  24 days ago
@Yevhenii Ivanov а зачем мне что-то вставлять?
Мы ж не делаем динамический html, а тупо лазим по существующей странице.
Разве в этом задании что-то нужно создать? (edited) 

Yevhenii Ivanov:bulb:  24 days ago
я просто забыл условие первого задания :slightly_smiling_face:
Тебе нужно получить количество элементов в ul#categories так что ты
Неверно используешь nextElementSibling он не выведет тебе все li а только соседа
Как подсказка эти методы не имеют методов массива так что их лучше не использовать

Olya Verbetska  24 days ago
@Yevhenii Ivanov 
жалко((
Я просто nextElementSibling использовала подряд, находя каждый...
буду думать дальше
Я так написала:
"use strict";
const categoryItemRef = document.querySelectorAll(".item");
console.log(categoryItemRef);
console.log(`В списке ${categoryItemRef.length} категории`);
console.log("================================================");
const categoryFirstRef = document.querySelector(".item");
const titleFirstRef = categoryFirstRef.querySelector("h2");
const numberFirstRef = categoryFirstRef.querySelectorAll("li");
console.log(
  `Категория: ${titleFirstRef.textContent}\nКоличество элементов: ${numberFirstRef.length}`
);
console.log("================================================");
const categorySecRef = categoryFirstRef.nextElementSibling;
console.log(
  `Категория: ${
    categorySecRef.querySelector("h2").textContent
  } \nКоличество элементов: ${categorySecRef.querySelectorAll("li").length}`
);
console.log("================================================");
const categoryThirdRef = categorySecRef.nextElementSibling;
console.log(
  `Категория: ${
    categoryThirdRef.querySelector("h2").textContent
  } \nКоличество элементов: ${categoryThirdRef.querySelectorAll("li").length}`
);
Раз уж удалять, так хоть тут "похвастаюсь")))
Ну оно конечно читабельней  в ВСКод было) (edited) 

Katerina  24 days ago
Если так все расписывать, то вместо nextElementSibling, можно было просто индекс использовать.

Yevhenii Ivanov:bulb:  24 days ago
Представь то у тебя список 200 штук :slightly_smiling_face:
Сколько ты будешь так писатЬ?)
Начни с малого посмотри что тебе возвращает querySelectorAll а точнее тип того что оно возвращает и подумай что можно применить )

Olya Verbetska  24 days ago
@Yevhenii Ivanov вот я это и представила, потому задала вопрос)
@Katerina натолкнула на дельную мысль)

Yevhenii Ivanov:bulb:  24 days ago
Ну индекс слабо поможет наверное

Alexander Serzhenko  24 days ago
Как говорилось выше  -
Подумай, что возвращает document.querySelectorAll()?
И не забываем, что массив имеет свойство .length, которое возвращает нам количество элементов в массиве. (edited) 

Yevhenii Ivanov:bulb:  24 days ago
Ну Алекс подсобил решил полностью )

Olya Verbetska  24 days ago
@Yevhenii Ivanov к сожалению малявка не дала посмотреть вебинар ( буду завтра утром изучать

Yevhenii Ivanov:bulb:  24 days ago
Тебе же лучше :grin:поверь )
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

Mykhaylo Lyubov Dec 16th at 2:18 PM
Сдал восьмую задачу, ментор сказал переделать, чтобы добавлять все элементы за одно действие, а не по очереди. И я вот не могу понять, как мне это сделать, ведь чтобы это осуществить, нужно новые дивы-боксы куда-то привязать (виртуально), а потом уже добавить к существующему элементу. Или я что-то не так понял?
В комментариях код, кто не делал - не открывайте :smiley: (edited) 
4 replies

Roman  22 days ago
8 ???

Mykhaylo Lyubov  22 days ago
Ну модуль 7, задание 8

Iliya Miroshnychenko  22 days ago
я делал примерно так:
создал пустой массив let boxes = [];
потом в цикле создал див const boxRef = document.createElement("div");   пуш в этот массив. и потом через .append(...boxes); создаем все одним махом
:raised_hands:
1
:+1:
1


Mykhaylo Lyubov  22 days ago
@Iliya Miroshnychenko Спасибо тебе большое) Не подумал что так было можно)
:wink:
1


*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Olga Dec 16th at 10:31 PM
Всем вечер добрый)  В третей задаче сказанно делать через insertAdjacentHTML(). А. Репета говорит с помощью этого метода не делать(. так как же быть? Получается менторы могут завернуть, если не по условию? поделитесь, как правильно поступить?
:heavy_plus_sign:
1

4 replies

Yevhenii Ivanov:bulb:  22 days ago
Делать по условию
Он просто не юзается в проектах часто но знать надо
:+1:
1


Ivetta Dashkova:nerd_face:  22 days ago
В догонку скажу еще, что условия задач, по идее, пишет сам Репета ну и менторы не заворачивают эту задачу с использованием insertAdjacentHTML() - проверено
:raised_hands:
1


Alexandra Gubar  22 days ago
Сделала сначала без Adjacent, ментор попросил добавить из-за условия задачи(хотя он и проще)
:astonished:
1
:hugging_face:
1


Maxim Right:squirrel:  22 days ago
@Olga
Добавлю, что самый кайф сделать несколькими решениями и сохранить их.
:heart_eyes:
В будущем тебе пригодятся эти наработки, уверен :raised_hands: (edited) 
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Zinaida  21 days ago
Ребят, привет.
Вопрос по второму заданию. Какой должен быть результат решения задачи?
список li привязан к #ingredients в  html ?

Screenshot_1.jpg 
Screenshot_1.jpg



Yevhenii Ivanov:bulb:  21 days ago
Да, ты в браузере должна увидеть структуру списка
:heavy_plus_sign:
2


Alexander Serzhenko  21 days ago
Там же задача создать элементы страницы по массиву внутри списка с айдишником. Так что все верно ты поняла
:heavy_plus_sign:
2


Zinaida  21 days ago
Спасибо. :heart:
Решила. Вначале  немного не правильно сделала.
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Katerina Dec 17th at 7:32 PM
Всем привет. Подскажите, что-то я не могу в пятой задаче сделать, если инпут пустой, чтобы в аутпуте оставался “незнакомец”
9 replies

Mykhaylo Lyubov  21 days ago
Нужно проверить, есть ли уже что-то в инпуте, и из этого исходить

Katerina  21 days ago
inputRef.textContent === null
    ? (outputRef.textContent = 'незнакомец')
    : (outputRef.textContent = event.target.value);

Katerina  21 days ago
так не получается, а если пустая строка, то вообще не работает

Mykhaylo Lyubov  21 days ago
Не вижу весь код
 Но я проверял event.target.value

Katerina  21 days ago
а, хорошо, попробую

Katerina  21 days ago
const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');
inputRef.addEventListener('input', handleInputChange);
function handleInputChange(event) {
  inputRef.textContent === null
    ? (outputRef.textContent = 'незнакомец')
    : (outputRef.textContent = event.target.value);
}

Melnyk Sergey  21 days ago
const inputRef=document.querySelector('#name-input');
const spanRef=document.querySelector('#name-output');
inputRef.addEventListener('input',editText);
function editText(even) {
    spanRef.textContent=even.target.value;
    if (spanRef.textContent ==='') {
        spanRef.textContent = 'незнакомец'
    }
}
:+1:
1


Melnyk Sergey  21 days ago
Так точно работает)

Melnyk Sergey  21 days ago
если пустая строка то выполняется условие
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Olga Konopleva Dec 18th at 11:43 AM
Подскажите, почему в 3 задаче, в итоге в alt только первое слово в кавычках? С url всё в порядке, вставилось как надо.
19 replies

Olga Konopleva  21 days ago
https://prnt.sc/w5963y
LightshotLightshot
Screenshot
Captured with Lightshot (177 kB)
https://image.prntscr.com/image/XCzn_XbJSUSs93eYBxbPfg.png

Mykhaylo Lyubov  21 days ago
Попробуй alt = “${image.alt}”

Alexandra Gubar  21 days ago
Стоп, а зачем два метода, которые одно и то же делают вместе использовать?

Olga Konopleva  21 days ago
@Mykhaylo Lyubov  а почему так? в объкте же значение alt уже в кавычках
для url не ставила кавычки, а они там есть...

Olga Konopleva  21 days ago
@Alexandra Gubar не поняла вопрос

Alexandra Gubar  21 days ago
Если создавать разметку без adjacent, то используем append co всеми вытекающими. Или же упрощаем жизнь и юзаем шаблонную строку и adjacent

Mykhaylo Lyubov  21 days ago
@Olga Konopleva Не знаю, почему с src все получилось
Но вообще, синтаксически правильно параметры  src и alt заключать в кавычки
А то что они заданы в кавычках, то это только из-за того, что это строка, она так задается, а так там нет кавычек, если ты выведешь отдельно alt или src (edited) 
:+1:
2


Olga Konopleva  21 days ago
@Alexandra Gubar Я так и делаю) второе решение с аппенд закоментировано. Просто сначала решила с помощью него, а потом увидела, что в условии задачи нужно использовать adjacent)

Mykhaylo Lyubov  21 days ago
Так там и append который в самом низу не нужен, если юзать insertAdjacentHTML

Olga Konopleva  21 days ago
@Mykhaylo Lyubov спасибо большое! Но все равно загадка, почему с src всё норм) (edited) 

Alexandra Gubar  21 days ago
Я о последней строке тоже)

Olga Konopleva  21 days ago
https://prnt.sc/w59ga1
LightshotLightshot
Screenshot
Captured with Lightshot (19 kB)
https://image.prntscr.com/image/2tUw9yqHSiKnTSo3oPROwQ.png

Mykhaylo Lyubov  21 days ago
Нужно пройтись по массиву, все загнать в одну строку, и потом за раз вставить через insertAdjacentHTML
:raised_hands:
2
:+1:
1


Olga Konopleva  21 days ago
@Alexandra Gubar ты о строке galleryRef.append(...imageGallery);??? Без нее ничего не вставляется

Olga Konopleva  21 days ago
@Mykhaylo Lyubov я за раз вставляю через аппенд. То что у меня в imageGallery не вставляется в дом

Mykhaylo Lyubov  21 days ago
Да, но в данном задании смысл в том, чтобы не юзать append

Olga Konopleva  21 days ago
Не знаю про смысл) но в условии не сказано не использовать append)) формально всё соблюдено :slightly_smiling_face:

Mykhaylo Lyubov  21 days ago
Ну да, просто insertAdjacentHTML принимает строку, и можно собрать все данные в одну строку, через map.join, или reduce и сразу вставить через insertAdjacentHTML
И тогда append отпадает




Olga Konopleva  21 days ago
Я поняла вас ребята, спасибо за помощь
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Yuriy Dec 18th at 11:49 PM
Ребят, привет
У кого какие идеи как решить часть 8-й задачи про размер первого бокса 30х30 и каждый следующий что бы рос на 10х10 рх? все сделал, только вот это не понимаю с какой стороны начать реализовывать? есть какие то наводящие?
спасибо (edited) 




1 reply

Mykhaylo Lyubov  28 days ago
Тебе нужно создать цикл, который при нажатии на кнопку «создать» будет создавать n элементов, n тебе нужно получить из инпута.
Чтобы рос каждый следующий - подумай над привязкой к индексу в цикле. (edited) 
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
MarinaKryuchko Dec 19th at 5:29 PM
Ребята, подскажите, почему при переборе методом ФорИч в <li> вставляется только последний элемент массива "Приправы"? Хотя в console.log(ingredient) выводит все элементы.
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
let listEl = document.createElement("li");
ingredients.forEach((ingredient) => {
  listEl.textContent = ingredient;
});
:man-facepalming:
1
:brain:
1

19 replies

MarinaKryuchko  19 days ago
через for решила эту задачу, а с ФорИч что-то не идет((

Alexander Serzhenko  19 days ago
Потому что ты одному объекту присваиваешь значения в цикле. Естественно последнее значение в цикле и будет его конечным значением. Под каждое значение объект li создавать надо и присваивать контент

MarinaKryuchko  19 days ago
ну в моем понимании, форИч делает то, что я написала на каждой итерации. Значит для каждого элемента.

Mykhailo Gogol'  19 days ago
Нужно создавать елемент в цикле тогда (edited) 

Katerina  19 days ago
вне метода создается только один li

Iliya Miroshnychenko  19 days ago
проблема в том, что ты только 1 ли создала let listEl = document.createElement("li");

Alona  19 days ago
@MarinaKryuchko создавать li нужно внутри метода. Также обратите внимание, что на выходе вам нужен новый массив - forEach вам в этом не поможет.

MarinaKryuchko  19 days ago
Спасибо, ребята, с созданием одного li поняла ошибку! Задача решилась. А зачем нам новый массив? (edited) 

Katerina  19 days ago
Чтобы за одну операцию добавить в DOM все элементы, а не перезаписывать его на каждой итерации

Alexander Serzhenko  19 days ago
На создании объекта и присвоении ему значений ничего не заканчивается. Эти объекты теперь надо добавить в ДОМ, что бы они стали отображаться в браузере на страничке

MarinaKryuchko  19 days ago
я внутри ФорИч это сделала - неправильно?

Katerina  19 days ago
у тебя на странице отображается то, что ты сделала?

MarinaKryuchko  19 days ago
да

Katerina  19 days ago
в окне браузера я имею ввиду?

Katerina  19 days ago
не в консоли

MarinaKryuchko  19 days ago
11.jpg 
11.jpg


Katerina  19 days ago
А ты нам весь код скинула?

Alona  19 days ago
@MarinaKryuchko добавление элементов  в DOM должно осуществляться за одну операцию, за пределами метода.

MarinaKryuchko  19 days ago
ок, пытаюсь решить другим методом.
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Olya Verbetska Dec 21st at 1:41 PM
Доброе утро!
Помогите пофиксить пожалуйста!
Задача 5.
Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
У меня вначале "незнакомец", потом пишу имя, в спане меняется текст. А потом удаляю имя, просто backspacом и по идее, когда инпут опять пустой, то должен опять быть незнакомец.
А у меня нет, просто пустая строка((
Код в коментах
25 replies

Olya Verbetska  17 days ago
const inputRef = document.querySelector("#name-input");
const greetingRef = document.querySelector("#name-output");
inputRef.addEventListener("input", inputNameHandler);
function inputNameHandler(event) {
  if (event.target.value === '') {
    greetingRef.textContent = "незнакомец";
  }
  greetingRef.textContent = event.target.value;
}

Nastya Boiko:face_with_raised_eyebrow:  17 days ago
у меня вроде также только с return и работает

Nastya Boiko:face_with_raised_eyebrow:  17 days ago
Untitled 
const inputRef = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
​
inputRef.addEventListener("input", (event) => {
  if (event.target.value === "") {
Click to expand inline (9 lines)



Vera Khomenko  17 days ago
if (inputValue != '') {
    spanValue = inputValue;
  }
  nameLabelRef.textContent = spanValue;
}

Olya Verbetska  17 days ago
хм, надо попробовать....

Vera Khomenko  17 days ago
:wink:

Olya Verbetska  17 days ago
работает! интересно, почему так? ...:zany_face:

Olya Verbetska  17 days ago
только теперь пришлось вставить return, теперь он понадобился

olga nesterenko  17 days ago
Можешь еще в свой начальный код попробовать добавить  else - мне помогло (edited) 

Olya Verbetska  17 days ago
странный этот джс))
function inputNameHandler(event) {
  if (event.target.value !== "") {
    return greetingRef.textContent = event.target.value;
  }
  return  greetingRef.textContent = "незнакомец";
}
отак работает. Убираю ретурн - не работает, хотя как бы должно (edited) 

Vera Khomenko  17 days ago
У меня нет ретерна

Olya Verbetska  17 days ago
у меня без него не меняется текст вообще

Vera Khomenko  17 days ago
const inputRef = document.querySelector('#name-input');
const nameLabelRef = document.querySelector('#name-output');
inputRef.addEventListener('input', handleInputChange);
// способ 1
// function handleInputChange(event) {
//   const eValue = event.target.value;
//   if (eValue === '') {
//     nameLabelRef.textContent = 'незнакомец';
//   } else {
//     nameLabelRef.textContent = eValue;
//   }
// }
function handleInputChange(event) {
  let spanValue = 'незнакомец';
  const inputValue = event.target.value;
  if (inputValue != '') {
    spanValue = inputValue;
  }
  nameLabelRef.textContent = spanValue;
}

olga nesterenko  17 days ago
Девушки, вопрос - одна кавычка - это аналог пустой строки?

Olya Verbetska  17 days ago
там две одинарные кавычки, то слак так рисует
:heavy_plus_sign:
1


Maryna Kipenko  17 days ago
function signChange(event) {
  let enteredInput = event.target.value;
  enteredInput === ""
    ? (nameOutputRef.textContent = "незнакомец")
    : (nameOutputRef.textContent = enteredInput);
  //   if (enteredInput === "") {
  //     nameOutputRef.textContent = "незнакомец";
  //   } else {
  //     nameOutputRef.textContent = enteredInput;
  //   }

Maryna Kipenko  17 days ago
У меня такие работают, без ретурна

Olya Verbetska  17 days ago
без ретурна не хочет работать, у меня от Веры код отличается только отсутствием переменных

Olya Verbetska  17 days ago
и даже елс не помогает

Olya Verbetska  17 days ago
@Maryna Kipenko вот когда у меня біло тоже строгое равенство ===, то тогда работало без ретурн, а когда исправила на строгое неравенство, то уже не работает))
:thinking_face:
1


Vera Khomenko  17 days ago
А у меня ж неравенство, от обратного пишу

Vera Khomenko  17 days ago
Может кэш почисть)))

Olya Verbetska  17 days ago
@Vera Khomenko у меня все так же, разница только в отсутствии переменных)
кеш не помог))




Olya Verbetska  17 days ago
пусть ментор думает, у меня мозг взорвется скоро))

Vera Khomenko  17 days ago
Верю, прекрасное решение;)
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
olga nesterenko Dec 21st at 2:15 PM
Всем привет! Пожалуйста "жирно" немекните на решение 7-й задачи
6 replies

olga nesterenko  17 days ago
const elemInput = document.querySelector("#font-size-control");
const elemSpam = document.querySelector("#text");
const changeSize = function () {
  //ПОМОГИТЕ ОПРЕДЕЛИТЬ КАК ИЗМЕНИТЬ ШРИФТ!!!
};
elemInput.addEventListener("input", changeSize);

Yevhenii Ivanov:bulb:  17 days ago
А как изменяется стиль шрифта в css ?

olga nesterenko  17 days ago
просто прописать в css font-size

Yevhenii Ivanov:bulb:  17 days ago
А тут нужно через js обратиться к этому свойству

Yevhenii Ivanov:bulb:  17 days ago
Свойство HTMLElement.style и в нем fontSize
:heavy_plus_sign:
2


olga nesterenko  17 days ago
Спасибо! получилось :)
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Olya Verbetska Dec 22nd at 10:28 AM
Доброе утро!
Подскажите пожалуйста, куда думать.
6 задание.
У меня работает, но...
Ввела правильное количество символов - инпут зеленый, потом удалила - ввела неправильное - стал красный, потом опять ввела правильное - остается красным. На инпуте висит два класса - valid и invalid.
Помогает только перезагрузка страницы.
Подскажите плиз, на каком этапе и на каком событии я должна снять класс?
Код в комментах
11 replies

Olya Verbetska  17 days ago
const inputRef = document.querySelector("#validation-input");
const validLength = Number(inputRef.dataset.length);
function inputValidationHandler(event) {
  let inputValue = event.target.value;
  return inputValue.length === validLength
    ? inputRef.classList.add("valid")
    : inputRef.classList.add("invalid");
}
inputRef.addEventListener("blur", inputValidationHandler);

Vera Khomenko  17 days ago
if (inputValue.length === dataLength) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
:raised_hands:
1


Vera Khomenko  17 days ago
нужно поставить очистку перед добавлением и перед удалением

Olya Verbetska  17 days ago
опа! спасибо! А я тут выпендрилась с тернарником, а он не подходит!
спасибо огромное

Vera Khomenko  17 days ago
пожалуйста))

Olya Verbetska  17 days ago
@Vera Khomenko я логику поняла, сделала все так же и вообще перестало работать...(( оно теперь при правильном количестве символов лепит оба класса сразу (edited) 

Olya Verbetska  17 days ago
@Vera Khomenko капец, после else не поставила {} и все сломалось)) теперь работает))

Vera Khomenko  17 days ago
)))  function inputLengthValidation(event) {
  const inputValue = event.target.value;
  if (inputValue.length === dataLength) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
}

Vera Khomenko  17 days ago
если всю функцию - то у меня так

Olya Verbetska  17 days ago
@Vera Khomenko уже починила)  я просто выражение после else не внесла в фигурные скобки, потому перестало работать)
Спaсибо :hugging_face: (edited) 
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

Yuriy Dec 18th at 11:49 PM
Ребят, привет
У кого какие идеи как решить часть 8-й задачи про размер первого бокса 30х30 и каждый следующий что бы рос на 10х10 рх? все сделал, только вот это не понимаю с какой стороны начать реализовывать? есть какие то наводящие?
спасибо (edited) 
1 reply

Mykhaylo Lyubov  20 days ago
Тебе нужно создать цикл, который при нажатии на кнопку «создать» будет создавать n элементов, n тебе нужно получить из инпута.
Чтобы рос каждый следующий - подумай над привязкой к индексу в цикле. 
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Друзья, привет.
6-я задача 7-го модуля.
Добавляется только класс invalid несмотря на введённое кол-во символов.
Подскажите почему? (код в комментах)

9 replies

Leonid Romanov  4 hours ago
const inputRef = document.querySelector("#validation-input");
console.log(inputRef);
inputRef.addEventListener("change", (event) => {
  inputRef.textContent.length === inputRef.dataset.length
    ? inputRef.classList.add("valid")
    : inputRef.classList.add("invalid");
});

Yevhenii Ivanov:bulb:  4 hours ago
Тебе надо делать полноценный if

Yevhenii Ivanov:bulb:  4 hours ago
И в одном условии удалять valid и добавлять invalid  и в else  наоборот

Leonid Romanov  4 hours ago
@Yevhenii Ivanov что значит полноценный?
вот у меня был такой вариант
const inputRef = document.querySelector("#validation-input");
// console.log(inputRef);
inputRef.addEventListener("change", (event) => {
  if (inputRef.textContent.length === inputRef.dataset.length) {
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.add("invalid");
  }
});

Leonid Romanov  4 hours ago
даже если ввожу правильное кол-во символов - то все равно добавляется invalid

Leonid Romanov  4 hours ago
и значение data-length я от строки привел к числу, но все равно только invalid

Leonid Romanov  4 hours ago
event.target.value.length вместо inputRef.textContent.length помогло

Yevhenii Ivanov:bulb:  4 hours ago
У тебя в if должен быть add и remove и в else тоже add и remove

Leonid Romanov  4 hours ago
да, врубился, спасибо!

*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Тут сразу видно, кто продолбал и теперь навёрстывает.)
7-я задача 7-го модуля:
мне кажется всё перепробовал, что вспомнил. ничего не помогает. не регулирует ползунок размер шрифта.
Чего ему не хватат?
код в комментах.
12 replies

Leonid Romanov  3 hours ago
const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");
inputRef.addEventListener("input", (event) => {
  spanRef.style.fontSize === event.value;
});

Ivetta Dashkova:nerd_face:  3 hours ago
если правильно помню, то тебе чисто число прилетает на event.value, а для шрифта нужно указать еще единицы-пиксели

Olga Konopleva  3 hours ago
Тут сразу видно, кто не консолит :slightly_smiling_face:
Законсоль во-первых, что такое event.value, что тебе туда приходит.
Ну и выше коммент очень верный про пиксели. (edited) 

Ivetta Dashkova:nerd_face:  3 hours ago
согласна с вышесказанным))
и убери ===, надо просто =
=== это для проверки условия, сравнения, а тут просто присвоение значения через одно = (edited) 

Leonid Romanov  3 hours ago
да, в event.value приходит число.
точнее число приходит в inputRef.value.
а в event.value внутри функции приходит  почему-то undefined
@Olga Konopleva @Ivetta Dashkova
про пиксели согласился, тонко.
приравняю к шаблонной строке тогда

Olga Konopleva  3 hours ago
@Leonid Romanov потому что нет такого event.value
console.dir(event)
и смотри, как достучаться правильно до value.

Leonid Romanov  3 hours ago
@Olga Konopleva реально не пойму к какому цепляться. все возможно подходящие перепробовал, кажись..
Снимок экрана 2021-01-07 в 16.22.38.png 
Снимок экрана 2021-01-07 в 16.22.38.png



Olga Konopleva  3 hours ago
открывай target и ищи там :slightly_smiling_face:

Leonid Romanov  3 hours ago
я искал. и сейчас ещё раз поискал. там только timeStamp изменяется соответственно передвижению ползунка. но там число для размера шрифта неподходящее.)

Olga Konopleva  3 hours ago
https://prnt.sc/wi9rih
LightshotLightshot
Screenshot
Captured with Lightshot (53 kB)
https://image.prntscr.com/image/qUQ7-CarThefeqwPMcslfg.png

Olga Konopleva  2 hours ago
на 3 точки нажми

Leonid Romanov  2 hours ago
бляха-муха.
т.е. не event.value, a event.target.value...
ну-ну.))
спасибо большое @Olga Konopleva))
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////
