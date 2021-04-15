import nodemailer from "nodemailer"

export default async function handler(req, res) {
    const body = JSON.parse(req.body)
    const {email,message} = body

    if(email.length < 1 || message.length < 1) {
        return res.status(200)
    }

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "educationbytesting",
            pass: "hu23kvTX"
        },

    });
    
    await transporter.sendMail({
        from: "educationbytesting@gmail.com",
        to: "educationbytesting@gmail.com",
        subject: "Полученный отзыв",
        text: `EMAIL: ${email}\nMESSAGE: ${message}`,
    });

    res.status(200)
}