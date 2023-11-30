import axios from "axios";
export const signupApi = async (email, password) => {
    const options = {
        method: 'POST',
        url: 'http://10.0.2.2:8000/api/user/create',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        },
        data: { email: email, password: password }
    }
    try {
        // console.warn(options.data)
        const response = await axios.request(options)
        // console.warn(response)
        return response.data;
    } catch (err) {
        return err
    }
}

export const LoginApi = async (email, password) => {
    const options = {
        method: 'POST',
        url: 'http://10.0.2.2:8000/api/user/signin',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        },
        data: { email: email, password: password }
    }
    try {

        const response = await axios.request(options)
        // console.warn(response)
        return response.data;
    } catch (err) {
        return err
    }
}

export const emailVerfication = async (userId, otp) => {
    const options = {
        method: 'POST',
        url: 'http://10.0.2.2:8000/api/user/varifyEmail',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        },
        data: { userId: userId, otp: otp }  //userId, otp
    }
    try {
        //    console.warn(options.data)
        const response = await axios.request(options)
        // console.warn(response)
        return response.data;
    } catch (err) {
        return err
    }
}

export const forgotPassword = async (email) => {
    const options = {
        method: 'POST',
        url: 'http://10.0.2.2:8000/api/user/forgotPassword',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        },
        data: { email: email }  //userId, otp
    }
    try {
        // console.warn(options.data)
        const response = await axios.request(options)
        // console.warn(response)
        return response.data;
    } catch (err) {
        return err
    }
}
export const creatProductsApi = async (productID, productName,category,quantity,amount,expiry) => {
    const options = {
        method: 'POST',
        url: 'http://10.0.2.2:8000/api/user/createProducts',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        },
        data: {productID:productID, productName:productName,category:category,quantity:quantity,amount:amount,expiry:expiry}
    }
    try {
        // console.warn(options.data)
        const response = await axios.request(options)
        // console.warn(response)
        return response.data;
    } catch (err) {
        return err
    }
}

export const inventoryListsApi = async () => {
    const options = {
        method: 'POST',
        url: 'http://10.0.2.2:8000/api/user/inventoryList',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        },
        data: {}
    }
    try {
        // console.warn(options.data)
        const response = await axios.request(options)
        // console.warn(response)
        return response.data;
    } catch (err) {
        return err
    }
}
export const transactionsListsApi = async () => {
    const options = {
        method: 'POST',
        url: 'http://10.0.2.2:8000/api/user//transactionsList',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        },
        data: {}
    }
    try {
        // console.warn(options.data)
        const response = await axios.request(options)
        // console.warn(response)
        return response.data;
    } catch (err) {
        return err
    }
}
export const searchByName = async (productName) => {
    const options = {
        method: 'POST',
        url: 'http://10.0.2.2:8000/api/user/getProductsByName',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        },
        data: {productName:productName}
    }
    try {
        // console.warn(options.data)
        const response = await axios.request(options)
        // console.warn(response)
        return response.data;
    } catch (err) {
        return err
    }
}


export const transactionById = async (transactionID) => {
    const options = {
        method: 'POST',
        url: 'http://10.0.2.2:8000/api/user/transactionDetail',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        },
        data: {transactionID:transactionID}
    }
    try {
        // console.warn(options.data)
        const response = await axios.request(options)
        // console.warn(response)
        return response.data;
    } catch (err) {
        return err
    }
}

export const inventoryByProductid = async (productID) => {
    const options = {
        method: 'POST',
        url: 'http://10.0.2.2:8000/api/user/inventoryByProductid',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        },
        data: {productID:productID}
    }
    try {
        // console.warn(options.data)
        const response = await axios.request(options)
        // console.warn(response)
        return response.data;
    } catch (err) {
        return err
    }
}


export const transactionAPI= async (
    buyerID,
    productID,
    category,
    quantity,
    amount,
    type
    ) => {
    const options = {
        method: 'POST',
        url: 'http://10.0.2.2:8000/api/user/createTransactions',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        },
        data: {
            buyerId:buyerID,
            productId:productID,
            category:category,
            quantity:quantity,
            amount:amount,
            type:type
        }
    }
    try {
        // console.warn(options.data)
        const response = await axios.request(options)
        // console.warn(response)
        return response.data;
    } catch (err) {
        return err
    }
}

export const searchByTransactionName = async (productName) => {
    const options = {
        method: 'POST',
        url: 'http://10.0.2.2:8000/api/user/getTransactionsByProductName',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        },
        data: {productName:productName}
    }
    try {
        // console.warn(options.data)
        const response = await axios.request(options)
        // console.warn(response)
        return response.data;
    } catch (err) {
        return err
    }
}

export const overViewAPI= async () => {
    const options = {
        method: 'POST',
        url: 'http://10.0.2.2:8000/api/user/OverView',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        },
        data: {}
    }
    try {
        // console.warn(options.data)
        const response = await axios.request(options)
        // console.warn(response)
        return response.data;
    } catch (err) {
        return err
    }
}