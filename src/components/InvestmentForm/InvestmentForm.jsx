import { useState } from "react";
import InputForm from "../InputForm";
import ResultCalc from "../ResultCalc";

import {calculateInvestmentResults, formatter} from '../../util/investment';

let calculate_investment = [];

const InvestmentForm = () => {
    
    const [investment, setInvestment] = useState(
        {
            'initialInvestment' : 0,
            'annualInvestment' : 0,
            'expectedReturn' : 0,
            'duration' : 0
        }
    );


    if(investment['initialInvestment'] > 0 && 
        investment['annualInvestment'] > 0 &&
        investment['expectedReturn'] > 0 &&
        investment['duration'] > 0
    ){
        calculate_investment = calculateInvestmentResults(investment);
    }else{
        calculate_investment = [];
    }

    const handleChangeInput = (e, type) => {
        setInvestment(pi => {
            const investment = {
                ...pi,
                [type] : e.target.value
            }

            return investment
        });
    }

    return (
        <>
            <section className='grid grid-cols-2 gap-4 bg-[#334155] p-4 w-1/2 mx-auto rounded-lg min-h-[200px]'>
                <InputForm value={investment['initialInvestment']} onInputChange={(e) => handleChangeInput(e, 'initialInvestment')} >Initial Investment</InputForm>
                <InputForm value={investment['annualInvestment']} onInputChange={(e) => handleChangeInput(e, 'annualInvestment')}>Annual Investment</InputForm>
                <InputForm value={investment['expectedReturn']} onInputChange={(e) => handleChangeInput(e, 'expectedReturn')}>Expected Return</InputForm>
                <InputForm value={investment['duration']} onInputChange={(e) => handleChangeInput(e, 'duration')}>Duration</InputForm>
            </section>


            <section className="mx-auto w-1/2 pb-10">
                {calculate_investment.length !== 0 &&
                    <ResultCalc data_calculateInvestment={calculate_investment} />
                }
            </section>
        </>
    )
}

export default InvestmentForm;