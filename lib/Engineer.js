class Engineer {
    constructor(name,id,email,officeNumber)
    {
      this.name = name;
      this.id = id;
      this.email =email;
      this.email =officeNumber;
    }

    getName()
    {
        return this.name;
    }
    getId()
    {
        return this.id;
    }
    getEmail()
    {
        return this.email;
    }
    getOfficeNumber()
    {
        return this.officeNumber;
    }
    getRole()
    {
        return "Engineer";
    }
}
module.exports = Engineer;
