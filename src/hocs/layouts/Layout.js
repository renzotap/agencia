import {connect} from 'react-redux'
import { motion } from "framer-motion"

function Layout({children}){
    return(
        <motion.div
        initial={{opacity:0, transition:{duration: 0.2}}}
        animate={{opacity:1, transition:{duration: 0.2}}}
        exit={{opacity:0, transition:{duration: 0.2}}}
        >
            {children}
        </motion.div>
    )
}

const mapStateTopToProps = state =>({

})

export default connect (mapStateTopToProps,{


}) (Layout)