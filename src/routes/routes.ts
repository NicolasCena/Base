import { LazyExoticComponent, lazy } from "react";

type JSXComponent = () => JSX.Element;

interface Routes {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

// Renombre del chunk para un proyecto sin vite
// const LazyPage1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ '../pages/Lazy1'));

const LazyPage1 = lazy(() => import('../pages/Lazy1'));
const LazyPage2 = lazy(() => import('../pages/Lazy2'));
const LazyPage3 = lazy(() => import('../pages/Lazy3'));

export const routes: Routes[] = [
  {
    to: "/lazy1",
    path: "lazy1",
    Component: LazyPage1,
    name: "lazy-1",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    Component: LazyPage2,
    name: "lazy-2",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    Component: LazyPage3,
    name: "lazy-3",
  },
];
