import { useHttp } from '../hooks/http.hook';

const API_BASE = process.env.REACT_APP_API_BASE;
const API_KEY = process.env.REACT_APP_API_KEY;

const useMarvelService = () => {
    const { request, clearError, process, setProcess } = useHttp();

    const _baseOffset = 210;

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${API_BASE}characters?limit=9&offset=${offset}&${API_KEY}`);
        return res.data.results.map(_transformCharacter)
    }
    const getCharacterByName = async (name) => {
        const res = await request(`${API_BASE}characters?name=${name}&${API_KEY}`);
        return res.data.results.map(_transformCharacter);
    }
    const getCharacter = async (id) => {
        const res = await request(`${API_BASE}characters/${id}?${API_KEY}`);
        return _transformCharacter(res.data.results[0])
    }
    const getAllComics = async (offset = _baseOffset) => {
        const res = await request(`${API_BASE}comics?limit=8&offset=${offset}&${API_KEY}`);
        return res.data.results.map(_transformComics)
    }
    const getComics = async (id) => {
        const res = await request(`${API_BASE}comics/${id}?${API_KEY}`);
        return _transformComics(res.data.results[0])
    }

    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }
    const _transformComics = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            description: comics.description || 'There is no description',
            pageCount: comics.pageCount ? `${comics.pageCount} p.` : 'No information about the number of pages',
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            language: comics.textObjects.language || 'en-us',
            price: comics.prices[0].price ? `${comics.prices[0].price} $` : 'Not available',
        }
    }

    return {
        clearError,
        process,
        setProcess,
        getAllCharacters,
        getCharacter,
        getCharacterByName,
        getAllComics,
        getComics
    }
}
export default useMarvelService;