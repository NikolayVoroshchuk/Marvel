/* eslint-disable no-unreachable */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';

import './comicsList.scss';

const setContent = (process, Component, newItemLoading) => {
    switch (process) {
        case 'waiting':
            return <Spinner />;
            break;
        case 'loading':
            return newItemLoading ? <Component /> : <Spinner />;
            break;
        case 'confirmed':
            return <Component />;
            break;
        case 'error':
            return <ErrorMessage />;
            break;
        default:
            throw new Error('Unexpected process state');
    }
}

const ComicsList = () => {

    const [comicsList, setComicsList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [comicEnded, setComicEnded] = useState(false);

    const { getAllComics, process, setProcess } = useMarvelService();

    useEffect(() => {
        onRequest(offset, true)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offset)
            .then(onComicListLoaded)
            .then(() => setProcess('confirmed'))
    }

    const onComicListLoaded = (newComicsList) => {
        let ended = false;
        if (newComicsList.length < 8) {
            ended = true
        }

        setComicsList(comicsList => [...comicsList, ...newComicsList]);
        setNewItemLoading(false);
        setOffset(offset + 8);
        setComicEnded(ended)
    }

    function renderItems(arr) {
        return (
            <ul className="comics__flex">
                {arr.map((item, i) => (
                     <li className="comics__comicsitem" key={i}>
                        <Link to={`/comics/${item.id}`}>
                            <img src={item.thumbnail} alt={item.title} />
                            <div className="comics__comicsname">{item.title}</div>
                        </Link>
                        <div className="comics__price">{item.price}</div>
                    </li >
                ))}
            </ul>

        )
    }

    return (
        <div className="comics__comicslist">
            {setContent(process, () => renderItems(comicsList), newItemLoading)}
            <button
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{ display: comicEnded ? 'none' : 'block' }}
                onClick={() => onRequest(offset)}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;