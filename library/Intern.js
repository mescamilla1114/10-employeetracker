const Employee= require('./Employee');

class Intern extends Employee{
    constructor (name,ID, email, school)
    {
    super (name,ID,email)
        this.school= school;
    
}
getrow () {
    return this.row='Intern';
}


};

module.exports= Intern;