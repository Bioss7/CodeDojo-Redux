// В реализации нашего хранилища отличается от реализации в Redux, 
// главным отличием является мы использовали класс для создания хранилища, а в Redux используется функция 

// Функция создать хранилище 
// Принимает 2 аргумента, 1 функция изменяющая состояние reducer, 2 параметр начальное состояние initialState
export function createStore(reducer, initialState) {
    let state = initialState;
    let callbacks = [];

    // Функция возвращает текущее состояние 
    const getState = () => state;

    // Функция изменяет состояние 
    const dispatch = action => {
        state = reducer(state, action);
        callbacks.forEach(callbacks => callbacks());
    };

    // Функция для подписки на обновления 
    const subscribe = callback => {
        callbacks.push(callback);
        // Функция для отписки 
        return () => callbacks.filter(cb => cb !== callback);
    };

    // Момент вывода компонента, объект состояние будет уже определен 
    dispatch({});

    // Благодаря замыканию функции будут иметь доступ к переменным state и callbacks
    return { getState, dispatch,  subscribe };

}