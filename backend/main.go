package main
import (
	"api/database"
	"api/routes"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"log"
)

func main() {
	// Load environment variables from .env file
	if err := godotenv.Load(".env"); err != nil {
		log.Fatal("Error loading .env file:", err)
	}

	database.InitDB()

	// Create Gin router
	router := gin.Default()

	// Initialize routes
	routes.InitRoute(router)
	routes.InitArticleRoute(router)
	routes.InitAuthRoute(router)

	// Start server
	if err := router.Run(":8000"); err != nil {
		log.Fatal("Failed to start server:", err)
	}
}