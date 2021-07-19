class Intern {
    constructor(name,school,username,role,id,email)
    {
     this.name = name;
     this.school = school;
     this.username =username;
     this.role = role;
     this.id = id;
     this.email =email;
   }

   getName()
   {
       return this.name;
   }
   getSchool()
   {
       return this.school;
   }
   getEmail()
   {
       return this.email;
   }
   getUsername()
   {
       return this.username;
   }
   getRole()
   {
       return "Intern";
   }
   getId()
    {
        return this.id;
    }
}
module.exports = Intern