import DefaultLayout from "../layouts/DefaultLayout";
import Checkout from "../components/Checkout";
import NewSletter from "../components/NewSletter";

function CheckoutPage() {
    return ( 
        <DefaultLayout>
            <Checkout/>
            <NewSletter/>
        </DefaultLayout>
     );
}

export default CheckoutPage;