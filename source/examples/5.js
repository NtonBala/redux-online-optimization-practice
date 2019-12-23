// Core
import { createSelector } from 'reselect';

// Instruments
import appState from '../init/appState.json';
import { log } from '../helpers';

// Первый уровень защиты
//             state === prevState
//                    ↓
const getCounter = (state) => state.counter;
// Второй уровень защиты               ↑
//                       prevState.counter === state.counter

const selectCount = createSelector(
    getCounter,
    (count) => {
        log(`→ the result function was recomputed: ${count}`, 'aefd3e');

        return count ** 10;
    },
);

// Вычисление
console.time('✅ selector computes');
const computedCounter1 = selectCount(appState);
console.timeEnd('✅ selector computes');

// Мемоизация
console.time('🎉 selector returns memoized value');
const computedCounter2 = selectCount(appState);
console.timeEnd('🎉 selector returns memoized value');

log('• −−−−−−−−− •', '1aa395');
log(`→ recomputations: ${selectCount.recomputations()}`, 'f9d8a7');
log('• −−−−−−−−− •', '1aa395');

console.log('• computedCounter1 •', computedCounter1);
console.log('• computedCounter2 •', computedCounter2);

log('• −−−−−−−−− •', '1aa395');

// Создаём новый объект с состоянием.
const newState = { ...appState, counter: 4 };

// Вычисление
console.time('✅ selector computes');
const computedCounter3 = selectCount(newState);
console.timeEnd('✅ selector computes');

// Мемоизация
console.time('🎉 selector returns memoized value');
const computedCounter4 = selectCount(newState);
console.timeEnd('🎉 selector returns memoized value');

log('• −−−−−−−−− •', '1aa395');

console.log('→ computed counter value', computedCounter3);
console.log('→ computed counter value', computedCounter4);

log('• −−−−−−−−− •', '1aa395');
log(`• recomputations • ${selectCount.recomputations()}`, 'f9d8a7');
log('• −−−−−−−−− •', '1aa395');
