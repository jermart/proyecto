import { makeStyles } from "@mui/material"


const Leyaut = (children) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default Leyaut

const useStyles = makeStyles((theme)=>( {
    display: "flex",
}))
