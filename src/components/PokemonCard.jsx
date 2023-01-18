import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { StartButton } from './StartButton';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../actions';

const PokemonCard = ({name, image, abilities, id, favorite}) => {
    const dispatch = useDispatch();

    const handleOnFavorite = () => {
        dispatch(setFavorite({pokemonId: id}))
    }
    return (
        <Card
            title={name}
            cover={<img src={image} alt={name} />}
            extra={<StartButton isFavorite={favorite} onClick={handleOnFavorite}/>}
        >
            <Meta description={abilities} />
        </Card>
    )
}

export default PokemonCard;