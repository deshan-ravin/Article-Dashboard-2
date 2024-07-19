package handlers

import (
	"api/database"
	"api/models"
	"net/http"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
	//"gorm.io/gorm"
)


func Signup(c *gin.Context) {
    var user models.User

    if err := c.ShouldBindJSON(&user); err != nil {
        c.Status(http.StatusBadRequest)
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
        c.Status(http.StatusInternalServerError)
        return
    }
    user.Password = string(hashedPassword)

    // Save the user to the database
    if err := database.DB.Create(&user).Error; err != nil {
        c.Status(http.StatusInternalServerError)
        return
    }

    c.JSON(http.StatusCreated, user)
}