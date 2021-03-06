import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";


// const app: Express = express();
// app.use(express.json());
// app.use(cors());
export const app = express()

app.use(express.json())
app.use(cors())


// const server = app.listen(process.env.PORT || 3307, () => {
//     if (server) {
//        const address = server.address() as AddressInfo;
//        console.log(`Server is running in http://localhost: ${address.port}`);
//     } else {
//        console.error(`Failure upon starting server.`);
//     }
// });

const port = process.env.PORT || 3308

app.listen(port, () => console.log(`Server is runing on port ${port}`))

// export default app;