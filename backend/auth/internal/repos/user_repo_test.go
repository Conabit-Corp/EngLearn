package repos

import (
	"context"
	"log"
	"math/rand"
	"testing"
	"time"

	"github.com/Conabit-Corp/EngLearn/backend/common/pkg/config"
	"github.com/Conabit-Corp/EngLearn/backend/common/pkg/inits"
	"github.com/stretchr/testify/suite"
)

type userRepoIntegrationTestSuite struct {
	suite.Suite
	repo *MongoUserRepo
}

func TestUserRepoIntegration(t *testing.T) {
	suite.Run(t, &userRepoIntegrationTestSuite{})
}

func (s *userRepoIntegrationTestSuite) SetupSuite() {
	log.Println("init user repo integartion tests")
	cnf := config.LoadConfigFromEnv()
	mongo := inits.NewMongoConnection(cnf)
	s.repo = NewMongoUserRepo(mongo)
}

func (s *userRepoIntegrationTestSuite) Test_Create_And_Find_User() {
	var err error
	login, passwordHash := randomString(), randomString()
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	createdUser, err := s.repo.CreateUser(ctx, login, passwordHash)
	s.NoError(err)
	s.NotNil(createdUser)
	s.Equal(login, createdUser.Nickname)
	s.Equal(passwordHash, createdUser.PasswordHash)

	foundUser, err := s.repo.FindUserByNickname(ctx, login)
	s.NoError(err)
	s.NotNil(foundUser)
	s.Equal(*createdUser, *foundUser)
	log.Println("pass test = Test_Create_And_Find_User")
}

func randomString() string {
	count := 10
	rand.Seed(time.Now().Unix())
	bytes := make([]byte, count)
	for i := 0; i < count; i++ {
		bytes[i] = byte(rand.Int())
	}
	return string(bytes)
}
