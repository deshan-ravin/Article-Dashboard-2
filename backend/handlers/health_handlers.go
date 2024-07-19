package handlers

import (
	"api/database"
	"net/http"

	"github.com/gin-gonic/gin"
)

// HealthCheck Handler for health check database connection
func HealthCheck(c *gin.Context) {
	sqlDB, err := database.DB.DB()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "message": "Database connection error"})
		return
	}
	if err := sqlDB.Ping(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "message": "Database ping error"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"status": "ok", "message": "Database connection OK"})
}