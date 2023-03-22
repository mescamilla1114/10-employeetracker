const Employee= require('./Employee');

class Manager extends Employee{
    constructor (name,ID, email, officenum)
    {
    super (name,ID,email)
        this.officenum= officenum;
    
}
getrow () {
    return this.row='Manager';
}


};

module.exports= Manager;