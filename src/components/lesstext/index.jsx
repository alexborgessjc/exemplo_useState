const Lesstext = ({text,maxlength}) =>{
    const texto = text.substr(0, maxlength);       
    
    return(
        <>
            {texto}
        </>
    )
}
export default Lesstext