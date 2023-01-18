import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';

const PokemonCard = ({name, image, abilities}) => {
    console.log('abilities ',abilities)
    return (
        <Card
            title={name}
            cover={<img src={image} alt={name} />}
            extra={<StarOutlined/>}
        >
            <Meta description={abilities} />
        </Card>
    )
}

export default PokemonCard;