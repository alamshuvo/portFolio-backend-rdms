import { UserRole } from "@prisma/client"
import { prisma } from "../src/shared/prisma"
import bcrypt from 'bcrypt'


const seedAdmin =async()=>{
try {
    const isExistAdmin = await prisma.admin.findFirst({
        where:{
            role:UserRole.ADMIN
        }
    })
    if (isExistAdmin) {
        console.log("admin is already exist");
        return
    }
    const hashedPassword = await bcrypt.hash("adminPassword",15)
    const adminData = await prisma.admin.create({
        data:{
            name:"Iftakhar Alam",
            email:"admin@gmail.com",
            password:hashedPassword,
            role:UserRole.ADMIN,
        }
    })
    console.log(adminData," Admin created sucessfully");

} catch (error) {
    console.log(error);
}
finally{
    await prisma.$disconnect();
}
}

seedAdmin()
