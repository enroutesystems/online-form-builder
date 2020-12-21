import MapBuilder from '../Map/MapBuilder'

const MapAnswer = ({responses}) => {

    return (
        <div className={`bg-${responses[0].question.cardColor}-100 flex items-center justify-center py-12 w-full`}>
            <div className="w-2/3">
                <div className="text-lg font-semibold mb-12">
                    {responses[0].question.number}. {responses[0].question.text}
                </div>
                <div className="grid grid-cols-3 gap-4 text-xs">
                    {responses.map((response, index) => (
                        <div key={response.question.quiestionId + response.user.email + index} className="bg-white border border-gray-300 rounded">
                            <div className="text-2xl font-semibold flex items-center justify-center px-6 py-16">
                                <MapBuilder latitude={response.response.latitude} longitude={response.response.longitude}/>
                            </div>
                            <div className="border-t border-gray-300 p-3 font-semibold">
                                {response.user.email}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MapAnswer