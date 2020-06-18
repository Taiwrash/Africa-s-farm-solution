/* eslint-disable no-underscore-dangle */
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const user = require("../models/user");

exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        role: req.body.role,
        password: hash,
      });
      user.save().then(() => {
        const token = jwt.sign(
          {
            userId: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          },
          "RANDOM_SECRET_KEY",
          {
            expiresIn: "24h",
          }
        );
        const { role } = user;
        res.status(201).json({
          token,
          role,
        });
      });
    })
    .catch((error) => {
      res.status(500).json({
        error,
      });
    });
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          error: new Error("User not found!"),
        });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({
              error: new Error("Incorrect Password!"),
            });
          }
          const token = jwt.sign(
            {
              userId: user._id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
            },
            "RANDOM_SECRET_KEY",
            {
              expiresIn: "24h",
            }
          );
          const { role } = user;
          res.status(201).json({
            token,
            role,
          });
        })
        .catch((error) => {
          res.status(500).json({
            error,
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        error,
      });
    });
};

// exports.view = (req, res, next) => {
//   User.findById(req.params.id, (err, getUser) => {
//     const data = {
//       firstName: getUser.firstName,
//       lastName: getUser.lastName,
//       email: getUser.email
//     };
//     if (err) {
//       console.log(err);
//     } else {
//       res.json({ data });
//     }
//   });
// };

exports.edit = (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body, (err, updated) => {
    if (err) {
      res.status(403).redirect("/notfound");
    } else {
      res.json(updated);
    }
    // }).then((user) => {
    //   if (user) {
    //     user.firstName = req.body.firstName;
    //     user.lastName = req.body.lastName;
    //     user.image = req.body.image;
    //     user.d_o_b = req.body.dob;
    //     user.gender = req.body.gender;
    //     user.mobile_number = req.body.number;
    //     user.address = req.body.address;
    //     user.city = req.body.city;
    //     user.country = req.body.country;
    //     user.save().then(() => {
    //       res
    //         .status(202)
    //         .json({
    //           user
    //         })
    //         .end();
    //     });
    //   } else {
    //     res.status(403).redirect('/notfound');
    //   }
  });
};

exports.logout = (req, res, next) => {
  if (req.user) {
    res.session.destroy().then(() => {
      res.redirect("/home");
    });
  }
};
