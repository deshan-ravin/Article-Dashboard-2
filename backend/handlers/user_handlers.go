package handlers

import (
	"api/database"
	"api/models"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

// GetUsers Handler to get all users
/*func GetUsers(c *gin.Context) {
	var users []models.User                          // this is not needed, to get all users, we can use database.DB.Find(&users)
	database.DB.Find(&users)
	c.JSON(http.StatusOK, users)
}*/

// Handler to get user by email
func GetUserByEmail(c *gin.Context) {
	var user models.User
    email := c.Param("email")
	result := database.DB.Where("email = ?", email).First(&user)
    if result.Error != nil {
        if result.Error == gorm.ErrRecordNotFound {
            c.Status(http.StatusNotFound)
        } else {
            c.Status(http.StatusInternalServerError)
        }
        return
    }
    c.JSON(http.StatusOK, user)
}

// Handler to create user
func CreateUser(c *gin.Context) {
	var user models.User
	if err := c.ShouldBindJSON(&user); err != nil {
		c.Status(http.StatusBadRequest)
		return
	}
	database.DB.Create(&user)
	c.JSON(http.StatusCreated, user)
}

// Handler to update user
/*func UpdateUser(c *gin.Context) {
	var user models.User
	id := c.Param("id")
	if err := database.DB.First(&user, id).Error; err != nil {                 // this is not needed to update user details, we can use database.DB.First(&user, id) directly
		c.Status(http.StatusNotFound)
		return
	}
	if err := c.ShouldBindJSON(&user); err != nil {
		c.Status(http.StatusBadRequest)
		return
	}
	database.DB.Save(&user)
	c.JSON(http.StatusOK, user)
}*/

// Handler to delete user
func DeleteUser(c *gin.Context) {
	id := c.Param("id")
	var user models.User
	database.DB.First(&user, id)
	if user.Id == 0 {
		c.Status(http.StatusNotFound)
		return
	}
	database.DB.Delete(&user)
	c.JSON(http.StatusOK, gin.H{"message": "User deleted"})
}