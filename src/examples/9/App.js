// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Instruments
import { log } from '../../helpers';

// Components
import { Counter } from './Counter';
import { Posts } from './Posts';
import { Users } from './Users';

/**
 *  connect:
 *
 * - Вызывает mapStateToProps(), если состояния приложения изменилось по ссылке после вызова dispatch(action);
 * - НЕ вызывает mapStateToProps() если состояние приложения НЕ изменилось по ссылке после вызова dispatch(action).
 *
 *  Если состояние приложения ИЗМЕНИЛОСЬ по ссылке, компонент connect() итерирует по каждому ЗНАЧЕНИЮ,
 *  объекта возвращаемого mapStateToProps(), и проводит shallow-comparison по ссылке с предыдущим значением.
 *
 * - Если хотя-бы одно ЗНАЧЕНИЕ изменилось по ссылке, компонент connect() перерендеривает оборачиваемым компонент (App);
 * - Если все ЗНАЧЕНИЯ НЕ ИЗМЕНИЛИСЬ, компонент connect() останавливается, препятствуя запуску механизма reconciliation React.
 */

const mapStateToProps = (state) => {
    log('MSTP is called: App', 'afd947');

    return {
        users: state.users,
    };
};

export const App = connect(mapStateToProps)(
    class extends Component {
        render() {
            log('render method is called: App', 'afd947');

            return (
                <section className = 'example'>
                    <Counter />
                    {/* <Users /> */}
                    {/* <Posts byLikersOf = 'cats' /> */}
                    {/* <Posts byLikersOf = 'dogs' /> */}
                </section>
            );
        }
    },
);
