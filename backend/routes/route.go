package routes

import (
	"api/handlers"
	"github.com/gin-gonic/gin"
)

func InitRoute(router *gin.Engine) {
	//router.GET("/api/users", handlers.GetUsers)
	router.POST("/api/users", handlers.CreateUser)
	router.GET("/api/users/:email", handlers.GetUserByEmail)
	//router.PUT("/api/users/:id", handlers.UpdateUser)
	router.DELETE("/api/users/:id", handlers.DeleteUser)   // Delete user by id this will not be used for now
	router.GET("/health", handlers.HealthCheck)
	router.POST("/api/login", handlers.Login)
	router.POST("/api/signup", handlers.Signup)
}


func InitArticleRoute(router *gin.Engine) {
	router.POST("/api/articles", handlers.CreateArticle)
	router.PUT("/api/articles/:no", handlers.UpdateArticle)
	router.DELETE("/api/articles/:no", handlers.DeleteArticle)
	router.GET("/api/articles/:no", handlers.GetArticleByNo)
}