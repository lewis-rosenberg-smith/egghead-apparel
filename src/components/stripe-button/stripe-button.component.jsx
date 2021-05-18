import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Logo from '../../assets/egghead.svg'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IsFtvAgG9CVVmEFgrngP52NLKkA3zRHTs93tFvqgclZ8yvRDFcB4ONJfkspYSbAsjkFwdL1N7cxiJfv8vhdB5Sc00aJEqY5Ih";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Egghead Apparel Ltd."
      billingAddress
      ShippingAddress
      image= 'https://svgshare.com/i/XNR.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
