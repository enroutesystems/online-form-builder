const LinkAnswer = ({responses}) => {

    return(
        <div className={`bg-${responses[0].question.cardColor}-100 flex items-center justify-center py-12 w-full`}>
            <div className="w-2/3">
                <div className="text-lg font-semibold mb-4">
                    {responses[0].question.number}. {responses[0].question.text}
                </div>
                <div className="my-3 text-sm space-y-2">
                    {responses.map((response,index) => (
                        <div key={response.question.quiestionId + response.user.email + index}>
                            {response.response.map(link => (
                                <div>
                                    <a key={'link' + response.question.quiestionId + response.user.email + link.index} 
                                    href={`//${link.text}`} target='_blank' className="font-semibold underline text-blue-600">
                                        {link.text.slice(2)}
                                    </a>
                                    <span className="text-gray ml-3 text-gray-500 italic">
                                        - {response.user.email}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LinkAnswer