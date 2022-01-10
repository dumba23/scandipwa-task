import ContentWrapper from "Component/ContentWrapper";
import {
    Checkout as CheckoutMain
} from "SourceRoute/Checkout/Checkout.component";
import CheckoutProgressBar from "Component/CheckoutProgressBar/CheckoutProgressBar.component";

export default class Checkout extends CheckoutMain {
    renderProgressBar() {
        const { checkoutStep } = this.props;
        return <CheckoutProgressBar checkoutStep={checkoutStep} stepMap={this.stepMap} />
    }


    render() {
        return (
            <main block="Checkout">
                {this.renderProgressBar()}
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        )
    }
}