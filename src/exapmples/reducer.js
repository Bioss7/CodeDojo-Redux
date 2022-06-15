let state = 0; // состояние приложения 

// Функция имеющая доступ к состоянию, и только эта функция может его изменять 
// Функция в качестве параметров принимает текущее состояние и тип действия (строка)
// В теле функции описываем, что в нашем приложении означает то или иное действие 

// Фукнция не обновляет исходное состояние, она возвращает новое состояние, такая функция в Redux называется reducer (преобразователь)
function updateState(state, action) { 
    if(action === 'INCREMENT') {
        return state + 1;
    } else if(action === 'DECREMENT') {
        return state - 1;
    } else {
        return state;
    }
}

state = updateState(state, 'INCREMENT');
console.log(state);

state = updateState(state, 'DECREMENT');
console.log(state);

state = updateState(state, 'NOTHING');
console.log(state);