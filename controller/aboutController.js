const aboutus = (req,res) =>{
    res.render( '../views/frontend/about',{
        title: 'About us | Dholimara'
    })
}

module.exports = {
     aboutus
}