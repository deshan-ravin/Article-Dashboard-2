package handlers

import (
	"api/database"
	"api/models"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

//create article handler
func CreateArticle(c *gin.Context) {
	var article models.Article
	if err := c.ShouldBindJSON(&article); err != nil {
		c.Status(http.StatusBadRequest)
		return
	}
	database.DB.Create(&article)
	c.JSON(http.StatusCreated, article)
}


// Update an article
func UpdateArticle(c *gin.Context) {
	var article models.Article
    no := c.Param("no")
    
	if err := database.DB.First(&article, no).Error; err != nil {
        if err == gorm.ErrRecordNotFound {
            c.Status(http.StatusNotFound)
        } else {
            c.Status(http.StatusInternalServerError)
        }
        return
    }
    
    if err := c.ShouldBindJSON(&article); err != nil {
        c.Status(http.StatusBadRequest)
        return
    }
    
	database.DB.Save(&article)
    c.JSON(http.StatusOK, article)
}

//delete article handler

func DeleteArticle(c *gin.Context) {
	var article models.Article
	no := c.Param("no")
	
	if err := database.DB.Delete(&article, no).Error; err != nil {
		if err == gorm.ErrRecordNotFound {
			c.Status(http.StatusNotFound)
		} else {
			c.Status(http.StatusInternalServerError)
		}
		return
	}
	
	database.DB.Delete(&article)
	c.Status(http.StatusNoContent)
}

// Fetch all articles handler
func GetArticles(c *gin.Context) {
    var articles []models.Article
    if err := database.DB.Find(&articles).Error; err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch articles"})
        return
    }
    c.JSON(http.StatusOK, articles)
}