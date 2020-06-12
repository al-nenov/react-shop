import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getFavorites} from '../redux/favoritesReducer';

function useFavorites() {
    const favorites = useSelector(state => state.favorites);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFavorites())
    }, [dispatch])


    return [favorites]
}

export default useFavorites