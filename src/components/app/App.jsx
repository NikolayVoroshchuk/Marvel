import { lazy, Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';

const Page404 = lazy(() => import('../../pages/404'));
const MainPage = lazy(() => import('../../pages/MainPage'));
const ComicsPage = lazy(() => import('../../pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../../pages/SingleComicPage/SingleComicPage'));
const SingleCharPage = lazy(() => import('../../pages/SingleCharPage/SingleCharPage'));
const SinglePage = lazy(() => import('../../pages/SinglePage'));

const App = () => {

    return (
        <HashRouter>
            <div className="app">
                <AppHeader />
                <main>
                    <Suspense fallback={<Spinner />}>
                        <Routes>
                            <Route path='/' element={<MainPage />} />
                            <Route path="/comics" element={<ComicsPage />} />
                            <Route path="/comics/:id"
                                element={
                                    <SinglePage Component={SingleComicPage}
                                        dataType='comics' />
                                } />
                            <Route path="/characters/:id"
                                element={
                                    <SinglePage Component={SingleCharPage}
                                        dataType='character' />
                                } />
                            <Route path="*" element={<Page404 />} />
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </HashRouter>
    )
}

export default App;