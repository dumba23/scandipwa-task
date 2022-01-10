import React from "react";

import "./CheckoutProgressBar.style"

export class CheckoutProgressBar extends React.PureComponent {

    renderSteps(url){
        if(url === '/shipping'){
            return "Shipping"
        }
        if(url === "/billing"){
            return "Review & Payments"
        }
        if(url === "/success"){
            return null
        }
    }
    
    render() {
        const { stepMap , checkoutStep } = this.props;
        const currentStep = Object.keys(stepMap).indexOf(checkoutStep);
        const listOfSteps = Object.values(stepMap).slice(0,-1);
        const line = 100 / (Object.keys(listOfSteps).length+1);

        return (
            <div className="Progress-bar"> 
            <div className="bar"></div>
            <div className="bar-completed" style={{ width: `${line*(currentStep+1)}%` }}></div>
            {listOfSteps.map((step,i)=>{
              return( 
                    <div  className="content-container" key={i}> 
                        <div className="content-margin"> 
                            <div className="outer">                   
                            <div className={`${currentStep >= i ? "step-index-active step-index" : "step-index"}` }>{currentStep > i ? <>&#10003;</>: i+1}  </div> 
                            </div> 
                        </div>  
                        <div className="step-name"><p>{this.renderSteps(step.url)}</p></div>   
                    </div>        
              )
            })}
        </div>
        )
    }
}

export default CheckoutProgressBar;