import { SongComponentPageTypes } from "./slice/types";

export const initialState: SongComponentPageTypes = {
    isLoading: false,
    errorMessage: "",
    song:[],
};