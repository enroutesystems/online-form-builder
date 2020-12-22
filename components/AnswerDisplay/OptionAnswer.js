import questionTypes from '../../helpers/questionTypes'

const OptionAnswer = ({responses}) => {

    const getEmails = (value) => {
        let emails = ''
        let counter = 0

        const multiOptionsFilter = (response) => response.optionAnswerId === value
        const rangeFilter = (response) => response.response === value

        responses.filter(responses[0].question.type === questionTypes.multiOptions ? multiOptionsFilter : rangeFilter)
        .map(response => {
            
            emails += response.user.email + ' | '
            counter++
        })

        return {
            string: emails.slice(0, emails.length-3),
            count: counter
        }
    }    

    const renderMultiOptions = () => {
        return responses[0].question.options.map((option, index) => (
            <div key={option.optionAnswerId} className="border border-gray-300 p-4 bg-white rounded text-sm">
                <div className="text-gray-400 mb-3 font-italic">
                    {getEmails(option.optionAnswerId).string}
                </div>
                {option.text}
                <div className='text-right mt-2 text-gray-600'>Count: {getEmails(option.optionAnswerId).count}</div>
            </div>
        ))
    }

    const renderRange = () => {

        const arrayValues = []

        responses.map(response => {
            if(arrayValues.includes(response.response))
                return response
            else{
                arrayValues.push(response.response)
                return response
            }
        })

        return arrayValues.map((value, index) => (
            <div key={'' + value + index} className="border border-gray-300 p-4 bg-white rounded text-sm">
                <div className="text-gray-400 mb-3 font-italic">
                    {getEmails(value).string}
                </div>
                {value}
                <div className='text-right mt-2 text-gray-600'>Count: {getEmails(value).count}</div>
            </div>
        ))
    }


    return(
        <div className={`bg-${`blue`}-100 flex items-center justify-center py-12 w-full`}>
            <div className='w-2/3'>
                <div className="text-lg font-semibold mb-4">
                    {responses[0].question.number}. {responses[0].question.text}
                </div>
                <div className="grid grid-cols-2 gap-3">
                    {responses[0].question.type === questionTypes.multiOptions
                        ? renderMultiOptions()
                        : renderRange()
                    }
                </div>
            </div>
        </div>
    )
}

export default OptionAnswer