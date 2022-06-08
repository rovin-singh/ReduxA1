import { increment, decrement, multiply, divide } from "./action.types";

export const add = (value) => ({ type: increment, payload: value });
export const sub = (value) => ({ type: decrement, payload: value });

export const mul = (value) => ({ type: multiply, payload: value });

export const div = (value) => ({ type: divide, payload: value });
