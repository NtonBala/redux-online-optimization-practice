// Core
import { createSelector } from 'reselect';

// Instruments
import appState from '../init/appState';
import { log } from '../helpers';

const getCounter = (state) => state.counter;

const selectCount = createSelector(
    getCounter,
    (count) => {
        log(`→ the result function was recomputed: ${count}`, 'aefd3e');

        return count ** 10;
    },
);

// Computation
console.time('✅ selector computes');
const computedCounter1 = selectCount(appState);
console.timeEnd('✅ selector computes');

// Memoization
console.time('🎉 selector returns memoized value');
const computedCounter2 = selectCount(appState);
console.timeEnd('🎉 selector returns memoized value');

log('• −−−−−−−− •', '1aa395');
log(`→ recomputations: ${selectCount.recomputations()}`, 'f9d8a7');
log('• −−−−−−−− •', '1aa395');

console.log('→ computedCounter1', computedCounter1);
console.log('→ computedCounter2', computedCounter2);

console.log('→ result func:', selectCount.resultFunc(99));
