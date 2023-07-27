
// Наследование T позволяет расширить базовую структуру, от которой он наследуется, ее лучше задать, чтобы не было ошибок
// Partial указывает на то, что типы для T будут заданы, но все свойства будут не обязательны, а, значит, мы можем указать
// только одно свойство
export const updateObjectInArray = <T extends {[key: string]: any}>
(items: Array<T>, itemId: number, objPropName: keyof T, newObj: Partial<T>): Array<T> => {
    return items.map(item => item[objPropName] === itemId
        ? {...item, ...newObj}
        : item)
}