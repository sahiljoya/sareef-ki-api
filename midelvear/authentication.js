import Jwt from "jsonwebtoken";
export const auth = (req,res,next)=>{
    try {
        if (!req.headers["authorization"]) {
            res.status(401).send({
                status:false,
                msg:"authorizasion is incorrect",
                data:{}
            })
            return;
        }

        const token =  req.headers["authorization"].replace("Bearer ","")
        var checktoken = Jwt.verify(token,"khan")
        if( checktoken ){
            next();
            return
        }
        else{
            res.send({
               status:false,
               msg: "token is not valid",
               data:{}
            })
        }
    } catch (error) {
        res.status(401).send({
            status:false,
            msg:"somthing wrong",
            data:{}
        })
        return;
    }
}