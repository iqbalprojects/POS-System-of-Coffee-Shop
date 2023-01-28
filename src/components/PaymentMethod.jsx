import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const PaymentMethod = () => {
    const [payments, setPayments] = useState([
        { title: "Cash", icon: "money-bill-wave" },
        { title: "Debit Card", icon: "credit-card" },
        { title: "E-Wallet", icon: "qrcode" },
    ]);

    const [paymentSelected, setPaymentSelected] = useState("Cash");

    return (
        <div className="mt-16">
            <h2 className="text-2xl font-medium mb-8">Payment Method</h2>
            <div className="flex justify-between items-center gap-x-6">
                {payments.map((payment, index) => (
                    <button
                        key={index}
                        onClick={() => setPaymentSelected(payment.title)}
                        className={
                            payment.title == paymentSelected
                                ? "flex flex-col items-center gap-y-2 w-28 py-3 rounded-2xl bg-amber-800/10 outline outline-2 outline-amber-900"
                                : "flex flex-col items-center gap-y-2 w-28 py-3 rounded-2xl bg-amber-800/10 opacity-60"
                        }
                    >
                        <FontAwesomeIcon icon={payment.icon} size="2xl" />
                        <p className="font-bold text-sm text-amber-900">
                            {payment.title}
                        </p>
                    </button>
                ))}
            </div>
            <button className="w-full mt-10 bg-amber-900 py-4 rounded-lg text-white text-lg font-bold my-4">
                Print Bills
            </button>
        </div>
    );
};

export default PaymentMethod;
