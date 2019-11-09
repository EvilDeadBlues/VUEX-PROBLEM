enum Strings {

    // ------------------------------
    //           TOKEN     
    // ------------------------------

    TOKEN_INVALID_EN = "This token is invalid. If you have lost it, please resend.",
    TOKEN_EXPIRED_EN = "This token has expired. If you want a new one, please resend.",

    // ------------------------------
    //           REGISTER     
    // ------------------------------

    USERNAME_TAKEN_EN = "This username is taken.",
    USERNAME_LENGTH_EN = "The username length has to be 3-64 characters.",
    USERNAME_INVALID_FORMAT_EN = "The username can contain only alphanumeric characters (a-Z, 0-9, _ -)",
    EMAIL_TAKEN_EN = "This email is taken",
    EMAIL_INVALID_EN = "This email is invalid.",
    PASSWORD_LENGTH_EN = "The password length has to be 8-72 characters.",
    PASSWORD_DOESNT_MATCH_EN = "The passwords do not match",
    SUCCESSFULLY_REGISTERED_EN = "The registration is successful. Please verify your email to confirm the account and use it.",

    // ------------------------------
    //           LOGIN     
    // ------------------------------

    USERNAME_UNEXISTENT_EN = "This username doesn't exist.",
    ACCOUNT_NOT_VERIFIED_EN = "This account is not verified.",
    USERNAME_PASSWORD_INCORRECT_EN = "The username/password combination is incorrect",

    // ------------------------------
    //           MANAGEMENT     
    // ------------------------------

    NICKNAME_LENGTH_EN = "The nickname length has to be 1-64 characters.",
    BIO_LENGTH_EN = "The biography length cannot exceed 65535 characters",

    // ------------------------------
    //           VERIFICATION     
    // ------------------------------

    ACCOUNT_SUCCESSFULY_VERIFIED_EN = "You have successfuly verified your account. Please login",
    ACCOUNT_VERIFIED_EN = "This account is already verified.",
    EMAIL_NOT_FOUND_EN = "The email has been not found",

    // ------------------------------
    //           FRIENDSHIP     
    // ------------------------------

    FRIEND_REQUEST_DENIED_EN = "You have denied a friend request.",
    FRIEND_REQUEST_ACCEPTED_EN = "You have accepted a friend request.",
    FRIEND_REMOVED_EN = "You have removed a friend from your list.",

    // ------------------------------
    //           API
    // ------------------------------

    DOES_USERNAME_EXIST_URL = "/api/doesUsernameExist/",
    IS_EMAIL_TAKEN_URL = "/api/isEmailTaken/",
    VALIDATE_LOGIN_URL = "/api/validateLogin/",
    VALIDATE_VERIFICATION_URL = "/api/validateVerification/",
    LOGIN_URL = "/login",
    REGISTER_URL = "/signup",
    SUCCESS = "0",
};

export default Strings;