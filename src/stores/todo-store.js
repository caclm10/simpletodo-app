import { atom } from "jotai";
import { atomWithImmer } from "jotai-immer";

export const todoListAtom = atomWithImmer([])
export const selectedTodoIdAtom = atom(null)