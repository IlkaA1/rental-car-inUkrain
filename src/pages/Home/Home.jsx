
import {Container,ForRent,FlexContainer,NavigateToRent,Center} from './Home.styled'
import {PagesContainer} from '../../components/App.styled'

export const Home = () => {
    return <><Container>
        <p>Welcome!</p> 
        How rental works
        </Container>
        <PagesContainer>
            <Center>
            <FlexContainer>
        <ForRent>
            <h2>Driver Requirements:</h2>
            <p>Ensure you meet the rental company's driver requirements. This typically includes having a valid driver's license, being of  age ( 18 or older).</p>
        </ForRent>
        <span><ForRent>
            <h2>Payment:</h2>
            <p>Provide payment information to secure the reservation. This usually involves a credit or debit card. Be aware of any deposit requirements or holds on your card.</p>
        </ForRent></span>
        <ForRent>
            <h2>Pick-Up:</h2>
            <p>On the day of your reservation, go to the designated pick-up location at the specified time. Bring your driver's license, the credit card used for the reservation, and any other required documents.</p>
        </ForRent>
        <span><ForRent>
            <h2>Vehicle Inspection:</h2>
            <p>Before accepting the car, inspect it for any existing damage. Note any scratches, dents, or other issues on the rental agreement or a provided inspection form. Ensure that the  company is aware of pre-existing conditions.</p>
        </ForRent></span>
        <ForRent>
            <h2>During the Rental:</h2>
            <p>Adhere to the terms of the rental agreement. Respect mileage limits, return the car on time, and follow any other guidelines provided by the rental company.</p>
        </ForRent>
        <span><ForRent>
            <h2> Return:</h2>
            <p>Return the car at the agreed-upon time and location. The rental company will inspect the vehicle, and if there are no new damages beyond the pre-existing conditions, you should be clear to go.</p>
        </ForRent></span>

        <NavigateToRent to="/catalog">Go to rent</NavigateToRent>
        </FlexContainer>
        </Center>
        </PagesContainer>
        
        


        </>

}