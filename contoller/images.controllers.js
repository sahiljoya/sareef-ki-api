import userImage from "../models/user.images.model.js";
export const uploadProfile = async(req,res)=>{
    //  try {
          var imageData = []
         // console.log("data=---",req.files);
          req.files.forEach(image => {
              var imagetype = ''
              if (image.mimetype == "image/jpg"||image.mimetype == "image/jpeg") {
                  imagetype = 'jpg'
              }else if (image.mimetype == 'image/png') {
                  imagetype = 'png'
              }
          let imageStoreg = {
              type:imagetype,
              path:image.filename,
              fullpath:"send to Sahil Database"+image.path
          }
          imageData.push(imageStoreg)
          });
          req.body.image = imageData
          req.body.profilepic =  req.body.image
          //console.log("image---",req.body.image);
          const userCeart = await userImage.create(req.body)
         // console.log(userCeart);
          if (userCeart) {
              res.send({
                  status: true,
                  msg: "profile update success",
                  data: userCeart
              })
          } else {
              res.send({
                  status: false,
                  msg: 'data dot sai h sai karo',
                  data: {}
              })
          }
      // } catch (err) {
      //     res.send({
      //         status: false,
      //         msg: 'khan',
      //         data: err
      //     })
      // }
  }