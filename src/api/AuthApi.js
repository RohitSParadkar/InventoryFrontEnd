import axios from "axios";
export const signupApi = async(email,password,name) => {
    const options = {
        method: 'POST',
        url: 'http://10.0.2.2:8000/api/user/create',
        headers:{
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        },
        data :{email:email,password:password,name:name}
    }
    try{
        // console.warn(options.data)
        const response = await axios.request(options)
        console.warn(response)
        return response.data;
    }catch(err){
        return err
    }     
}

export const LoginApi = async(email,password) => {
    const options = {
        method: 'POST',
        url: 'http://10.0.2.2:8000/api/user/signin',
        headers:{
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        },
        data :{email:email,password:password}
    }
    try{

        const response = await axios.request(options)
        console.warn(response)
        return response.data;
    }catch(err){
        return err
    }     
}

export const emailVerfication = async(userId,otp) => {
    const options = {
        method: 'POST',
        url: 'http://10.0.2.2:8000/api/user/varifyEmail',
        headers:{
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        },
        data :{userId:userId,otp:otp}  //userId, otp
    }
    try{
    //    console.warn(options.data)
        const response = await axios.request(options)
        console.warn(response)
        return response.data;
    }catch(err){
        return err
    }     
}

export const forgotPassword = async(email) => {
    const options = {
        method: 'POST',
        url: 'http://10.0.2.2:8000/api/user/forgotPassword',
        headers:{
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        },
        data :{email:email}  //userId, otp
    }
    try{
       console.warn(options.data)
        const response = await axios.request(options)
        console.warn(response)
        return response.data;
    }catch(err){
        return err
    }     
}