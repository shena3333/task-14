// В данных задачах вам может понадобиться использовать методы: reduce, findIndex, indexOf, includes, concat, isArray, lastIndexOf, every, object.keys

// Задачи с использованием reduce
// Подсчет суммы всех чисел в массиве. Напишите функцию, которая использует метод reduce для подсчета суммы всех чисел в массиве.
const numbers1 = [1, 2, 3, 4, 5];
const result1 = numbers1.reduce(function (sum, elem) { return sum + elem; }, 0);
// console.log(result1);
// Подсчет среднего значения чисел в массиве. Используйте reduce для вычисления среднего значения элементов массива.
const numbers2 = [10, 20, 30, 40, 50];
const result2 = numbers1.reduce(function (sum, elem) { return sum + elem; }, 0) / numbers2.length;
// console.log(result2);
// Подсчет количества вхождений каждого элемента в массиве. Создайте функцию, которая возвращает объект, где ключи - это уникальные элементы 
//массива, а значения - количество их вхождений, используя reduce.
const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
function makeFruits(items) {
    return items.reduce(function (acc, fruit2) {
        if (!acc[fruit2]) {
            acc[fruit2] = 1
        } else {
            acc[fruit2]++
        }
        return acc;
    }, {});
};
 console.log(makeFruits(items))
// Поиск максимального числа в массиве. Используйте reduce для нахождения максимального числа в массиве чисел.
const numbers3 = [5, 34, 78, 2, 45];
const max = numbers3.reduce(function (acc, elem) {
    if (acc > elem) { return acc } else { return elem };
});
// console.log(max);
// Объединение массивов объектов по ключу. Напишите функцию, которая объединяет массив объектов по заданному ключу, используя reduce.
const people1 = [
    { name: "Alice", age: 25, job: "Developer" },
    { name: "Bob", age: 30, job: "Designer" },
    { name: "Alice", location: "London" }
];
function uniteKey(people1, needKey) {
    return people1.reduce(function (acc, elem) {
        if (!acc[elem[needKey]]) {
            acc[elem[needKey]] = elem;
        } else {
            Object.assign(acc[elem[needKey]], elem);
        }
        return acc;
    }, {});
}

// console.log(uniteKey(people1, 'name'));
// Подсчет общего количества определенного свойства в массиве объектов. Используйте reduce для подсчета общего количества определенного свойства (например, age) в массиве объектов.
const people2 = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

function quantityOfProperties(people2, needKey) {
    return people2.reduce(function (acc, human) {
        if (!acc[human[needKey]]) {
            acc[human[needKey]] = 1;
        } else {
            acc[human[needKey]]++
        }
        return acc;
    }, {})
};
// console.log(quantityOfProperties(people2, 'age'));
// Удаление дубликатов из массива. Используйте reduce для создания массива, который содержит только уникальные значения изначального массива.
const numbers = [1, 2, 3, 4, 5, 1, 2, 3];
function unique(numbers) {
    return numbers.reduce(function (uniqueArray, elem) {
        !uniqueArray.includes(elem) && uniqueArray.push(elem);
        return uniqueArray;
    }, [])
};
// console.log(unique(numbers));
// Плоское представление вложенных массивов. Напишите функцию, которая использует reduce для "выпрямления" массива массивов в одномерный массив.
// (Здесь пригодится рекурсионный вызов функции)
const nestedArrays = [1, [2, 3], [4, [5, 6]], 7];

function newArray(nestedArrays) {
    return nestedArrays.reduce(function (array, elem) {
        if (Array.isArray(elem)) {
            array = array.concat(newArray(elem));
        } else {
            array.push(elem);
        }
        return array;
    }, []);
}
// console.log(newArray(nestedArrays));
// Создание объекта из массива ключей и массива значений. Используйте reduce для создания объекта, где ключи и значения формируются из двух 
//разных массивов.
const keys = ['id', 'name', 'age'];
const values = [1, 'Alice', 25];
function makeObject(keys, values) {
    return keys.reduce(function (acc, elem, i) {
        acc[elem] = values[i]
        return acc;
    }, {});
};
// console.log(makeObject(keys, values))
// Задачи с использованием findIndex и indexOf

// Поиск первого четного числа. Напишите функцию, которая использует findIndex для поиска первого четного числа в массиве.
const numbers4 = [1, 3, 5, 8, 10];
function IndexOfFirstEvenNum(numbers4) {
    return numbers4.findIndex(num => num % 2 == 0)
};
// console.log(IndexOfFirstEvenNum(numbers4));
// Определение, содержит ли массив определенный элемент. Используйте indexOf для проверки, содержит ли массив заданный элемент.
const fruits1 = ['apple', 'banana', 'orange'];
const element = 'banana';

