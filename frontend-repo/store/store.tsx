"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSclice";

const rootReducer = combineReducers({
	auth: authReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});
