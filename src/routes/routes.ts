import { LazyExoticComponent, lazy } from "react";
import NoLazy from "../pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

// Renombre del chunk para un proyecto sin vite
// const LazyPage1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ '../pages/Lazy1'));

const LazyLayout = lazy(() => import('../layout/LazyLayout'));

export const routes: Route[] = [
        {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'LazyLayout - Dash'
    },
];