const OpenAnswer = ({responses}) => {

    return(
        <div className={`bg-${responses[0].question.cardColor}-100 flex items-center justify-center py-12 w-full`}>
            <div className="w-2/3">
                <div className="text-lg font-semibold mb-4">
                    {responses[0].question.number}. {responses[0].question.text}
                </div>
                <div className="grid grid-cols-2 gap-3">
                    {responses.map((response, index) => (
                        <div key={response.question.quiestionId + response.user.email + index} className="border border-gray-300 p-4 bg-white rounded text-sm">
                            <div className="text-gray-400 mb-3 font-italic">
                                {response.user.email}
                            </div>
                            {response.response}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OpenAnswer