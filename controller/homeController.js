const home = (req,res) =>{
    res.render('../views/frontend/home',{
        title: 'Home | Dholimara'
    })
}

module.exports = {
     home
}