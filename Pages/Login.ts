import { LoginLocator } from "../Locators/LoginLocators";
import{Page,Locator}from "@playwright/test"
import { BASEURL,UNAME,PASS } from "../Utils/EnvConfig";

export class LoginPage{

    readonly page:Page;
    readonly UName:Locator;
    readonly Pass:Locator;
    readonly Buttop:Locator;

    constructor(page:Page){

        this.page=page
        this.UName= page.getByPlaceholder('Username')
        this.Pass= page.getByPlaceholder('Password')
        this.Buttop= page.getByRole('button')

    }

    async login(){
    await this.page.goto(BASEURL)
    await this.UName.fill(UNAME)
    await this.Pass.fill(PASS)
    await this.Buttop.click()
      

    }
}