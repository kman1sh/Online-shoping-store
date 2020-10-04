package com.manish.ecommerce.repository;

import com.manish.ecommerce.domain.UserEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<UserEntity, String> {
}
