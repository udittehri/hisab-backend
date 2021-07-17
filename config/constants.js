const constants = {

    authSecretToken: 'Exception',

    status: { active: 1, inactive: 2, pending: 3},

    googleClientId: '210682269861-69sob8m1l5rjh60fihoeflgcg8ll6b6g.apps.googleusercontent.com',

    facebookAuth: {
        clientId: '2050097381958688',
        clientSecret: '331af030e2ef57eefdb8b822ef46dddc'
    },

    otp: {
        authKey: '250114Acu4D4Sl5c04d060',
        expiry: 30,
        sender: 'DEMOMSG',
        countryCode: 91,// pakistan => 92
    },

    slots: {
        days: 7, //max days for deliver
        eachSlotTime: 2 //hours time for each slot
    },

    tax: [
        // {
        //     name: 'CGST',
        //     percentage: 2.5
        // }, 
        // {
        //     name: 'SGST',
        //     percentage: 2.5 
        // }
    ],

    deliveryCharges: [

        {
            order_amount: 500,
            charges: 100
        },
        {   
            order_amount: 1000,
            charges: 50
        },
        {
            order_amount: 2000,
            charges: 20
        }
    ],
    
    pagination: {
        pageNo: 1,
        perPage: 10
    },

    adminMailRecipients: [ 'khushal.pahuja@enukesoftware.com' ],

    mailer: {
        service: 'gmail',
        email: 'khushal.pahuja@enukesoftware.com',
        password: 'Quartz@9711',
        mailFrom: '"Aapki Dokan" <no-reply@aapkidokan.com>'
    },

    momentTimezone: "Asia/Kolkata"
    // momentTimezone: "Asia/Karachi"
}

module.exports = constants;