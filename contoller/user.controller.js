import user from "../models/user.model.js";
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken";
export const sing = async (req, res) => {
    try {
        const idMach = await user.findOne({ number: req.body.number })
        if (idMach) {
            res.send({
                status: false,
                "msg": "number allready exist",
                data: {}
            })

        } else {
            const pass = await bcrypt.hash(req.body.password, 10)
            req.body.password = pass
            const creat = await user.create(req.body)
            creat.token = await Jwt.sign({ time: Date(), userId: creat._id }, "khan")
            res.send({
                status: true,
                "msg": "sing successfully",
                data: creat
            })

        }
    } catch (error) {
        res.send(error)
    }
}

export const login = async (req, res) => {
    try {
        const numberMach = await user.findOne({ number: req.body.number })
        const emailMach = await user.findOne({ email: req.body.email })
        if (numberMach) {
            const machPass = await bcrypt.compare(req.body.password, numberMach.password)
            if (machPass == true) {
                numberMach.token = await Jwt.sign({ time: Date(), userid: numberMach._id }, "khan")
                // const token = await Jwt.sign({time:Date(),userid:numberMach._id},"khan")
                // numberMach.token=token
                res.send({
                    status: true,
                    "msg": "Login successfully",
                    data: numberMach
                })
            } else {
                res.send({
                    status: false,
                    "msg": "somthing was wrong pleass try aggain",
                    data: {}
                })
            }
        } else if (emailMach) {
            const emailpass = await bcrypt.compare(req.body.password, emailMach.password)
            if (emailpass == true) {
                emailMach.token = await Jwt.sign({ time: Date(), userid: emailMach._id }, "khan")
                // const token = await Jwt.sign({time:Date(),userid:numberMach._id},"khan")
                // numberMach.token=token
                res.send({
                    status: true,
                    "msg": "Login successfully",
                    data: emailMach
                })
            } else {
                res.send({
                    status: false,
                    "msg": "somthing was wrong pleass try aggain",
                    data: {}
                })
            }
        } else {
            res.send({
                status: false,
                "msj": "Your accunt is note created pleass try aggain",
                data: {}
            })
        }
    } catch (err) {
        res.send(err)
    }
}

export const alldata = async (req, res) => {
   const userSearch = await user.aggregate([
    {
        $match:{
            username:{$regex:req.query.search}
        }
    },
    {
        "$lookup":{
            "from":"shecma",
            "localField":"_id",
            "foreignField":"shecma",
            "as":"user"
        }
    },
    {
        "$unwind":{
            path:"$user",
            preserveNullAndEmptyArrays:true
        }
    }
   ])
   res.send(userSearch)
}
export const update = async (req, res) => {
    try {
        const up = await user.findOneAndUpdate({ _id: req.body.id }, req.body)
        if (up) {
            res.send({
                status: true,
                msg: "data update",
                data: up
            })
        } else {
            res.send({
                status: true,
                msg: "somthing wrong ",
                data: {}
            })
        }
    } catch (error) {
    }
}




export const deletedata = async (req, res) => {
    try {
        const lele = await user.findOne({ email: req.body.email })
        if (lele) {
            const word = await bcrypt.compare(req.body.password, lele.password)
            if (word == true) {
                var dele = await user.findByIdAndDelete(lele)
                res.send({
                    status: true,
                    msg: "your account delete successfully",
                    data: lele
                })
            } else {
                res.send({
                    status: false,
                    msg: "password incorrect pleass try aggain",
                    data: {}
                })
            }
        } else {
            res.send({
                status: false,
                msg: "email dose not exist",
                data: {}
            })
        }
    } catch (error) {
        res.send({
            status: false,
            msg: "something wrong",
            data: {}
        })
    }
}

export const resendOtp = async (req, res) => {
    try {
        var otp = Math.floor(1000 + Math.random() * 9000);
        req.body.otp =otp
        const userfind = await user.findOneAndUpdate({ number: req.body.number }, req.body)
        userfind.otp =req.body.otp
        //console.log(userfind);
        //console.log("newotp----",otp);
        if (userfind) {
            res.send({
                status: true,
                msg: "success",
                data: userfind
            })
        } else {
            res.send({
                status: false,
                msg: "wrong data",
                data: {}
            })
        }
    } catch (rr) {
        res.send({
            status: false,
            msg: "somthing wrong with req.",
            data: rr
        })
    }
}



export const otpVarify = async (req, res) => {
    try {
        const findOtp = await user.findOne({ number: req.body.number, otp: req.body.otp })
        //console.log("data---", findOtp);
        if (findOtp) {
            var dataUpdate = {}
            dataUpdate.getnumberVerify = true
            await user.findByIdAndUpdate({_id:findOtp.id},dataUpdate)
            findOtp.getnumberVerify = true
            res.send({
                status:true,
                msg:"otp verify seccessfully",
                data:findOtp
            })
        }else{
            res.send({
                status:false,
                msg:"otp wron & number misteck pleace check out",
                data:{}
            })
        }
    } catch (rr) {
        res.send({
            status: false,
            msg: "somthing wrong with req.",
            data: rr
        })
    }
}