function indexOfElement(fruits1, element) {
    return fruits1.indexOf(element) == -1 ? 'элемента в массиве нет' : 'Элемент в массиве есть'
};
// console.log(indexOfElement(fruits1, element));
// Поиск индекса объекта по заданному свойству. Создайте функцию, использующую findIndex, чтобы найти индекс объекта в массиве объектов 
// по определенному свойству (например, по id).
const people = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];
const prop = 'id';
const value = 2;
function findPeople(people, prop, value) {
    return people.findIndex(elem => elem[prop] === value)
};
// console.log(findPeople(people, prop, value));
// Определение, все ли элементы уникальны в массиве. Используйте комбинацию findIndex и indexOf для проверки, все ли элементы в массиве уникальны.
const numbers5 = [1, 2, 3, 4, 5, 6];
function uniqueElement(numbers5) {
    const uniqueIndex = numbers5.findIndex((elem, index, selfArr) => {
        if (index !== selfArr.indexOf(elem)) { return index }
    });
    return uniqueIndex == -1 ? 'уникальны' : 'не уникальны'
};
// console.log(uniqueElement(numbers5))
// Поиск последнего вхождения элемента в массиве. Используйте indexOf с параметром fromIndex, чтобы найти последнее вхождение элемента в массиве.
const letters = ['a', 'b', 'c', 'a', 'b', 'c', 'a'];
const needElement = 'a';
function lastIndexElement3(letters, needElement, fromIndex = 0) {
    let needIndex = letters.indexOf(needElement, fromIndex);
    if (needIndex === -1) {
        return -1;
    }
    let nextIndex = lastIndexElement3(letters, needElement, needIndex + 1);
    return nextIndex !== -1 ? nextIndex : needIndex;
}
// console.log(lastIndexElement3(letters, needElement));
// --------- Р Е Ш Е Н О     Н Е     Т Е М     С П О С О Б О М
function lastIndexElement4(letters, needElement) {
    let needIndex = -1;
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] = needElement) {
            needIndex = i
        }
    }
    return needIndex
};
// console.log(lastIndexElement4(letters, needElement));
// --------- Р Е Ш Е Н О     Н Е     Т Е М     С П О С О Б О М

function lastIndexElement2(letters, needElement) {
    return letters.lastIndexOf(needElement)
};
// console.log(lastIndexElement2(letters, needElement));
// --------- Р Е Ш Е Н О     Н Е     Т Е М     С П О С О Б О М
function lastIndexElement1(letters, needElement) {
    const reverseArray = letters.reverse();
    return letters.length - 1 - reverseArray.indexOf(needElement);
};
// console.log(lastIndexElement1(letters, needElement));
// Нахождение индекса первого числа, большего заданного. Создайте функцию с использованием findIndex, чтобы найти индекс первого числа 
//в массиве, которое больше заданного значения.
const numbers6 = [3, 5, 7, 9, 10];
const num = 6;
function findMoreNum(numbers6, num) {
    return numbers6.findIndex(elem => elem > num)
};
// console.log(findMoreNum(numbers6, num));

// Поиск индекса первого элемента, который удовлетворяет условию. Используйте findIndex для поиска индекса первого элемента в массиве, 
//который удовлетворяет заданному условию (например, является строкой определенной длины).
const strings = ['hello', 'world', 'example', 'words'];
function findStringByLenght(strings, needLenght) {
    return strings.findIndex(elem => elem.length === needLenght)
};
// console.log(findStringByLenght(strings, 7));
// Удаление всех вхождений заданного элемента из массива. Используйте indexOf в цикле, чтобы найти и удалить все вхождения определенного 
//элемента из массива.
const numbers7 = [1, 2, 3, 2, 4, 2, 5];
const element7 = 2;
function deleteElementFromArray(numbers7, element7) {
    for (let i = 0; i < numbers7.length; i++) {
        const needIndex = numbers7.indexOf(element7);
        if (needIndex != -1) {
            numbers7.splice(needIndex, 1);
        }
    };
    return numbers7;
};
// console.log(deleteElementFromArray(numbers7, element7));
// --------- первое решение не в рамках задания
function deleteElementFromArray1(numbers7, element7) {
    return numbers7.reduce(function (arr, elem) {
        elem != element7 && arr.push(elem)
        return arr;
    }, [])
};
// console.log(deleteElementFromArray1(numbers7, element7));
// Поиск индекса элемента в массиве объектов по нескольким свойствам. Создайте функцию, которая использует findIndex, чтобы найти индекс 
//объекта в массиве, соответствующего нескольким заданным свойствам.

const cars = [
    { make: 'Toyota', model: 'Corolla', year: 2005 },
    { make: 'Honda', model: 'Civic', year: 2004 },
    { make: 'Ford', model: 'Fusion', year: 2008 }
];
const props = {
    make: 'Honda',
    model: 'Civic'
};
function findCar(cars, props) {
    return cars.findIndex(elem => {
        const needKeys = Object.keys(props);
        for (let i = 0; i < needKeys.length; i++) {
            if (props[needKeys[i]] == elem[needKeys[i]]) {
                return true
            }
        }
    })
};
// console.log(findCar(cars, props));
