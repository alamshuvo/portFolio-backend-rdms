import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middleware/gobalErrorHandler';



 import cookieParser from 'cookie-parser'
import notFound from './app/middleware/notFound';
import router from './app/routes';


const app:Application = express();

app.use(cors());
 app.use(cookieParser())
//parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// cron.schedule('* * * * *', () => {
//     try {
//         appointmentService.cancelUnpaidAppointments();
//     } catch (error) {
//         console.error("error");
//     }
//   });
  
app.get('/',(req:Request,res:Response)=>{
    res.send({
        Message:"My PortFolio Server..."
    })
})
app.use('/api/v1',router);
 app.use(globalErrorHandler);

app.use(notFound)
export default app ;