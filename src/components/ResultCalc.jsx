const ResultCalc = () => {
    return (
        <div className="relative overflow-x-auto rounded-lg">
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
                    <tr className="border-b bg-gray-800 border-gray-700">
                        <th className="px-6 py-4">
                            1
                        </th>
                        <td className="px-6 py-4">
                            Silver
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ResultCalc;