package handlers

import (
	"api/database"
	"api/models"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"golang.org/x/crypto/bcrypt"
)

func Login(c *gin.Context) {
    var user models.User
    var input struct {
        Email    string `json:"email"`
        Password string `json:"password"`
    }

    if err := c.ShouldBindJSON(&input); err != nil {
        c.Status(http.StatusBadRequest)
        return
    }

    // Find the user by email
    if err := database.DB.Where("email = ?", input.Email).First(&user).Error; err != nil {
        if err == gorm.ErrRecordNotFound {
            c.Status(http.StatusUnauthorized)
        } else {
            c.Status(http.StatusInternalServerError)
        }
        return
    }

    // Compare the hashed password with the provided password
    if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(input.Password)); err != nil {
        c.Status(http.StatusUnauthorized)
        return
    }

    c.JSON(http.StatusOK, gin.H{
        "message": "Login successful",
    })
}
