console.log('test')
function add(){
    console.log("Hey");
};

add()
function n(a){
    a++;
    if(a===3)
    {
        return n(a);
    }
        else {
            return a
        }
}