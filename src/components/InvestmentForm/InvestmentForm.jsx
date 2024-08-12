import { useState } from "react";
import InputForm from "../InputForm";
import ResultCalc from "../ResultCalc";

const InvestmentForm = () => {
    
    const [investment, setInvestment] = useState(
        {
            'initial' : 0,
            'annual' : 0,
            'expected' : 0,
            'duration' : 0
        }
    );

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
                <InputForm value={investment['initial']} onInputChange={(e) => handleChangeInput(e, 'initial')} >Initial Investment</InputForm>
                <InputForm value={investment['annual']} onInputChange={(e) => handleChangeInput(e, 'annual')}>Annual Investment</InputForm>
                <InputForm value={investment['expected']} onInputChange={(e) => handleChangeInput(e, 'expected')}>Expected Return</InputForm>
                <InputForm value={investment['duration']} onInputChange={(e) => handleChangeInput(e, 'duration')}>Duration</InputForm>
            </section>


            <section className="mx-auto w-1/2">
                <ResultCalc />
            </section>
        </>
    )
}

export default InvestmentForm;