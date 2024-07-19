package models

import (
	"time"

)

type Article struct {
	No    int      `gorm:"primaryKey;autoIncrement"`
	Title  string  `gorm:"column:title"`
	Content string `gorm:"column:content"`
	Date time.Time `gorm:"column:date"`
}