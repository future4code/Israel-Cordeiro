
export const BASE_URL = 'https://labeddit.herokuapp.com'

const token = localStorage.getItem('token')

export const headers = {
    headers:{
    'Content-Type': 'application/json',

    Authorization : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY4NDU0ZDk0LTIxMjQtNDJhZS04MDJlLWQxZWMwOWQ4YjBjNSIsInJvbGUiOiJHVUVTVCIsImlhdCI6MTYzMDU4MzY1MiwiZXhwIjoxNjMwNjI2ODUyfQ.uZWVX2v_47j_zzb7F2NwhD0qJt7X4mhqdc7fd0rIbL0'
    }
}

