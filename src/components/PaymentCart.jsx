import Bills from "./Bills";
import MenuProfile from "./MenuProfile";
import PaymentMethod from "./PaymentMethod";

const PaymentCart = (props) => {
    return (
        <div className="bg-white mt-1 flex flex-col rounded-xl shadow-xl">
            <MenuProfile />
            <div className="px-5">
                <Bills {...props} />
                <PaymentMethod />
            </div>
        </div>
    );
};

export default PaymentCart;
