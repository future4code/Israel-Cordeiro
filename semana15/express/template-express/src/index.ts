import { countries } from './data';
import express, {Request, Response} from 'express';
import cors from 'cors';
import { country } from "./types"


const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () =>{
    console.log('Sucesso o servidor esta disponivel em http://localhost:3003.')
})

//exercicio 1
app.get('/countries', (req:Request, res:Response) =>{
    res.status(200).send(countries)

})

//exercicio 2
app.get('/countries/id:', (req:Request, res:Response) =>{
    const result = countries.map(country => ({
        id: country.id,
        name: country.name
      }))
      res
        .status(200)
        .send(result)

})

//Exercicio 3-

app.get('/countries/search/', (req: Request, res: Response) => {
    try {
        let result: country[] = countries

        if (req.query.name) {
            result = result.filter(
                country => country.name.toLowerCase().includes((req.query.name as string).toLowerCase())
            )
        }

        if (req.query.capital) {
            result = result.filter(
                country => country.capital.toLowerCase().includes((req.query.capital as string).toLowerCase())
            )
        }

        if (req.query.continent) {
            result = result.filter(
                country => country.continent.toLowerCase().includes((req.query.continent as string).toLowerCase())
            )
        }

        if (!req.query.name && !req.query.capital && !req.query.continent) {
            res.statusCode = 400
            throw new Error('Please include query')
        }

        if (result.length === 0) {
            res.statusCode = 404
            throw new Error('Country not found')
        }

        res.status(200).send(result)


    } catch (error: any) {
        res.send(error.message)
    }

})

//exercicio 4

// app.put('/countries/:id', (req: Request, res: Response) =>{
//     try {
//         let result: country[] = countries

//         if()
//     }
// })





  // const result = countries.find((country) => country.id === Number(req.params.id))

    // if(result){
    //     res.send(result)
    // }else{
    //     res.status(404).send('Country not found')
    // }