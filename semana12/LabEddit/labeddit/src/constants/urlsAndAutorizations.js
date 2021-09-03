
export const BASE_URL = 'https://labeddit.herokuapp.com'

const token = localStorage.getItem('token')

export const headers = {
    headers:{
    'Content-Type': 'application/json',

    Authorization : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY4NDU0ZDk0LTIxMjQtNDJhZS04MDJlLWQxZWMwOWQ4YjBjNSIsInJvbGUiOiJHVUVTVCIsImlhdCI6MTYzMDY4MTU0NywiZXhwIjoxNjMwNzI0NzQ3fQ.ClNC1CQrJEuEZ_HQp-QWmUFwzTQXE4ajJXSA3oi3KQw'
    }
}

