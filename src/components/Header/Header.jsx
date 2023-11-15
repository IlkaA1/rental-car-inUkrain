import {HeaderContainer,NavigateTo} from './Header.styled'

export const Header = () => {
    return <>
    <HeaderContainer>
    <NavigateTo to="/">Home</NavigateTo>
    <NavigateTo to="/catalog">All cars</NavigateTo>
    <NavigateTo to="/favorite">Favorite cars</NavigateTo>
    
    </HeaderContainer>
    </>
}