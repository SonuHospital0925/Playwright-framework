import { Page,expect,test } from "@playwright/test";
import { LoginPage } from "../Pages/Login";



test("verify login page",async ({page})=>{
const LP = new LoginPage(page)
await LP.login();
await expect(page).toHaveTitle("OrangeHRM")
})

