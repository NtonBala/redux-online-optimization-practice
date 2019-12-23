// Core
import { createSelector } from 'reselect';

// Instruments
import { log } from '../../../helpers';

// Хелпер, выводит производные данные
const getPrefix = (users) => {
    return users.map(({ name, gender, id, likes }) => {
        switch (gender) {
            case 'female':
                return { id, fullname: `Miss ${name}`, likes };

            case 'male':
                return { id, fullname: `Mister ${name}`, likes };

            default:
                return {
                    id,
                    gender,
                    name,
                    likes,
                };
        }
    });
};

// Обычный JavaScript-селектор, без мемоизации
const selectUsersSimple = (state) => {
    const selected = getPrefix(state.users);

    log('selectUsersSimple selector computed', '38dddd');

    return selected;
};

const extractUsers = (state) => state.users;

// Мемоизированный селектор
const selectUsersMemoized = createSelector(
    extractUsers,
    (users) => {
        const selected = getPrefix(users);

        log('selectUsersMemoized selector computed', '38dddd');

        return selected;
    },
);

export {
    selectUsersSimple as selectUsers,
    // selectUsersMemoized as selectUsers,
};
