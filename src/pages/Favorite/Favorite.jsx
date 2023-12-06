import { useSelector } from 'react-redux';
import { favoriteCars } from '../../redux/selectors';
import {Wrapper,NotFound} from '../CarsCatalog /CarsCatalog.styled';
import CardItem from '../../components/CardItem/CardItem';


export const Favorite = () => {

    const favoriteList = useSelector(favoriteCars)
    console.log(favoriteList)

  
    
    return <>{favoriteList &&  <Wrapper>
        {favoriteList.length > 0? (favoriteList.map(item => <CardItem data={item} key={item.id} ></CardItem>)):
        (<NotFound><p>Sorry, the list of favorite cars is empty!</p></NotFound>)}
      </Wrapper>}</>
}