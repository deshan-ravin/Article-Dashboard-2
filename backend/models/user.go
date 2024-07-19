package models

type User struct {
	Id    int    `gorm:"primaryKey;autoIncrement"`
	Name  string `gorm:"column:name"`
	Email string `gorm:"column:email"`
	Password string `gorm:"column:password"`
}