export default class Home{
    // render elements onto page

    constructor(){
        //when home instance is created, call render
        this.render()
    }
    render(){
        let appElem = document.getElementById('app');
        appElem.innerHTML += `
        <h1 class='text-center'>Social Media Page</h1>
        `
    }
}