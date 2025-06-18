import conf from "../config/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectID)
        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){
        try {
          const userAccount =  await this.account.create(ID.unique(), email,password, name);
          if(userAccount){
            // call another function like login
            return this.login({email,password});
          }else {
            return userAccount
          }
            
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password);
           
        } catch (err) {
            throw err
            
        }
    }

    async getCurrentUser(){
        try {
            await this.account.get();
        } catch (err) {
            throw err
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error
        }
    }


}


const authService = new AuthService();
export default authService

// This are all the service file.