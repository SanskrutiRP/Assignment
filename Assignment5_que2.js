class User{
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
        this.coins=0;
        this.courses=[];
    }
    login(){
        console.log(`${this.name} has logged in `);
    }
    logout(){
        console.log(`${this.name} has logged out`);
    }
}
user1=new User('Harry',23,'h@gmail.com');
user1.login();
user1.logout();
class Moderator extends User{
    addCoins(user,inc){
        user.coins+=inc;
        console.log(`${user.name} have ${user.coins} coins`);
    }
    removeCoins(user,dec){
        user.coins-=dec;
        console.log(`${user.name} have ${user.coins} coins`);
    }
}
mod=new Moderator('Ron',34,'r@gmail.com');
mod.login();
mod.addCoins(user1,2);
mod.logout();

class Admin extends Moderator{
    addCourse(user,course){
        user.courses.push(course);
        console.log(`${user.name} have ${user.courses}`);
    }
    removeCourse(user,course){
        user.courses=user.courses.filter(el=>el!=course);
        console.log(`${user.name} have ${user.courses}`);
    }
}

admin=new Admin('Iron man',45,'i@gmail.com');
admin.login();
admin.addCourse(user1,'Javascript');
admin.addCourse(user1,'Java');
admin.removeCourse(user1,'Java');
admin.logout();