import Swal from 'sweetalert2'

const success = (message) => {

    Swal.fire({
        title: 'SUCCESS',
        text: message,
        icon: 'success'
    })
}

const warning = (message) => {

    Swal.fire({
        title: 'WARNING',
        text: message,
        icon: 'warning'
    })
}

const error = (message) => {

    Swal.fire({
        title: 'ERROR',
        text: message,
        icon: 'error'
    })
}

export default {
    success,
    warning,
    error
}