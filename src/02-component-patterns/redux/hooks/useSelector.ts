import { useSelector } from "react-redux";
import { State } from "../interfaces/state.interface";

export const useAppSelector = <TState = State, TSelected = unknown>(fn: (state: TState) => TSelected) => {

    const value = useSelector(fn);
    return value;
};