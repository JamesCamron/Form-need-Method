

<------------------Registration Process:----------------->
// Start
// name = input()
// email = input()
// password = input()
// if name && email && password is invalid:
//   return 400 error

// user = find user with email
// if user found:
//   return 400 error

// hash = hash password
// user = save name, email, hash to user model
// return 201
// End

<------------------Login Process:----------------->
// Start
// email = input()
// password = input()

// user = find user with email
// if user not found:
//   return 400 error

// if password not equal to user hash:
//   return 400 error

// token = generate token using user
// return token
// End

<------------------Reset Password:----------------->

// Start
// new-password = Input()
// old-password = Input()
// TODO
//                                      I
// if old-password not equal to user.hash password:
//    return 400 error
// else hashNewPassword = hash new-password
//    save hashNewPassword
//    return 201
// End