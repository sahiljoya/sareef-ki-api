import user from "../models/user.model.js";
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken";
import csv from 'csvtojson'
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
        const userMach = await user.findOne({ number: req.body.number })
        if (userMach) {
            const passMach = await bcrypt.compare(req.body.password, userMach.password)
            if (passMach) {
                const token = await Jwt.sign({ time: Date(), userId: userMach._id }, "khan")
                userMach.token = token
                res.send({
                    status: true,
                    msg: "user login",
                    data: userMach
                })
            } else {
                res.send({
                    status: false,
                    msg: "password wrong",
                    data: {}
                })
            }
        } else {
            res.send({
                status: false,
                msg: "number does not existe",
                data: {}
            })
        }
    } catch (err) {
        res.send({
            status: false,
            msg: " data misteck",
            data: err
        })
    }
}
export const follower = async (req, res) => {
    try {
        // var follow = {}
        const userFollowing = await user.findOneAndUpdate({ username: req.body.username }, req.body)
        userFollowing.following = req.body.following
        //console.log(userFollowing);
        if (userFollowing) {
            const userFollowers = await user.findOneAndUpdate({ username: req.body.username }, req.body)
            var allData = []
            userFollowers.forEach(follow => {
                console.log(follow);

            });
            res.send(userFollowing)
            // console.log(userFollowing);
        }
    } catch (err) {
        res.send({
            status: false,
            msg: " data misteck",
            data: err
        })
    }
}
function inserUserData(Uname, Number, reson, key) {
    return {
        username: Uname,
        number: Number,
        reson: reson,
        key: key
    }
}
export const userInsert = async (req, res) => {
    console.log("path-----",req.file.path);
    const jsonarray = await csv().fromFile(req.file.path)
    var data = await user.create(jsonarray)
   console.log("local-----------",jsonarray);
   res.send({
    data:data
   })
   return
    // var success = 0
    // var rejected = []
    // jsonarray.forEach(async (value, key) => {
    //     // const find = await user.findOne({ number: value.number })
    //     // if (!value.number) {
    //     //     rejected.push(inserUserData(value.username, value.number, 'pleass enter number', key))
    //     // } else if (find) {
    //     //     rejected.push(inserUserData(value.username, value.number, 'user allready exist', key))
    //     // }
    //     // else{
    //         // value.password = await bcrypt.hash(value.password,10)
    //         // console.log("password----",value.password);
    //         // const creatUser = await user.create(value)
    //         // if (creatUser) {
    //         //     success++
    //         // }
    //     }
    // });
    setTimeout(() => {
        if (success == 0) {
            res.send({
                status: false,
                msg: "No data inserted.",
                success: success,
                rejected_data: rejected,
                total: jsonarray.length
            })
        } else {
            res.send({
                status: true,
                msg: "Data inserted succefully.",
                //rejected_data:rejected,
                success: success,
                rejected_data: rejected,
                total: jsonarray.length

            })

        }
    }, "1000");
};