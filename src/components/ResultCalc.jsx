/* eslint-disable react/prop-types */
const ResultCalc = ({data_calculateInvestment}) => {
    return (
        <div className="relative overflow-x-auto overflow-y-auto rounded-lg max-h-[450px]">
            <table className="w-full text-sm text-left rtl:text-right text-gray-400">
                <thead className="text-xs uppercase bg-[#334155]  text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Year
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Investment Value
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Interset (Year)
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total Interset
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Invested Capital
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data_calculateInvestment.map(singleData => {
                        return (
                            <tr className="border-b bg-gray-800 border-gray-700" key={singleData.year}>
                                <th className="px-6 py-4">
                                    {singleData.year}
                                </th>
                                <td className="px-6 py-4">
                                    {singleData.annualInvestment}
                                </td>
                                <td className="px-6 py-4">
                                    {singleData.interest}
                                </td>
                                <td className="px-6 py-4">
                                    {singleData.interest}
                                </td>
                                <td className="px-6 py-4">
                                    {singleData.valueEndOfYear}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ResultCalc;