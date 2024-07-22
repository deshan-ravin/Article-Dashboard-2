package handlers

import (
    "api/database"
    "api/models"
    "net/http"

    "github.com/gin-gonic/gin"
    "golang.org/x/crypto/bcrypt"
)

func Signup(c *gin.Context) {
    var user models.User

    // Bind JSON payload to the User struct
    if err := c.ShouldBindJSON(&user); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
        return
    }

    // Check if the email already exists
    var existingUser models.User
    if err := database.DB.Where("email = ?", user.Email).First(&existingUser).Error; err == nil {
        c.JSON(http.StatusConflict, gin.H{"message": "Email already registered"})
        return
    }

    // Hash the password
    hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
        return
    }
    user.Password = string(hashedPassword)

    // Save the user to the database
    if err := database.DB.Create(&user).Error; err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create user"})
        return
    }

    // Return the created user
    c.JSON(http.StatusCreated, user)
}
