import { AnyAction } from "redux";
import { RootState } from "@/store";
import { ThunkAction } from "redux-thunk";

export type AppThunk = ThunkAction<void, RootState, unknown, AnyAction>;
export type AppAction = { type: string; payload: unknown };
