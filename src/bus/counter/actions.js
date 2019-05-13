// Types
import { FAKE_INCREMENT, INCREMENT, DECREMENT } from './types';

export const fakeIncrement = () => ({ type: FAKE_INCREMENT });
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
