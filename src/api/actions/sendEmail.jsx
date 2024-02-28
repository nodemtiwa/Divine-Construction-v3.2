// 'use server'
// import { Resend } from 'resend'

// const resend = new Resend(process.env.RESEND_API_KEY)

// export const sendEmail = async (formData) => {
//     // console.log('code running on server')
//     // console.log(formData.get('first-name'))
//     // console.log(formData.get('last-name'))
//     // console.log(formData.get('email'))
//     // console.log(formData.get('company'))
//     // console.log(formData.get('phone'))
//     // console.log(formData.get('textarea')) 
//     // console.log(formData.get('budget'))

//     const first_name = formData.get('first-name')
//     const last_name = formData.get('last-name')
//     const email = formData.get('email')
//     const company = formData.get('company')
//     const phone = formData.get('phone')
//     const textarea = formData.get('textarea')
//     const budget = formData.get('budget')


//     // || value.length > 500
//     if (!email || typeof email !== 'string' ) {
//         return { error: 'Invalid ' }
//     }

//     try {
//         await resend.emails.send({
//             from: "My Website - Contact Form <onboarding@resend.dev> ",
//             // to: 'nodemdivine5@gmail.com',
//             to: 'azemchap@gmail.com',
//             reply_to: email,
//             subject: `New Order from ${first_name} `,
//             text: textarea
//         })
//     } catch (error) {
//         return {
//             error: error.message,
//             // error: 'Failed to send email'
//         }
//     }

// }