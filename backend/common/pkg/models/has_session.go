package models

import (
	"github.com/Conabit-Corp/EngLearn/proto/conabit/englearn/common"
)

type HasSession interface{
	GetSession() *common.Session
}