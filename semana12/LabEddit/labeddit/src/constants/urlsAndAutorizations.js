
export const BASE_URL = 'https://labeddit.herokuapp.com'

const token = localStorage.getItem('token')

export const headers = {
    headers:{
    'Content-Type': 'application/json',

    Authorization : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY4NDU0ZDk0LTIxMjQtNDJhZS04MDJlLWQxZWMwOWQ4YjBjNSIsInJvbGUiOiJHVUVTVCIsImlhdCI6MTYzMDg2OTk0MiwiZXhwIjoxNjMwOTEzMTQyfQ.3BlWSavrl-T9KFjrQGtJMWc8VAJ806UD3SNCrsMh-qY'

    }
}