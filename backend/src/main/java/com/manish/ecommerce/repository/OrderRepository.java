package com.manish.ecommerce.repository;

import com.manish.ecommerce.domain.OrderModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrderRepository extends MongoRepository<OrderModel, String> {
}
